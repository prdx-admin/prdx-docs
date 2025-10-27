# PARADOX (PRDX) — Complete Protocol Documentation

-   [Telegram Channel](https://t.me/prdxcoinproject)
-   [Telegram Application](https://t.me/prdxcoinbot)
-   [Economy Simulation Repository](https://github.com/prdx-admin/prdx-sim/blob/main/paradox_model.ipynb)

| Contract | Address |
|----------|---------|
| [Paradox Master](https://testnet.tonviewer.com/kQAi9ONGfiP28aeqJW6hAWh54r9LLvFUYbr9ViYfAuaLi2UO) [TESTNET] | EQAi9ONGfiP28aeqJW6hAWh54r9LLvFUYbr9ViYfAuaLi96E |

## 1. Introduction to PARADOX Philosophy

### 1.1. The Essence of PARADOX: Financial Instrument with Predictable Mathematics

PARADOX is a fundamentally new type of financial instrument whose value is determined not by market emotions or central authority decisions, but by strict mathematical laws. **It is an experiment in digitizing the abstract concept of financial risk** — creating an instrument that allows satisfying individual risk appetite through transparent and mathematically precise rules.

**What is the paradox?** The project's name reflects its core essence: creating a sustainable financial system through managed risk. In traditional economics, risk is considered a negative factor to be minimized. In PARADOX, risk becomes a constructive force — it is precisely through the mechanism of managed risk that the system creates value for all participants.

**Who is this for?**

-   **Conservative investors** facing high volatility and information asymmetry in traditional markets
-   **Those who prefer lotteries** but value transparency and accurate risk assessment over blind faith in luck

Imagine a financial instrument that:

-   Has a transparent pricing formula instead of market speculation uncertainty
-   Follows clear mathematical rules instead of hidden mechanisms
-   Transforms individual risk into collective benefit
-   Gradually increases its value thanks to a built-in deflationary mechanism

PARADOX is an experiment in creating the perfect financial instrument, where the unpredictability of traditional markets is replaced by mathematical certainty. A system where all rules are open, verifiable, and work for the benefit of every participant.

### 1.2. Core System Principles

**Mathematical Pricing**
PRDX value is calculated using an objective formula linking token quantity to TON reserves. This eliminates the influence of subjective factors and creates a predictable economic environment.

**Full Reserve Backing**
Every PRDX token is 100% backed by TON stored in the protocol's smart contract. This is a digital equivalent of the gold standard, ensuring fundamental asset value.

**Controlled Deflation**
The system uses mathematically calibrated probabilistic processes to create constant deflationary pressure. This means the total PRDX supply gradually decreases, leading to increased value per token, all else being equal.

### 1.3. Participant Roles in the System

👩 **Alice — Conservative Investor**
Alice acquires PRDX through the Mint operation and holds them as a long-term investment. Her strategy is based on belief in the system's fundamental principles and expectation of value appreciation through the deflationary mechanism.

👨 **Bob — Active Participant**
Bob uses the Mine operation to potentially increase his PRDX quantity. He consciously accepts calculated risk, understanding the probabilistic nature of the operation and its mathematical expectation.

## 2. Mathematical Foundations of PARADOX

### 2.1. Basic System Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| $\phi_{\text{mint}}$ | 0.015625 | Mint operation fee (1.5625%) |
| $\phi_{\text{burn}}$ | 0.015625 | Burn operation fee (1.5625%) |
| $EV_{\text{mine}}$ | -0.125 | Mine operation expected value (-12.5%) |
| $L_{\text{mine}}$ | 0.125 | Mining limit (12.5% of emission) |

**Parameter Motivation:** These values ensure balance between incentivizing system participation and maintaining long-term stability. The negative expected value of Mine creates deflationary pressure, while the limit protects against excessive influence of individual operations.

### 2.2. Dynamic Variables

-   $R$ — Total TON reserve in the protocol
-   $S$ — Total PRDX emission in circulation
-   $P_{\text{base}}$ — Base exchange rate of PRDX to TON

### 2.3. Pricing Formulas

**Base Rate:**

$$
P_{\text{base}} = \frac{S}{R}
$$

**Mint Operation Rate:**

$$
P_{\text{mint}} = \frac{S}{R} \times (1 - \phi_{\text{mint}})
$$

**Burn Operation Rate:**

$$
P_{\text{burn}} = \frac{R}{S} \times (1 - \phi_{\text{burn}})
$$

**Important Nuance:** In the Mint operation, the fee is charged in TON and does not enter the protocol reserve. In the Burn operation, the fee is charged in PRDX and remains in the system. This means the $P_{\text{base}}$ rate doesn't change when executing Mint and Burn operations.

### 2.4. Operation Formulas

#### Mint Operation

$$
PRDX_{\text{received}} = TON_{\text{sent}} \times \frac{S}{R} \times (1 - \phi_{\text{mint}})
$$

#### Burn Operation

$$
TON_{\text{received}} = PRDX_{\text{sent}} \times \frac{R}{S} \times (1 - \phi_{\text{burn}})
$$

## 3. PARADOX Protocol Operations

### 3.1. Mint Operation — PRDX Token Issuance

**Economic Essence:** Depositing TON into the system reserve and issuing new PRDX tokens.

**Process:**

1.  User sends TON from their wallet
2.  Protocol fee is deducted
3.  Remaining TON enters the system reserve
4.  New PRDX tokens are issued at current rate
5.  New tokens are sent to user's wallet

**Execution Example:**

*Initial State:*

| Object | Parameter | Value |
|--------|-----------|-------|
| **System** | PRDX Emission (S) | 100,000 PRDX |
| | TON Reserve (R) | 100 TON |
| **User** | TON Balance | 50 TON |
| | PRDX Balance | 0 PRDX |
| **Rate** | P<sub>base</sub> | 1,000 PRDX/TON |

*Action:* User sends 10 TON to mint PRDX.

*Calculations:*

-   System fee: `10 TON × 1.5625% = 0.15625 TON`
-   TON added to reserve: `10 TON - 0.15625 TON = 9.84375 TON`
-   PRDX issued: `9.84375 TON × 1,000 PRDX/TON = 9,843.75 PRDX`

*Final State:*

| Object | Parameter | Value | Change |
|--------|-----------|-------|--------|
| **System** | PRDX Emission (S) | 109,843.75 PRDX | +9,843.75 PRDX |
| | TON Reserve (R) | 109.84375 TON | +9.84375 TON |
| **User** | TON Balance | 40 TON | -10 TON |
| | PRDX Balance | 9,843.75 PRDX | +9,843.75 PRDX |
| **Rate** | P<sub>base</sub> | 1,000 PRDX/TON | **Unchanged** |

**Important Point:** The fee doesn't enter the reserve, so the system's base rate **does not change**.

### 3.2. Burn Operation — TON Withdrawal from Reserve

**Economic Essence:** Burning PRDX tokens and releasing TON from the system reserve.

**Process:**

1.  User sends PRDX from their wallet
2.  Fee is deducted
3.  Remaining PRDX are burned (removed from emission)
4.  TON is released from system reserve at current rate
5.  TON is sent to user's wallet

**Execution Example:**

*Initial State:*

| Object | Parameter | Value |
|--------|-----------|-------|
| **System** | PRDX Emission (S) | 100,000 PRDX |
| | TON Reserve (R) | 100 TON |
| **User** | TON Balance | 10 TON |
| | PRDX Balance | 20,000 PRDX |
| **Rate** | P<sub>base</sub> | 1,000 PRDX/TON |

*Action:* User burns 10,000 PRDX to receive TON.

*Calculations:*

-   System fee: `10,000 PRDX × 1.5625% = 156.25 PRDX`
-   PRDX actually burned: `10,000 PRDX - 156.25 PRDX = 9,843.75 PRDX`
-   TON returned to user: `9,843.75 PRDX × (1 TON / 1,000 PRDX) = 9.84375 TON`

*Final State:*

| Object | Parameter | Value | Change |
|--------|-----------|-------|--------|
| **System** | PRDX Emission (S) | 90,156.25 PRDX | -9,843.75 PRDX |
| | TON Reserve (R) | 90.15625 TON | -9.84375 TON |
| **User** | TON Balance | 19.84375 TON | +9.84375 TON |
| | PRDX Balance | 10,000 PRDX | -10,000 PRDX |
| **Rate** | P<sub>base</sub> | 1,000 PRDX/TON | **Unchanged** |

**Important Point:** The fee remains in the system (as PRDX), so the base rate **does not change**.

### 3.3. Mine Operation — Probabilistic PRDX Transformation

**Economic Essence:** Transforming user's tokens into one of several outcomes probabilistically.

**Process:**

1.  User selects deposit amount and number of possible outcomes (2-32)
2.  Reward is determined based on probabilistic process outcome (exactly one outcome is realized)
3.  Mathematical expectation: -12.5% of deposit

**Execution Example:**

*Initial State:*

| Object | Parameter | Value |
|--------|-----------|-------|
| **System** | PRDX Emission (S) | 100,000 PRDX |
| | TON Reserve (R) | 100 TON |
| **User** | PRDX Balance | 1,000 PRDX |

*Action:* Participation in Mine with parameters `Deposit = 32 PRDX`, `Number of outcomes (n) = 3`.

*Minimum reward calculation:*
`reward_min = (2 × 32 PRDX × (1 - 0.125)) / (3 + 1) = 14 PRDX`

*Possible operation outcomes:*

| Outcome | Probability | Reward (PRDX) |
|---------|-------------|---------------|
| 1 | 50% | 14 |
| 2 | 25% | 28 |
| 3 | 25% | 56 |

**Consider outcome 2 (reward 28 PRDX):**

*Final State:*

| Object | Parameter | Value | Change |
|--------|-----------|-------|--------|
| **System** | PRDX Emission (S) | 99,996 PRDX | -4 PRDX |
| | TON Reserve (R) | 100 TON | **Unchanged** |
| **User** | PRDX Balance | 996 PRDX | -4 PRDX |

*Explanation:*

-   User deposited 32 PRDX and received 28 PRDX back.
-   Net result for user: `-4 PRDX`.
-   These 4 PRDX were burned by the system, creating deflationary pressure.

**Key Point:** TON reserves (R) remain unchanged, while PRDX emission (S) decreases on average due to negative mathematical expectation, leading to **systematic rate growth** `P_base = S/R`.

**Stability Limitation:** Maximum reward is limited: `reward_max ≤ 12.5% × S`

## 4. Mine Operation and St. Petersburg Paradox

### 4.1. Historical Foundation: St. Petersburg Paradox and Daniel Bernoulli

**Daniel Bernoulli** — Swiss mathematician and physicist. In 1725, the St. Petersburg Academy of Sciences was established. Daniel was invited to serve at the academy, where he chaired the physiology department. During his 8 years in St. Petersburg, he laid the foundation for numerous works in mathematics and physics that later brought him worldwide fame.

One of them, "Exposition of a New Theory on the Measurement of Risk," is directly related to the Paradox project.

**What is the paradox?**

The classical formulation of the St. Petersburg paradox describes a hypothetical lottery:

-   The organizer flips a coin until tails appears
-   If tails appears on the first toss — player receives 2 coins
-   If on the second — 4 coins
-   If on the third — 8 coins
-   And so on: on the n-th toss player receives $2^n$ coins

**Mathematical expectation of winnings** in such a lottery is infinite:

$$
E = \frac{1}{2} \times 2 + \frac{1}{4} \times 4 + \frac{1}{8} \times 8 + \ldots = 1 + 1 + 1 + \ldots = \infty
$$

However, in practice, reasonable people are only willing to pay a very small amount (usually no more than 20-30 coins) to participate in such a lottery. This contradiction between infinite mathematical expectation and modest real value constitutes the essence of the paradox.

Bernoulli resolved this paradox by introducing the concept of **marginal utility** — the idea that an additional coin has different value for rich and poor people. This revolutionary idea for its time laid the foundation for modern economic theory and decision-making under uncertainty.

### 4.2. Paradox Adaptation in PARADOX: From Theory to Practice

The PARADOX protocol is based not on the classical, but on a **finite version** of the St. Petersburg paradox, which includes two key modifications:

1. **Negative mathematical expectation** $EV_{\text{mine}} = -12.5\%$
2. **Limit on maximum winnings** $L_{\text{mine}} = 12.5\%$) of PRDX emission

**Why these particular parameters?**

Negative mathematical expectation turns the Mine operation into a mechanism for creating collective value. Each Mine participant consciously accepts calculated risk, and their "losses" on average become gains for the entire system through deflationary pressure creation.

**Importance of Mining Limit**

The maximum win limit $L_{\text{mine}} = 12.5\% \times S$ is critically important for system stability. It guarantees that:

-   No single Mine operation can have destructive impact on protocol economy
-   Maximum potential PRDX rate decrease at any moment is known and limited
-   System is protected from manipulation and excessive influence of large participants

**Due to this limitation, there is a maximum possible rate "dip" at any moment, and this value is known and controllable.**

### 4.3. Mathematical Model of Mine Operation

#### Basic Parameters:

-   $PRDX_{\text{deposit}}$ — Amount of PRDX transferred for operation participation
-   $n$ — Number of possible outcomes (from 2 to 32)
-   $EV_{\text{mine}} = -0.125$ — Mathematical expectation

#### Minimum Reward Calculation:

$$
\text{reward}_{\text{min}} = \frac{2 \times PRDX_{\text{deposit}} \times (1 + EV_{\text{mine}})}{n + 1}
$$

#### Reward for outcome $i$ (where $i = 1, 2, \ldots, n$):

$$
\text{reward}(i) = \text{reward}_{\text{min}} \times 2^{i-1}
$$

#### Outcome Probabilities:

$$
P(i) = \begin{cases}
\frac{1}{2^i} & \text{for } i = 1, 2, \ldots, n-1 \\
\frac{1}{2^{n-1}} & \text{for } i = n
\end{cases}
$$

#### Mathematical Expectation:

$$
E[\text{reward}] = \sum_{i=1}^{n} P(i) \times \text{reward}(i) = PRDX_{\text{deposit}} \times (1 + EV_{\text{mine}})
$$

#### Mine Operation Limitation:

$$
\text{reward}_{\text{max}} = \text{reward}_{\text{min}} \times 2^{n-1} \leq L_{\text{mine}} \times S
$$

This limitation guarantees that the maximum win in a single Mine operation cannot exceed 12.5% of total PRDX emission, protecting the system from excessive influence of individual participants.

### 4.4. Practical Mine Operation Examples

#### Example 1: Conservative Strategy (n = 3)

**Conditions:**

-   Deposit: 32 PRDX
-   Number of outcomes (n): 3
-   Expected value (EV): -12.5%

**Calculations and Possible Outcomes:**

| Parameter | Value |
|-----------|-------|
| Minimum Reward | 14 PRDX |
| Expected Reward | 28 PRDX |

| Outcome | Probability | Reward (PRDX) | Net Result (PRDX) |
|---------|-------------|---------------|-------------------|
| 1 | 50% | 14 | -18 |
| 2 | 25% | 28 | -4 |
| 3 | 25% | 56 | +24 |

#### Example 2: Aggressive Strategy (n = 6)

**Conditions:**

-   Deposit: 16 PRDX
-   Number of outcomes (n): 6
-   Expected value (EV): -12.5%

**Calculations and Possible Outcomes:**

| Parameter | Value |
|-----------|-------|
| Minimum Reward | 4 PRDX |
| Expected Reward | 14 PRDX |

| Outcome | Probability | Reward (PRDX) | Net Result (PRDX) |
|---------|-------------|---------------|-------------------|
| 1 | 50% | 4 | -12 |
| 2 | 25% | 8 | -8 |
| 3 | 12.5% | 16 | 0 |
| 4 | 6.25% | 32 | +16 |
| 5 | 3.125% | 64 | +48 |
| 6 | 3.125% | 128 | +112 |

## 5. Why the System is Sustainable and Beneficial for All

### 5.1. Main Sustainability Mechanism

The PARADOX protocol is designed so that the Mine operation results in average loss for its participant. The current value of this parameter is $-12.5\%$ of the PRDX amount participating in mining. This negative mathematical expectation guarantees that in the long term, the total PRDX quantity will gradually decrease.

**Sustainability Formula:**
With fixed reserve $R$, decreasing emission $S$ leads to **predictable growth of rate $P_{\text{base}} = S/R$**. This fundamental economic principle, working thanks to mathematically guaranteed deflationary pressure from the Mine operation, forms the basis of system sustainability.

### 5.2. Benefits for Different Participant Types

**For Alice 👩 (less risk-averse):**
Her PRDX token value increases thanks to deflationary pressure created by Mine operation participants' activity. Alice receives passive benefit from system operation without taking additional risks.

**For Bob 👨 (more risk-averse):**
Participation in Mine operation provides opportunity to multiply tokens through open and transparent rules. Although the operation's mathematical expectation is negative, each individual run can bring significant winnings, creating participation incentive.

### 5.3. Network Effect

The more participants like Alice and Bob in the system, the more precisely it works — PRDX value increases more, deviating less from ideal. Each new participant enhances reliability and efficiency of the protocol for everyone.

Positive feedback mechanism:

1. Growing number of participants increases Mine operation activity
2. Increased Mine activity strengthens deflationary pressure
3. Strengthened deflationary pressure leads to PRDX value growth
4. Value growth attracts new participants

## 6. PARADOX Benefits

### 6.1. Key System Advantages

**Mathematical Certainty Instead of Market Uncertainty**
Token value is determined by a transparent formula, not market speculation. Predictable algorithm logic replaces emotional market fluctuations.

**100% TON Backing — Digital Gold Standard**
Every PRDX token is fully backed by TON in the smart contract reserve. The reserve can be verified directly on the blockchain at any time.

**Algorithmic Transparency and Stability**
All system rules are codified in smart contracts and operate automatically. No hidden terms or possibility of manual intervention.

**Controlled Deflation as Growth Engine**
Mathematically guaranteed reduction of PRDX supply creates systemic pressure for value appreciation — a rare feature in modern financial systems.

**Differentiated Strategies for Your Risk Appetite**
Conservative holding or active participation — the system creates benefits for both strategies through a symbiotic economic model.

**Self-Balancing Economy**
Individual risk taken by Mine participants transforms into collective benefit through the deflationary mechanism, ensuring system sustainability.

## 7. PRDX as Ideal Reserve Asset

### 7.1. Comparative Analysis

| Parameter | Fiat Money | Bitcoin | Stablecoins | PRDX |
|-----------|------------|---------|-------------|------|
| **Backing** | Trust in government | Network effect | Fiat reserves | TON in reserve |
| **Inflation** | High | Moderate | Depends on issuer | **Deflation** |
| **Volatility** | Low | High | Very low | Moderate* |
| **Transparency** | Low | High | Medium | **Full** |
| **Growth Potential** | Low | High | None | **High** |

> Note: PRDX maintains TON volatility since it's backed by it through reserves, but the deflation mechanism reduces overall risks and creates growth tendency.

### 7.2. PRDX Advantages as Reserve Asset

-   **Mathematical Predictability**
    Unlike traditional assets whose value depends on unpredictable market factors, PRDX price is determined by transparent algorithms. This enables building long-term strategies based on objective data.

-   **Inflation Protection**
    Built-in deflation mechanism provides protection against devaluation, which is absent in fiat money and many other crypto assets.

-   **Full Backing**
    Each PRDX token is backed by real TON in the protocol reserve, ensuring fundamental value and reducing risks compared to partially backed or unbacked assets.

-   **Risk Reduction**
    Although PRDX is tied to TON and maintains its volatility, the controlled deflation mechanism creates counter-tendency for value growth, generally reducing investment risks.

## 8. Getting Started with PARADOX

### 8.1. Preparation Steps

1. **Wallet Installation:** Recommended to use TON network compatible wallets (e.g., Tonkeeper).
2. **Obtaining Test TON:** Currently PARADOX operates on TON testnet. Need to obtain test TON for protocol experiments.
3. **Studying Documentation:** Before starting, carefully study this documentation and understand system principles.

### 8.2. Interface Interaction

1. **Go to Bot:** Open [PrdxCoin](https://t.me/PrdxCoinBot) in Telegram.
2. **Connect Wallet:** Use "Connect" function for secure connection of your TON wallet.
3. **Select Operation:** On main screen, choose desired operation (Mint, Burn, Mine).
4. **Execute Operations:** Follow on-screen instructions for selected operation.

> **Important Warning:** PARADOX is currently deployed on TON testnet. All operations should be conducted using test TON, which has no real value. Do not use mainnet TON or real funds for protocol interaction at this stage.

## 9. Participation Strategies

### 9.1. Conservative Strategy (Alice 👩)

**Goal:** Long-term capital preservation and growth through system deflation mechanism.

**Methods:**

-   Regular PRDX acquisition through Mint operation
-   Long-term holding of obtained tokens
-   Periodic system state monitoring

**Advantages:**

-   Minimum risk level
-   Simple implementation
-   Passive participation in system growth

### 9.2. Active Strategy (Bob 👨)

**Goal:** Active PRDX quantity increase through Mine operation participation.

**Methods:**

-   Regular Mine operation participation with various parameters
-   Analysis of probability distributions for different $n$ values
-   Balancing between conservative and aggressive approaches

**Advantages:**

-   Potential for rapid PRDX quantity increase
-   Active participation in maintaining system operation
-   Access to full spectrum of protocol capabilities

## 10. Frequently Asked Questions

### 10.1. General Questions

**What makes PRDX unique?**
PRDX is the first financial instrument that digitizes the abstract concept of risk. Its value is determined not by market speculation, but by strict mathematical formulas. This is an experiment in creating the perfect financial asset, where all rules are open, verifiable, and work for the benefit of every participant.

**How is PRDX different from stablecoins?**
Stablecoins aim for stability by pegging to external assets. PRDX creates a sustainable economy with controlled deflation — each token is 100% backed by TON, but has a built-in mechanism for value appreciation thanks to mathematically guaranteed supply reduction.

**What is the basis of PRDX's value?**
The value has a dual nature: 1) 100% TON backing in reserve (digital gold standard), 2) Deflationary mechanism that systematically reduces PRDX supply against a fixed TON reserve, creating mathematically predictable value growth.

### 10.2. Mining Questions

**What is the Mine operation?**
A probability-based operation built on an adapted version of Bernoulli's St. Petersburg Paradox. You deposit PRDX and choose the number of outcomes (2-32). Exactly one outcome is realized with known probability. Mathematical expectation: -12.5%, creating deflationary pressure for the entire system.

**How does PARADOX differ from Bernoulli's original game?**
The classical paradox has infinite mathematical expectation. In PARADOX, we introduce two key constraints: negative expected value (-12.5%) and a maximum win limit (12.5% of emission). This transforms a theoretical construct into a sustainable economic model.

**What is the main paradox of the system?**
Risk, which is considered destructive in traditional economics, becomes a constructive force here. Individual 'losses' of Mine participants are transformed into collective benefit through the deflationary mechanism that increases token value for all holders.

**Is Mine a gambling game?**
No, it's an economic mechanism with transparent mathematics. Unlike gambling, all algorithms are open, probabilities are known, and individual risk creates systemic value. It's a tool for satisfying individual risk appetite according to clear mathematical rules.

**Can I lose funds in Mine?**
Yes, and this is a conscious part of the economic model. The negative mathematical expectation (-12.5%) guarantees that on average Mine participants lose part of their deposit. These 'losses' create the deflationary pressure necessary for PRDX value appreciation in the long term.

### 10.3. Pricing Questions

**What do PRDX holders get if they don't participate in Mine?**
They receive passive benefits from the system's operation. The deflationary pressure created by Mine participants' activity systematically reduces PRDX supply against a fixed TON reserve, leading to predictable growth in the exchange rate.

**Can the price of PRDX decrease?**
Short-term fluctuations are possible due to changes in the reserve-to-emission ratio, as well as TON volatility. However, the mathematical model creates long-term deflationary pressure, forming a sustainable trend toward value appreciation.

**What participation strategies are most effective?**
👩 Conservative (Alice): Long-term PRDX holding with minimal risk. 👨 Active (Bob): Mine participation aiming for large wins. The system benefits both: Alice gets value appreciation, Bob gets the chance to multiply tokens.

**What are the protocol risks?**
TON volatility (reserve asset) • Systematic risk for Mine participants (negative expected value) • Liquidity risk. However, the model self-balances: the deflationary mechanism creates counter-pressure for growth.

## 11. Glossary of Terms

**PARADOX** — Decentralized financial protocol implementing deflationary money model with mathematical pricing.

**PRDX** — Native token of PARADOX protocol, fully backed by TON and possessing deflationary characteristics.

**Mint** — Operation of acquiring PRDX tokens in exchange for TON. Deposited TON enters protocol reserve.

**Burn** — Operation of returning TON from protocol reserve in exchange for PRDX tokens. Provided PRDX are removed from circulation.

**Mine** — Probabilistic PRDX transformation operation based on adapted St. Petersburg Paradox model.

**St. Petersburg Paradox** — Classical probability theory problem demonstrating discrepancy between theoretical mathematical lottery value and practical willingness to pay for participation.

**Mathematical Expectation** — Average result of probabilistic operation when repeated multiple times. In PARADOX context, characterizes systemic effect of Mine operation.

**Deflationary Pressure** — Economic effect expressed in gradual reduction of total PRDX in circulation, leading to increased token value, all else being equal.

## 12. Conclusion

PARADOX represents an experiment in creating next-generation financial instruments — instruments whose value is determined not by market speculation, but by transparent mathematical algorithms.

Through adaptation of the classical probability model of St. Petersburg Paradox, the protocol creates a symbiotic economic environment where different participant behavior strategies coexist beneficially. Conservative holders benefit from deflationary pressure created by active participants, while active participants get opportunity to increase their assets through clearly defined probabilistic processes.

System sustainability is ensured by fundamental economic principles and mathematically calibrated parameters. Negative mathematical expectation of Mine operation creates constant deflationary pressure, while operation size limitations protect the system from excessive influence of individual participants.

PARADOX is not just another digital asset. It is research into new forms of money based on transparency, mathematical predictability, and fair distribution of benefits among all system participants.

---

*This documentation describes current state of PARADOX protocol. System parameters may be changed during protocol development. Current information can always be found in official project sources.*
