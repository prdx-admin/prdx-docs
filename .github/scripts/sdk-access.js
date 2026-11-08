// SDK early access: the queue check on an application issue and the invitation wave.
// Called from actions/github-script; the rules are in .github/ISSUE_TEMPLATE/sdk-early-access.yml.

const STAR_REPOS = ['prdx-admin/prdx-docs', 'prdx-admin/prdx-sim'];
const LABELS = {
  access: { name: 'sdk-access', color: '5319e7', description: 'SDK early access application' },
  queued: { name: 'queued', color: '0e8a16', description: 'In the SDK early access queue' },
  needsStar: { name: 'needs-star', color: 'd93f0b', description: 'A star on prdx-docs or prdx-sim is missing' },
  invited: { name: 'invited', color: '1d76db', description: 'Invited to the private SDK repository' },
  duplicate: { name: 'duplicate', color: 'cfd3d7', description: 'A second application from the same account' },
  requeued: { name: 'requeued', color: 'fbca04', description: 'Back in the queue after a missing star; the place counts from that moment' },
};
const MARK = '<!-- sdk-access -->';
// Every wave has WAVE applicants. A wave's invitations go out as soon as the queue holds all its
// applicants.
const WAVE = 5;

// The size of the next wave after `invited` invitations: what is left to the end of the current wave.
function nextWave(invited) {
  return WAVE - (invited % WAVE);
}

async function invitedTotal(github, owner, repo) {
  const issues = await github.paginate(github.rest.issues.listForRepo, {
    owner, repo, state: 'all', labels: LABELS.invited.name, per_page: 100,
  });
  return issues.filter((i) => !i.pull_request).length;
}

// The day the older of STAR_REPOS was created: no star on them is older.
const STARS_SINCE = '2025-05-05T00:00:00Z';

// The repositories from STAR_REPOS that `login` has not starred. The user's stars are public and are
// read newest first, page by page, down to STARS_SINCE. GitHub refuses the list of a repository's
// stargazers to the workflow's token, so the check goes through the user. `readers` are clients tried
// in order when GitHub refuses one of them.
async function missingStars(readers, login) {
  let refused;
  for (const [n, reader] of readers.entries()) {
    if (!reader) continue;
    try {
      const starred = new Set();
      for (let page = 1; ; page++) {
        const { data } = await reader.rest.activity.listReposStarredByUser({
          username: login, sort: 'created', direction: 'desc', per_page: 100, page,
          headers: { accept: 'application/vnd.github.star+json' },
        });
        for (const s of data) starred.add(s.repo.full_name.toLowerCase());
        const done = STAR_REPOS.every((r) => starred.has(r.toLowerCase()));
        if (done || data.length < 100 || data.at(-1).starred_at < STARS_SINCE) break;
      }
      return STAR_REPOS.filter((r) => !starred.has(r.toLowerCase()));
    } catch (e) {
      console.log(`stars of ${login}: reader ${n} refused: ${e.status || e.message}`);
      refused = e;
    }
  }
  throw refused;
}

async function ensureLabels(github, owner, repo) {
  const have = new Set(
    (await github.paginate(github.rest.issues.listLabelsForRepo, { owner, repo, per_page: 100 })).map((l) => l.name),
  );
  for (const l of Object.values(LABELS)) {
    if (have.has(l.name)) continue;
    try {
      await github.rest.issues.createLabel({ owner, repo, ...l });
    } catch (e) {
      if (e.status !== 422) throw e; // a parallel run created it first
    }
  }
}

async function applications(github, owner, repo) {
  const issues = await github.paginate(github.rest.issues.listForRepo, {
    owner, repo, state: 'open', labels: LABELS.access.name, per_page: 100,
  });
  return issues.filter((i) => !i.pull_request).sort((a, b) => a.number - b.number);
}

const hasLabel = (issue, l) => issue.labels.some((x) => (typeof x === 'string' ? x : x.name) === l.name);

// One comment per issue, rewritten on every check.
async function say(github, owner, repo, number, text) {
  const body = `${MARK}\n${text}`;
  const comments = await github.paginate(github.rest.issues.listComments, { owner, repo, issue_number: number, per_page: 100 });
  const mine = comments.find((c) => c.user.type === 'Bot' && c.body.startsWith(MARK));
  if (mine) await github.rest.issues.updateComment({ owner, repo, comment_id: mine.id, body });
  else await github.rest.issues.createComment({ owner, repo, issue_number: number, body });
}

async function setLabels(github, owner, repo, issue, add, remove) {
  for (const l of remove) {
    if (hasLabel(issue, l)) await github.rest.issues.removeLabel({ owner, repo, issue_number: issue.number, name: l.name });
  }
  const missing = add.filter((l) => !hasLabel(issue, l));
  if (missing.length) await github.rest.issues.addLabels({ owner, repo, issue_number: issue.number, labels: missing.map((l) => l.name) });
}

// The queued applications in queue order. An application enters the queue when a check finds both
// stars: at its creation, or, with the `requeued` label, at the last time it got the `queued` label.
// The second time comes from the issue's events, so only requeued applications cost an extra request.
async function queue(github, owner, repo) {
  const queued = (await applications(github, owner, repo)).filter((i) => hasLabel(i, LABELS.queued));
  const since = new Map();
  for (const i of queued) {
    let at = i.created_at;
    if (hasLabel(i, LABELS.requeued)) {
      const events = await github.paginate(github.rest.issues.listEvents, { owner, repo, issue_number: i.number, per_page: 100 });
      const last = events.filter((e) => e.event === 'labeled' && e.label && e.label.name === LABELS.queued.name).at(-1);
      if (last) at = last.created_at;
    }
    since.set(i.number, at);
  }
  return queued.sort((a, b) => since.get(a.number).localeCompare(since.get(b.number)) || a.number - b.number);
}

