# PARADOX (PRDX) — Complete Protocol Documentation

-   [Telegram Channel](https://t.me/prdxcoinproject)
-   [Telegram Application](https://t.me/prdxcoinbot)
-   [Repository with Project Economy Simulation](https://github.com/prdx-admin/prdx-sim/blob/main/paradox_model.ipynb)

| Contract                                                                                                   | Address                                          |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [Paradox Master](https://testnet.tonviewer.com/kQAi9ONGfiP28aeqJW6hAWh54r9LLvFUYbr9ViYfAuaLi2UO) [TESTNET] | EQAi9ONGfiP28aeqJW6hAWh54r9LLvFUYbr9ViYfAuaLi96E |

## 1. Introduction to the PARADOX Philosophy

### 1.1. The Essence of PARADOX: A Financial Instrument with Predictable Mathematics

PARADOX is a fundamentally new type of financial instrument whose value is determined not by market emotions or decisions of central authorities, but by strict mathematical laws. **It is an experiment in digitizing the abstract concept of financial risk** — creating an instrument where interaction with it allows one to satisfy an individual appetite for risk according to transparent and mathematically precise rules.

**What is the paradox?** The project's name reflects its very essence: creating a stable financial system through managed risk. In traditional economics, risk is considered a negative factor to be minimized. In PARADOX, risk becomes a constructive force — it is precisely through the mechanism of managed risk that the system creates value for all participants.

**Who is this for?**

-   **For conservative investors,** facing high volatility and information asymmetry in traditional markets.
-   **For those who prefer lotteries,** but value transparency and precise risk assessment over blind faith in luck.

Imagine a financial instrument that:

-   Has a transparent pricing formula instead of the uncertainty of market speculation.
-   Obeys clear mathematical rules instead of hidden mechanisms.
-   Transforms individual risk into collective benefit.
-   Gradually increases in value thanks to a built-in deflationary mechanism.

PARADOX is an experiment in creating the ideal financial instrument, where the unpredictability of traditional markets is replaced by mathematical certainty. A system where all rules are open, verifiable, and work for the benefit of every participant.

### 1.2. Core System Principles

**Mathematical Pricing**
The price of PRDX is calculated using an objective formula that links the number of tokens to the TON reserves. This eliminates the influence of subjective factors and creates a predictable economic environment.

**Full Reserve Backing**
Every PRDX token is 100% backed by TON held in the protocol's smart contract. This is a digital analogue of the gold standard, ensuring the asset's fundamental value.

**Controlled Deflation**
The system uses mathematically calibrated probabilistic processes to create constant deflationary pressure. This means the total supply of PRDX in circulation gradually decreases, which, all else being equal, leads to an increase in the value of each token.

### 1.3. Participant Roles in the System

👩 **Alice — The Conservative Investor**
Alice acquires PRDX through the Mint operation and holds them as a long-term investment. Her strategy is based on belief in the system's fundamental principles and the expectation of value appreciation due to the deflationary mechanism.

👨 **Bob — The Active Participant**
Bob uses the Mine operation to potentially increase his PRDX holdings. He consciously accepts a calculated risk, understanding the probabilistic nature of the operation and its mathematical expectation.

## 2. Mathematical Foundations of PARADOX

### 2.1. Basic System Parameters

| Parameter            | Value    | Description                                             |
| -------------------- | -------- | ------------------------------------------------------- |
| $\phi_{\text{mint}}$ | 0.015625 | Mint operation fee (1.5625%)                            |
| $\phi_{\text{burn}}$ | 0.015625 | Burn operation fee (1.5625%)                            |
| $EV_{\text{mine}}$   | -0.125   | Mathematical expectation of the Mine operation (-12.5%) |
| $L_{\text{mine}}$    | 0.125    | Mining limit (12.5% of total supply)                    |

**Parameter Motivation:** These values ensure a balance between incentivizing participation in the system and maintaining its long-term stability. The negative mathematical expectation of Mine creates deflationary pressure, and the limit protects against excessive influence from individual operations.

### 2.2. Dynamic Variables

-   $R$ — Total TON reserve in the protocol
-   $S$ — Total PRDX supply in circulation
-   $P_{\text{base}}$ — Base exchange rate of PRDX to TON

### 2.3. Pricing Formulas

**Base Rate:**

$$
P_{\text{base}} = \frac{S}{R}
$$

**Rate for the Mint Operation:**

$$
P_{\text{mint}} = \frac{S}{R} \times (1 - \phi_{\text{mint}})
$$

**Rate for the Burn Operation:**

$$
P_{\text{burn}} = \frac{R}{S} \times (1 - \phi_{\text{burn}})
$$

**Important Nuance:** In the Mint operation, the fee is charged in TON and does not enter the protocol's reserve. In the Burn operation, the fee is charged in PRDX and remains in the system. This means the $P_{\text{base}}$ rate does not change when Mint and Burn operations are executed.

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

### 3.1. Mint Operation — Issuing PRDX Tokens

**Economic Essence:** Depositing TON into the system's reserve and issuing new PRDX tokens.

**Process:**

1.  The user sends TON from their wallet.
2.  The protocol fee is deducted.
3.  The remaining TON is added to the system's reserve.
4.  New PRDX tokens are issued at the current rate.
5.  The new tokens are sent to the user's wallet.

**Execution Example:**

_Initial State:_

| Object     | Parameter        | Value          |
| :--------- | :--------------- | :------------- |
| **System** | PRDX Supply (S)  | 100,000 PRDX   |
|            | TON Reserve (R)  | 100 TON        |
| **User**   | TON Balance      | 50 TON         |
|            | PRDX Balance     | 0 PRDX         |
| **Rate**   | P<sub>base</sub> | 1,000 PRDX/TON |

_Action:_ The user sends 10 TON to mint PRDX.

_Calculations:_

-   System fee: `10 TON × 1.5625% = 0.15625 TON`
-   TON credited to reserve: `10 TON - 0.15625 TON = 9.84375 TON`
-   PRDX minted: `9.84375 TON × 1,000 PRDX/TON = 9,843.75 PRDX`

_Final State:_

| Object     | Parameter        | Value           | Change         |
| :--------- | :--------------- | :-------------- | :------------- |
| **System** | PRDX Supply (S)  | 109,843.75 PRDX | +9,843.75 PRDX |
|            | TON Reserve (R)  | 109.84375 TON   | +9.84375 TON   |
| **User**   | TON Balance      | 40 TON          | -10 TON        |
|            | PRDX Balance     | 9,843.75 PRDX   | +9,843.75 PRDX |
| **Rate**   | P<sub>base</sub> | 1,000 PRDX/TON  | **Unchanged**  |

**Key Point:** The fee does not enter the reserve, so the system's base rate **does not change**.

### 3.2. Burn Operation — Withdrawing TON from the Reserve

**Economic Essence:** Burning PRDX tokens and releasing TON from the system's reserve.

**Process:**

1.  The user sends PRDX from their wallet.
2.  The fee is deducted.
3.  The remaining PRDX are burned (removed from supply).
4.  TON is released from the system's reserve at the current rate.
5.  TON is sent to the user's wallet.

**Execution Example:**

_Initial State:_

| Object     | Parameter        | Value          |
| :--------- | :--------------- | :------------- |
| **System** | PRDX Supply (S)  | 100,000 PRDX   |
|            | TON Reserve (R)  | 100 TON        |
| **User**   | TON Balance      | 10 TON         |
|            | PRDX Balance     | 20,000 PRDX    |
| **Rate**   | P<sub>base</sub> | 1,000 PRDX/TON |

_Action:_ The user burns 10,000 PRDX to receive TON.

_Calculations:_

-   System fee: `10,000 PRDX × 1.5625% = 156.25 PRDX`
-   PRDX actually burned: `10,000 PRDX - 156.25 PRDX = 9,843.75 PRDX`
-   TON returned to user: `9,843.75 PRDX × (1 TON / 1,000 PRDX) = 9.84375 TON`

_Final State:_

| Object     | Parameter        | Value          | Change         |
| :--------- | :--------------- | :------------- | :------------- |
| **System** | PRDX Supply (S)  | 90,156.25 PRDX | -9,843.75 PRDX |
|            | TON Reserve (R)  | 90.15625 TON   | -9.84375 TON   |
| **User**   | TON Balance      | 19.84375 TON   | +9.84375 TON   |
|            | PRDX Balance     | 10,000 PRDX    | -10,000 PRDX   |
| **Rate**   | P<sub>base</sub> | 1,000 PRDX/TON | **Unchanged**  |

**Key Point:** The fee remains in the system (as PRDX), so the base rate **does not change**.

### 3.3. Mine Operation — Probabilistic Transformation of PRDX

**Economic Essence:** Transforming a user's tokens into one of several outcomes in a probabilistic manner.

**Process:**

1.  The user selects a deposit amount and the number of possible outcomes (2-32).
2.  Based on the result of a probabilistic process, a reward is determined (exactly one outcome is realized).
3.  Mathematical expectation: -12.5% of the deposit.

**Execution Example:**

_Initial State:_

| Object     | Parameter       | Value        |
| :--------- | :-------------- | :----------- |
| **System** | PRDX Supply (S) | 100,000 PRDX |
|            | TON Reserve (R) | 100 TON      |
| **User**   | PRDX Balance    | 1,000 PRDX   |

_Action:_ Participation in Mine with parameters `Deposit = 32 PRDX`, `Number of outcomes (n) = 3`.

_Minimum reward calculation:_
`reward_min = (2 × 32 PRDX × (1 - 0.125)) / (3 + 1) = 14 PRDX`

_Possible operation outcomes:_

| Outcome | Probability | Reward (PRDX) |
| :------ | :---------- | :------------ |
| 1       | 50%         | 14            |
| 2       | 25%         | 28            |
| 3       | 25%         | 56            |

**Consider Outcome 2 (reward 28 PRDX):**

_Final State:_

| Object     | Parameter       | Value       | Change        |
| :--------- | :-------------- | :---------- | :------------ |
| **System** | PRDX Supply (S) | 99,996 PRDX | -4 PRDX       |
|            | TON Reserve (R) | 100 TON     | **Unchanged** |
| **User**   | PRDX Balance    | 996 PRDX    | -4 PRDX       |

_Explanation:_

-   The user deposited 32 PRDX and received 28 PRDX back.
-   Net result for the user: `-4 PRDX`.
-   These 4 PRDX were burned by the system, creating deflationary pressure.

**Key Point:** TON reserves (R) remain unchanged, while the PRDX supply (S) on average decreases due to the negative mathematical expectation, leading to a **systematic increase in the base rate** `P_base = S/R`.

**Stability Limitation:** Maximum reward is limited: `reward_max ≤ 12.5% × S`

## 4. The Mine Operation and the St. Petersburg Paradox

### 4.1. Historical Basis: The St. Petersburg Paradox and Daniel Bernoulli

**Daniel Bernoulli** — a Swiss mathematician and physicist. In 1725, the St. Petersburg Academy of Sciences was established. Daniel was invited to serve at the academy, where he headed the department of physiology. During his 8 years of work in St. Petersburg, he laid the foundation for a number of works in mathematics and physics that later brought him worldwide fame.

One of them, "Exposition of a New Theory on the Measurement of Risk," is directly related to the Paradox project.

**What is the paradox?**

The classical formulation of the St. Petersburg paradox describes a hypothetical lottery:

-   The organizer flips a coin until it comes up tails.
-   If tails appears on the first flip — the player gets 2 coins.
-   If on the second — 4 coins.
-   If on the third — 8 coins.
-   And so on: on the n-th flip, the player gets $2^n$ coins.

The **mathematical expectation of the win** in such a lottery is infinite:

$$
E = \frac{1}{2} \times 2 + \frac{1}{4} \times 4 + \frac{1}{8} \times 8 + \ldots = 1 + 1 + 1 + \ldots = \infty
$$

However, in practice, reasonable people are only willing to pay a very small amount (usually no more than 20-30 coins) to participate in such a lottery. This contradiction between the infinite mathematical expectation and the modest real-world value constitutes the essence of the paradox.

Bernoulli resolved this paradox by introducing the concept of **marginal utility** — the idea that an additional coin has different value for a rich person and a poor person. This revolutionary idea for its time formed the basis of modern economic theory and decision-making under uncertainty.

### 4.2. Adaptation of the Paradox in PARADOX: From Theory to Practice

The PARADOX protocol is based not on the classical, but on a **finite version** of the St. Petersburg paradox, which includes two key modifications:

1.  **Negative mathematical expectation** $EV_{\text{mine}} = -12.5\%$
2.  **Limitation on the maximum win** $L_{\text{mine}} = 12.5\%$) of the PRDX supply

**Why these specific parameters?**

The negative mathematical expectation turns the Mine operation into a mechanism for creating collective value. Each Mine participant consciously accepts a calculated risk, and their "losses" on average become a gain for the entire system through the creation of deflationary pressure.

**The Importance of the Mining Limit**

The maximum win limit $L_{\text{mine}} = 12.5\% \times S$ is critically important for the system's stability. It guarantees that:

-   No single Mine operation can have a devastating impact on the protocol's economy.
-   The maximum potential decrease in the PRDX rate at any given moment is known and limited.
-   The system is protected from manipulation and excessive influence by large participants.

**Because of this limitation, there is a maximum possible "dip" in the rate at any moment, and this value is known and controllable.**

### 4.3. Mathematical Model of the Mine Operation

#### Basic Parameters:

-   $PRDX_{\text{deposit}}$ — The amount of PRDX transferred to participate in the operation.
-   $n$ — The number of possible outcomes (from 2 to 32).
-   $EV_{\text{mine}} = -0.125$ — Mathematical expectation.

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

This limitation guarantees that the maximum win in a single Mine operation cannot exceed 12.5% of the total PRDX supply, protecting the system from excessive influence by individual participants.

### 4.4. Practical Examples of the Mine Operation

#### Example 1: Conservative Strategy (n = 3)

**Conditions:**

-   Deposit: 32 PRDX
-   Number of outcomes (n): 3
-   Math. expectation (EV): -12.5%

**Calculations and Possible Outcomes:**

| Parameter                | Value   |
| :----------------------- | :------ |
| Minimum reward           | 14 PRDX |
| Mathematical expectation | 28 PRDX |

| Outcome | Probability | Reward (PRDX) | Net Result (PRDX) |
| :------ | :---------- | :------------ | :---------------- |
| 1       | 50%         | 14            | -18               |
| 2       | 25%         | 28            | -4                |
| 3       | 25%         | 56            | +24               |

#### Example 2: Aggressive Strategy (n = 6)

**Conditions:**

-   Deposit: 16 PRDX
-   Number of outcomes (n): 6
-   Math. expectation (EV): -12.5%

**Calculations and Possible Outcomes:**

| Parameter                | Value   |
| :----------------------- | :------ |
| Minimum reward           | 4 PRDX  |
| Mathematical expectation | 14 PRDX |

| Outcome | Probability | Reward (PRDX) | Net Result (PRDX) |
| :------ | :---------- | :------------ | :---------------- |
| 1       | 50%         | 4             | -12               |
| 2       | 25%         | 8             | -8                |
| 3       | 12.5%       | 16            | 0                 |
| 4       | 6.25%       | 32            | +16               |
| 5       | 3.125%      | 64            | +48               |
| 6       | 3.125%      | 128           | +112              |

## 5. Why the System is Stable and Beneficial for All

### 5.1. The Main Stability Mechanism

The PARADOX protocol is designed such that the Mine operation results in an average loss for its participant. The current value of this parameter is $-12.5\%$ of the PRDX amount involved in mining. This negative mathematical expectation guarantees that in the long run, the total amount of PRDX will gradually decrease.

**Stability Formula:**
With a fixed reserve $R$, a decrease in supply $S$ leads to a **systematic increase in the rate $P_{\text{base}} = S/R$**. This fundamental economic principle, working thanks to the mathematically guaranteed deflationary pressure of the Mine operation, underlies the system's stability.

### 5.2. Benefits for Different Participant Types

**For Alice 👩 (less risk-inclined):**
The value of her PRDX tokens will increase due to the deflationary pressure created by the activity of Mine operation participants. Alice receives a passive benefit from the system's operation without taking on additional risks.

**For Bob 👨 (more risk-inclined):**
Participation in the Mine operation provides an opportunity to multiply his tokens multiple times according to open and transparent rules. Although the mathematical expectation of the operation is negative, each individual run can yield a significant win, creating an incentive to participate.

### 5.3. Network Effect

The more participants like Alice and Bob in the system, the more accurately the system works — the value of PRDX increases more, deviating less from the ideal. Each new participant enhances the reliability and efficiency of the protocol for everyone.

Positive feedback mechanism:

1.  Growth in the number of participants increases Mine operation activity.
2.  Increased Mine activity strengthens deflationary pressure.
3.  Strengthened deflationary pressure leads to an increase in PRDX value.
4.  Increase in value attracts new participants.

## 6. PRDX as the Ideal Reserve Asset

### 6.1. Comparative Analysis

| Parameter            | Fiat Money          | Bitcoin        | Stablecoins       | PRDX           |
| :------------------- | :------------------ | :------------- | :---------------- | :------------- |
| **Backing**          | Trust in government | Network effect | Fiat reserves     | TON in reserve |
| **Inflation**        | High                | Moderate       | Depends on issuer | **Deflation**  |
| **Volatility**       | Low                 | High           | Very low          | Moderate\*     |
| **Transparency**     | Low                 | High           | Medium            | **Full**       |
| **Growth Potential** | Low                 | High           | None              | **High**       |

> Note: PRDX retains TON's volatility as it is pegged to it via reserves, but the deflation mechanism reduces overall risks and creates an upward trend.

### 6.2. Advantages of PRDX as a Reserve Asset

-   **Mathematical Predictability**
    Unlike traditional assets whose value depends on unpredictable market factors, the price of PRDX is determined by transparent algorithms. This allows for building long-term strategies based on objective data.

-   **Inflation Protection**
    The built-in deflation mechanism provides protection against devaluation, which is absent in fiat money and many other crypto assets.

-   **Full Backing**
    Every PRDX token is backed by real TON in the protocol's reserve, ensuring fundamental value and reducing risks compared to partially backed or unbacked assets.

-   **Risk Reduction**
    Although PRDX is pegged to TON and retains its volatility, the mechanism of controlled deflation creates a counter-trend of value appreciation, which overall reduces investment risks.

## 7. Getting Started with PARADOX

### 7.1. Preparatory Steps

1.  **Installing a Wallet:** It is recommended to use wallets compatible with the TON network (e.g., Tonkeeper).
2.  **Obtaining Test TON:** At the current stage, PARADOX operates on the TON testnet. It is necessary to obtain test TON for experimenting with the protocol.
3.  **Studying the Documentation:** Before starting, it is recommended to carefully study this documentation and understand the system's principles.

### 7.2. Interacting with the Interface

1.  **Going to the Bot:** Open [PrdxCoin](https://t.me/PrdxCoinBot) in Telegram.
2.  **Connecting a Wallet:** Use the "Connect" function to securely connect your TON wallet.
3.  **Selecting an Operation:** On the main screen, select the desired operation (Mint, Burn, Mine).
4.  **Executing Operations:** Follow the on-screen instructions to perform the selected operation.

> **Important Warning:** PARADOX is currently deployed on the TON testnet. All operations should be conducted using test TON, which has no real value. Do not use mainnet TON or real funds to interact with the protocol at this stage.

## 8. Participation Strategies in the Protocol

### 8.1. Conservative Strategy (Alice 👩)

**Goal:** Long-term preservation and multiplication of capital through the system's deflationary mechanism.

**Methods:**

-   Regular acquisition of PRDX via the Mint operation.
-   Long-term storage of the received tokens.
-   Periodic monitoring of the system's state.

**Advantages:**

-   Minimal risk level.
-   Simple implementation.
-   Passive participation in the system's growth.

### 8.2. Active Strategy (Bob 👨)

**Goal:** Actively increasing the amount of PRDX through participation in the Mine operation.

**Methods:**

-   Regular participation in the Mine operation with various parameters.
-   Analysis of probability distributions for different values of $n$.
-   Balancing between conservative and aggressive approaches.

**Advantages:**

-   Potential for rapid increase in PRDX holdings.
-   Active participation in maintaining the system's operation.
-   Access to the full spectrum of the protocol's capabilities.

## 9. Frequently Asked Questions

### 9.1. General Questions

**What is the main difference between PRDX and traditional stablecoins?**

Stablecoins are designed to maintain a stable value pegged to an external asset (e.g., the US dollar). PRDX, on the contrary, creates a mathematically predictable economy with a tendency for value appreciation thanks to the deflationary mechanism. While stablecoins strive for stability, PRDX strives for sustainable growth.

**What risks exist when using PARADOX?**

-   **Protocol Risk:** The possibility of vulnerabilities in the smart contracts.
-   **Liquidity Risk:** Although the Burn operation guarantees a return of TON, its value depends on the current state of the system.
-   **Risk for Active Participants:** The negative mathematical expectation of the Mine operation creates a systematic risk for its participants.
-   **Market Risk:** PRDX retains TON's volatility as it is backed by it.

### 9.2. Questions about Mining

**Why is the mathematical expectation of the Mine operation negative?**

The negative mathematical expectation ($EV_{\text{mine}} = -12.5\%$) is a fundamental element of the PARADOX economic model. It ensures the deflationary nature of the system, as on average it leads to a reduction in the total amount of PRDX in circulation. This reduction creates upward pressure on the token's value, benefiting all holders.

**How does the Mine operation differ from gambling?**

Key differences:

-   **Transparency:** All algorithms and probabilities are completely open.
-   **Mathematical Certainty:** The result is determined by clear mathematical models.
-   **Systemic Effect:** Individual "losses" are transformed into collective benefit.
-   **No Intermediaries:** The process is fully decentralized and algorithmic.

### 9.3. Questions about Pricing

**Can the PRDX to TON exchange rate decrease?**

Yes, short-term rate fluctuations are possible. They can be caused by:

-   Changes in the ratio between the TON reserve and the PRDX supply.
-   Activity of Mine operation participants.
-   External market factors affecting the value of TON.

However, the mathematical model creates long-term deflationary pressure, which forms a trend of increasing PRDX value.

**How do fees affect the system?**

Fees serve several important functions:

-   Ensure the sustainability of the economic model.
-   Create incentives for further protocol development.
-   Support infrastructure operation.
-   Balance supply and demand in the system.

## 10. Glossary of Terms

**PARADOX** — A decentralized financial protocol implementing a model of deflationary money with mathematical pricing.

**PRDX** — The native token of the PARADOX protocol, fully backed by TON and possessing deflationary characteristics.

**Mint** — The operation of acquiring PRDX tokens in exchange for TON. The deposited TON goes into the protocol's reserve.

**Burn** — The operation of returning TON from the protocol's reserve in exchange for PRDX tokens. The provided PRDX are removed from circulation.

**Mine** — A probabilistic PRDX transformation operation based on an adapted model of the St. Petersburg paradox.

**St. Petersburg Paradox** — A classic problem in probability theory demonstrating the discrepancy between the theoretical mathematical value of a lottery and the practical willingness of people to pay to participate.

**Mathematical Expectation** — The average result of a probabilistic operation when repeated many times. In the context of PARADOX, it characterizes the systemic effect of the Mine operation.

**Deflationary Pressure** — An economic effect expressed in the gradual reduction of the total amount of PRDX in circulation, which, all else being equal, leads to an increase in the token's value.

## 11. Conclusion

PARADOX represents an experiment in creating a new generation of financial instruments — instruments whose value is determined not by market speculation, but by transparent mathematical algorithms.

Through the adaptation of the classical probabilistic model of the St. Petersburg paradox, the protocol creates a symbiotic economic environment where different participant behavior strategies coexist mutually beneficially. Conservative holders benefit from the deflationary pressure created by active participants, and active participants get the opportunity to increase their assets through clearly defined probabilistic processes.

The system's stability is ensured by fundamental economic principles and mathematically calibrated parameters. The negative mathematical expectation of the Mine operation creates constant deflationary pressure, and limitations on operation sizes protect the system from excessive influence by individual participants.

PARADOX is not just another digital asset. It is an exploration of new forms of money based on transparency, mathematical predictability, and fair distribution of benefits among all system participants.

---

_This documentation describes the current state of the PARADOX protocol. System parameters may be changed during the protocol's development. Up-to-date information can always be found in the project's official sources._
