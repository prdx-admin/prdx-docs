#!/bin/sh
# Builds the documentation site into _site/: en/docs.md → /en/, ru/docs.md → /ru/, and a root page
# that opens the reader's language. The sources stay readable on GitHub; the copies in .site-src/ get
# the site's links. `site/build.sh serve ru` previews one language on localhost:8000.
set -eu
cd "$(dirname "$0")/.."

rm -rf .site-src _site
for l in en ru; do
  mkdir -p .site-src/$l
  cp -R figures site/assets site/stylesheets site/javascripts .site-src/$l/
  sed -E \
    -e 's#\(\.\./(en|ru)/docs\.md\)#(/\1/)#g' \
    -e 's#\.\./figures/#figures/#g' \
    -e 's#<div align="center">#<div align="center" markdown>#' \
    $l/docs.md > .site-src/$l/index.md
done

if [ "${1:-build}" = serve ]; then
  exec mkdocs serve -f site/${2:-ru}.yml
fi

for l in en ru; do
  mkdocs build --strict -f site/$l.yml
done
# корень: выбор языка, robots.txt, общая карта сайта, ключ IndexNow и llms.txt
cp site/root/* _site/
# llms-full.txt: оба текста документации в Markdown для языковых моделей
cat en/docs.md ru/docs.md > _site/llms-full.txt
# страница 404 одна на все три сайта (prdxcoin.com, app, docs): и в корне, и в обоих языках
cp site/root/404.html _site/en/404.html
cp site/root/404.html _site/ru/404.html