const starList = (missing) => missing.map((r) => `[${r.split('/')[1]}](https://github.com/${r})`).join(' and ');

// The waves that the queue fills: the first `size` queued applicants are invited when all of them
// still have both stars. An applicant without a star leaves the queue (rule 4), and the wave waits.
async function release({ github, owner, repo, early, earlyRepo, readers }) {
  const [eOwner, eRepo] = earlyRepo.split('/');
  for (;;) {
    const size = nextWave(await invitedTotal(github, owner, repo));
    const wave = (await queue(github, owner, repo)).slice(0, size);
    if (wave.length < size) return;
    let dropped = false;
    for (const issue of wave) {
      const login = issue.user.login;
      const missing = await missingStars(readers, login);
      if (!missing.length) continue;
      dropped = true;
      await say(github, owner, repo, issue.number, `@${login}, your wave is full, but a star is missing on ${starList(missing)}. Star it and comment \`/check\`: the application joins the end of the queue (rule 4).`);
      await setLabels(github, owner, repo, issue, [LABELS.needsStar], [LABELS.queued]);
    }
    if (dropped) continue;
    for (const issue of wave) {
      const login = issue.user.login;
      await early.rest.repos.addCollaborator({ owner: eOwner, repo: eRepo, username: login, permission: 'pull' });
      await say(github, owner, repo, issue.number, `@${login}, your wave is full: you are invited to the private SDK repository. Accept the invitation within 7 days: https://github.com/${earlyRepo}/invitations. The repository's README has the install command and the link to the early access chat.`);
      await setLabels(github, owner, repo, issue, [LABELS.invited], [LABELS.queued]);
      await github.rest.issues.update({ owner, repo, issue_number: issue.number, state: 'closed', state_reason: 'completed' });
    }
  }
}

// The wave of `place` in the queue after `invited` invitations: its size and the places taken in it.
function waveOf(invited, place, queued) {
  let start = 0;
  for (;;) {
    const size = nextWave(invited + start);
    if (place <= start + size) return { size, taken: Math.min(queued - start, size) };
    start += size;
  }
}

// issues.opened / issues.reopened / issue_comment "/check" on an application. Without `early` the
// waves are not released. `readers` read the applicants' stars (see missingStars()).
async function check({ github, context, core, early, earlyRepo, readers = [github, early] }) {
  const { owner, repo } = context.repo;
  const issue = context.payload.issue;
  // The form applies `sdk-access` only once the label exists, so the first application is also
  // recognised by the form's title and its Source field.
  const fromForm = issue.title === 'SDK early access' && /^### Source$/m.test(issue.body || '');
  if ((!hasLabel(issue, LABELS.access) && !fromForm) || issue.state !== 'open') return;
  if (context.eventName === 'issue_comment') {
    const c = context.payload.comment;
    if (c.user.login !== issue.user.login || c.body.trim() !== '/check') return;
  }
  await ensureLabels(github, owner, repo);
  if (!hasLabel(issue, LABELS.access)) {
    await github.rest.issues.addLabels({ owner, repo, issue_number: issue.number, labels: [LABELS.access.name] });
    issue.labels.push({ name: LABELS.access.name });
  }
  const login = issue.user.login;
  const open = await applications(github, owner, repo);
  const first = open.find((i) => i.user.login === login);
  if (first && first.number !== issue.number) {
    await say(github, owner, repo, issue.number, `@${login}, your application is #${first.number}. This one is closed as a second application (rule 2).`);
    await setLabels(github, owner, repo, issue, [LABELS.duplicate], [LABELS.queued, LABELS.needsStar]);
    await github.rest.issues.update({ owner, repo, issue_number: issue.number, state: 'closed', state_reason: 'not_planned' });
    return;
  }
  const missing = await missingStars(readers, login);
  if (missing.length) {
    await say(github, owner, repo, issue.number, `@${login}, a star is missing on ${starList(missing)}. Star it and comment \`/check\`.`);
    await setLabels(github, owner, repo, issue, [LABELS.needsStar], [LABELS.queued]);
    return;
  }
  // An application that waited for a star joins the end of the queue.
  const back = hasLabel(issue, LABELS.needsStar) ? [LABELS.requeued] : [];
  await setLabels(github, owner, repo, issue, [LABELS.queued, ...back], [LABELS.needsStar]);
  if (early) await release({ github, owner, repo, early, earlyRepo, readers });
  else if (core) core.warning('EARLY_TOKEN is not set: waves are not released');
  const queued = await queue(github, owner, repo);
  const place = queued.findIndex((i) => i.number === issue.number) + 1;
  if (!place) return; // invited by this run, or left the queue for a missing star
  const { size, taken } = waveOf(await invitedTotal(github, owner, repo), place, queued.length);
  await say(github, owner, repo, issue.number, `@${login}, you are in the queue: place ${place}. Your wave has ${size} ${size === 1 ? 'place' : 'places'}, ${taken} taken. Invitations go out as soon as all of them are taken (rule 5); comment \`/check\` to see the count again.`);
}

module.exports = { check, release, queue, nextWave, waveOf, WAVE, missingStars, applications, STAR_REPOS, LABELS };
