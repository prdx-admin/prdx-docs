# PARADOX (PRDX) — Full Protocol Documentation

## 1. Introduction to the Philosophy of PARADOX

### 1.1. The Essence of PARADOX: A Financial Instrument with Predictable Mathematics

**PRDX: Risk That Works for Everyone**

PARADOX is a fundamentally new type of financial instrument, whose value is determined not by market emotions or decisions of central authorities, but by strict mathematical laws.

**What is the paradox?** The project's name reflects its very essence: creating a sustainable financial system through managed risk. In traditional economics, risk is considered a negative factor that is minimized. In PARADOX, risk becomes a constructive force — it is through the mechanism of managed risk that the system creates value for all participants.

Imagine a financial instrument that:

-   Has a transparent pricing formula instead of market speculation uncertainty
-   Obeys clear mathematical rules instead of hidden mechanisms
-   Turns individual risk into collective benefit
-   Gradually increases its value due to a built-in deflationary mechanism

PARADOX is an experiment in creating the ideal financial instrument, where the unpredictability of traditional markets is replaced by mathematical certainty. A system where all rules are open, verifiable, and work for the benefit of every participant.

### 1.2. Core Principles of the System

**Mathematical Pricing**
The value of PRDX is calculated using an objective formula that links the number of tokens to TON reserves. This eliminates the influence of subjective factors and creates a predictable economic environment.

**Full Reserve Backing**
Each PRDX token is 100% backed by TON stored in the protocol's smart contract. This is a digital analog of the gold standard, ensuring the fundamental value of the asset.

**Controlled Deflation**
The system uses mathematically verified probabilistic processes to create constant deflationary pressure. This means that the total amount of PRDX in circulation gradually decreases, which, all else being equal, leads to an increase in the value of each token.

### 1.3. Roles of System Participants

👩 **Alice — Conservative Investor**
Alice acquires PRDX through the Mint operation and holds them as a long-term investment. Her strategy is based on faith in the system's fundamental principles and the expectation of value growth due to the deflationary mechanism.

👨 **Bob — Active Participant**
Bob uses the Mine operation to potentially increase his amount of PRDX. He consciously accepts calculated risk, understanding the probabilistic nature of the operation and its mathematical expectation.

## 2. Mathematical Foundations of PARADOX

### 2.1. Basic System Parameters

| Parameter     | Value    | Description                                   |
| ------------- | -------- | --------------------------------------------- |
| $\phi_{mint}$ | 0.015625 | Mint operation fee (1.5625%)                  |
| $\phi_{burn}$ | 0.015625 | Burn operation fee (1.5625%)                  |
| $EV_{mine}$   | -0.125   | Mathematical expectation of Mine operation (-12.5%) |
| $L_{mine}$    | 0.125    | Mining limit (12.5% of emission)              |

**Parameter Motivation:** These values ensure a balance between incentivizing participation in the system and maintaining its long-term stability. The negative mathematical expectation of Mine creates deflationary pressure, while the limit protects against excessive influence from individual operations.

### 2.2. Dynamic Variables

-   $R$ — total TON reserve in the protocol
-   $S$ — total PRDX emission in circulation
-   $P_{base}$ — base PRDX to TON rate

### 2.3. Pricing Formulas

**Base Rate:**

$$
P_{base} = \frac{S}{R}
$$

**Rate for Mint Operation:**

$$
P_{mint} = \frac{S}{R} \times (1 - \phi_{mint})
$$

**Rate for Burn Operation:**

$$
P_{burn} = \frac{R}{S} \times (1 - \phi_{burn})
$$

**Important Nuance:** During the Mint operation, the fee is charged in TON and does not enter the protocol reserve. During the Burn operation, the fee is charged in PRDX and remains in the system. This means that the base rate $P_{base}$ does not change when performing Mint and Burn operations.

### 2.4. Operation Formulas

#### Mint Operation

$$
PRDX_{received} = TON_{sent} \times \frac{S}{R} \times (1 - \phi_{mint})
$$

#### Burn Operation

$$
TON_{received} = PRDX_{sent} \times \frac{R}{S} \times (1 - \phi_{burn})
$$

## 3. Mine Operation and the St. Petersburg Paradox

### 3.1. Historical Basis: St. Petersburg Paradox and Daniel Bernoulli

**Daniel Bernoulli** — Swiss mathematician and physicist who, in 1738, while working at the Imperial Academy of Sciences in St. Petersburg, formulated one of the most famous paradoxes in probability theory. It was during this period of his career that Bernoulli laid the foundations for utility theory and subjective risk assessment, which are still used in economics and finance.

**What is the paradox?**

The classic formulation of the St. Petersburg paradox describes a hypothetical lottery:

-   The organizer flips a coin until tails comes up
-   If tails on the first flip — player gets 2 coins
-   If on the second — 4 coins
-   If on the third — 8 coins
-   And so on: on the nth flip, the player gets $2^n$ coins

**Mathematical expectation of winnings** in such a lottery is infinite:

$$
E = \frac{1}{2} \times 2 + \frac{1}{4} \times 4 + \frac{1}{8} \times 8 + \ldots = 1 + 1 + 1 + \ldots = \infty
$$

However, in practice, rational people are willing to pay only a very small amount for participation in such a lottery (usually no more than 20-30 coins). This contradiction between infinite mathematical expectation and modest real value constitutes the essence of the paradox.

Bernoulli resolved this paradox by introducing the concept of **marginal utility** — the idea that an additional coin has different value for a rich and a poor person. This revolutionary idea for its time laid the foundation for modern economic theory and decision-making theory under uncertainty.

### 3.2. Adaptation of the Paradox in PARADOX: From Theory to Practice

The PARADOX protocol is based on not the classic, but the **finite version** of the St. Petersburg paradox, which includes two key modifications:

1. **Negative mathematical expectation** $EV_{mine} = -12.5\%$
2. **Limit on maximum winnings** $L_{mine} = 12.5\%$ of PRDX emission

**Why these parameters?**

The negative mathematical expectation turns the Mine operation from a purely speculative tool into a mechanism for creating collective value. Each Mine participant consciously accepts calculated risk, and their "losses" on average become a gain for the entire system through the creation of deflationary pressure.

**Importance of Mining Limit**

The maximum winnings limit $L_{mine} = 12.5\% \times S$ is critically important for the system's sustainability. It guarantees that:

-   No single Mine operation can have a destructive impact on the protocol's economy
-   The maximum potential decrease in the PRDX rate at any time is known and limited
-   The system is protected from manipulations and excessive influence by large participants

**Due to this limit, there is a maximum possible "drawdown" in the rate at any time, and this value is known and controlled.** Without this limit, a theoretically possible large win in one Mine operation could instantly increase emission by a significant amount, leading to a sharp drop in the rate. In PARADOX, such a scenario is excluded — the system guarantees that no operation can increase emission by more than 12.5% of the current total supply.

This makes PARADOX a predictable and sustainable system, where even in the worst case, the impact on the economy is limited and mathematically calculated.

### 3.3. Mathematical Model of the Mine Operation

#### Basic Parameters:

-   $PRDX_{deposit}$ — amount of PRDX transferred for participation in the operation
-   $n$ — number of possible outcomes (from 2 to 32)
-   $EV_{mine} = -0.125$ — mathematical expectation

#### Minimum Reward Calculation:

$$
reward_{min} = \frac{2 \times PRDX_{deposit} \times (1 + EV_{mine})}{n + 1}
$$

#### Reward for Outcome $i$ (where $i = 1, 2, \ldots, n$):

$$
reward(i) = reward_{min} \times 2^{i-1}
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
E[reward] = \sum_{i=1}^{n} P(i) \times reward(i) = PRDX_{deposit} \times (1 + EV_{mine})
$$

#### Mine Operation Limit:

$$
reward_{max} = reward_{min} \times 2^{n-1} \leq L_{mine} \times S
$$

This limit ensures that the maximum win in one Mine operation cannot exceed 12.5% of the total PRDX emission, protecting the system from excessive influence by individual participants.

### 3.4. Practical Examples of Mine Operation

#### Example 1: Conservative Strategy ($n = 3$)

**Conditions:**

-   $PRDX_{deposit} = 32$ PRDX
-   $n = 3$
-   $EV_{mine} = -0.125$

**Calculations:**

$$
reward_{min} = \frac{2 \times 32 \times (1 + (-0.125))}{3 + 1} = \frac{2 \times 32 \times 0.875}{4} = 14
$$

**Possible Outcomes:**

| Outcome $i$ | Reward                      | Probability   |
| ----------- | --------------------------- | ------------- |
| 1           | $14 \times 2^{0} = 14$ PRDX | $\frac{1}{2}$ |
| 2           | $14 \times 2^{1} = 28$ PRDX | $\frac{1}{4}$ |
| 3           | $14 \times 2^{2} = 56$ PRDX | $\frac{1}{4}$ |

**Mathematical Expectation:**

$$
E[reward] = 32 \times (1 - 0.125) = 28 \text{ PRDX}
$$

#### Example 2: Aggressive Strategy ($n = 6$)

**Conditions:**

-   $deposit = 16$ PRDX
-   $n = 6$
-   $EV_{mine} = -0.125$

**Calculations:**

$$
reward_{min} = \frac{2 \times 16 \times 0.875}{6 + 1} = 4 \text{ PRDX}
$$

**Possible Outcomes:**

| Outcome $i$ | Reward                       | Probability    |
| ----------- | ---------------------------- | -------------- |
| 1           | $4 \times 2^{0} = 4$ PRDX    | $\frac{1}{2}$  |
| 2           | $4 \times 2^{1} = 8$ PRDX    | $\frac{1}{4}$  |
| 3           | $4 \times 2^{2} = 16$ PRDX   | $\frac{1}{8}$  |
| 4           | $4 \times 2^{3} = 32$ PRDX   | $\frac{1}{16}$ |
| 5           | $4 \times 2^{4} = 64$ PRDX   | $\frac{1}{32}$ |
| 6           | $4 \times 2^{5} = 128$ PRDX  | $\frac{1}{32}$ |

**Mathematical Expectation:**

$$
E[reward] = 16 \times 0.875 = 14 \text{ PRDX}
$$

## 4. Why is the System Sustainable and Beneficial for Everyone?

### 4.1. Main Sustainability Mechanism

The PARADOX protocol is designed so that the Mine operation brings its participant a loss on average. The current value of this parameter is $-12.5\%$ of the amount of PRDX participating in mining. This negative mathematical expectation guarantees that in the long term, the total amount of PRDX will gradually decrease.

With a fixed TON reserve, a decrease in the amount of PRDX leads to a natural increase in the rate. This fundamental economic principle underlies the system's sustainability.

### 4.2. Benefits for Different Types of Participants

**For Alice 👩 (less risk-averse):**
The value of her PRDX tokens will increase due to the deflationary pressure created by Mine operation participants. Alice receives passive benefits from the system's operation without taking additional risks.

**For Bob 👨 (more risk-averse):**
Participation in the Mine operation provides an opportunity to multiply his tokens multiple times according to open and transparent rules. Although the mathematical expectation of the operation is negative, each individual run can bring significant winnings, creating an incentive for participation.

### 4.3. Network Effect

The more participants like Alice and Bob in the system, the more accurately the system works — the value of PRDX grows more and deviates less from the ideal. Each new participant enhances the reliability and efficiency of the protocol for everyone.

Positive feedback mechanism:

1. Growth in the number of participants increases Mine operation activity
2. Increased Mine activity strengthens deflationary pressure
3. Strengthened deflationary pressure leads to growth in PRDX value
4. Value growth attracts new participants

## 5. Practical Guide to Operations

### 5.1. Mint Operation — Acquiring PRDX

**Economic Essence:** Conversion of TON into PRDX tokens at a rate determined by the current state of the protocol reserves.

**Step-by-Step Process:**

1. Select "Mint" operation in the interface
2. Specify the amount of TON for conversion
3. View the calculated amount of PRDX to receive
4. Confirm the operation

**Execution Example:**

_Initial System State:_

-   Reserve $R$: 100 TON
-   Emission $S$: 100,000 PRDX
-   Base Rate $P_{base}$: $100,000 / 100 = 1,000$ PRDX / TON

_User Action:_ Conversion of 10 TON

$$
PRDX_{received} = 10 \times \frac{100,000}{100} \times (1 - 0.015625) = 10 \times 1,000 \times 0.984375 = 9,843.75 \text{ PRDX}
$$

_Important Nuance:_ The fee of 0.15625 TON (1.5625% of 10 TON) does not enter the protocol reserve, so the overall system rate does not change.

### 5.2. Burn Operation — Returning TON

**Economic Essence:** Reverse conversion of PRDX tokens into TON.

**Step-by-Step Process:**

1. Select "Burn" operation in the interface
2. Specify the amount of PRDX for conversion
3. View the calculated amount of TON to receive
4. Confirm the operation

**Execution Example:**

_Initial System State:_

-   Reserve $R$: 100 TON
-   Emission $S$: 100,000 PRDX
-   Burn Rate $P_{burn}$: $\frac{100}{100,000} \times (1 - 0.015625) = 0.000984375$ TON / PRDX

_User Action:_ Conversion of 10,000 PRDX

$$
TON_{received} = 10,000 \times \frac{100}{100,000} \times (1 - 0.015625) = 10,000 \times 0.001 \times 0.984375 = 9.84375 \text{ TON}
$$

_Important Nuance:_ The fee of 156.25 PRDX (1.5625% of 10,000 PRDX) remains in the system and is not burned, so the overall system rate does not change.

### 5.3. Mine Operation — Probabilistic Transformation

**Economic Essence:** Voluntary participation in a process with negative mathematical expectation, which on a system scale generates deflationary pressure.

**Technical Implementation:** The Mine process consists of three stages to ensure cryptographic security and fairness:

1. **Mine Commit:** The user generates a cryptographically secure random number and sends the signature of its hash to the contract.
2. **Mine Process:** The smart contract requests a random number from the oracle.
3. **Mine Resolve:** The user reveals their random number. The final seed for determining the outcome is calculated as $random = seed(oracle) \oplus seed(user)$. The outcome number is determined as the number of consecutive ones from the end of the binary representation of $random$ plus 1.

## 6. PRDX as an Ideal Reserve Asset

### 6.1. Comparative Analysis

| Parameter           | Fiat Money            | Bitcoin        | Stablecoins         | PRDX          |
| ------------------- | --------------------- | -------------- | ------------------- | ------------- |
| **Backing**         | Trust in government   | Network effect | Fiat reserves       | TON in reserve|
| **Inflation**       | High                  | Moderate       | Depends on issuer   | Deflation     |
| **Volatility**      | Low                   | High           | Very low            | Moderate*     |
| **Transparency**    | Low                   | High           | Medium              | Full          |
| **Growth Potential**| Low                   | High           | Absent              | High          |

> Note: PRDX retains TON volatility as it is tied to it through reserves, but the deflation mechanism reduces overall risks and creates a growth trend.

### 6.2. Advantages of PRDX as a Reserve Asset

-   **Mathematical Predictability**
    Unlike traditional assets whose value depends on unpredictable market factors, the price of PRDX is determined by transparent algorithms. This allows building long-term strategies based on objective data.

-   **Inflation Protection**
    The built-in deflation mechanism provides protection against devaluation, which is absent in fiat money and many other cryptoassets.

-   **Full Backing**
    Each PRDX token is backed by real TON in the protocol reserve, ensuring fundamental value and reducing risks compared to partially backed or unbacked assets.

-   **Risk Reduction**
    Although PRDX is tied to TON and retains its volatility, the controlled deflation mechanism creates a counter-trend toward value growth, which overall reduces investment risks.

## 7. Getting Started with PARADOX

### 7.1. Preparatory Steps

1. **Wallet Installation:** It is recommended to use wallets compatible with the TON network (e.g., Tonkeeper).
2. **Obtaining Test TON:** At the current stage, PARADOX operates on the TON testnet. Test TON must be obtained for experiments with the protocol.
3. **Studying Documentation:** Before starting, it is recommended to carefully study this documentation and understand the principles of the system.

### 7.2. Interacting with the Interface

1. **Go to the Bot:** Open [PrdxCoin Bot](https://t.me/PrdxCoinBot) in Telegram.
2. **Connect Wallet:** Use the "Connect" function to securely connect your TON wallet.
3. **Select Operation:** On the main screen, select the desired operation (Mint, Burn, Mine).
4. **Perform Operations:** Follow the on-screen instructions to perform the selected operation.

> **Important Warning:** PARADOX is currently deployed on the TON testnet. All operations should be conducted using test TON, which has no real value. Do not use the main TON networks or real funds to interact with the protocol at this stage.

## 8. Participation Strategies in the Protocol

### 8.1. Conservative Strategy (Alice 👩)

**Goal:** Long-term preservation and multiplication of capital through the system's deflationary mechanism.

**Methods:**

-   Regular acquisition of PRDX through Mint operation
-   Long-term holding of obtained tokens
-   Periodic monitoring of system state

**Advantages:**

-   Minimal risk level
-   Simplicity of implementation
-   Passive participation in system growth

### 8.2. Active Strategy (Bob 👨)

**Goal:** Active increase in the amount of PRDX through participation in Mine operation.

**Methods:**

-   Regular participation in Mine operation with various parameters
-   Analysis of probability distributions for different $n$ values
-   Balancing between conservative and aggressive approaches

**Advantages:**

-   Potential for rapid increase in PRDX amount
-   Active participation in maintaining system operation
-   Access to the full range of protocol capabilities

## 9. Frequently Asked Questions

### 9.1. General Questions

**What is the main difference between PRDX and traditional stablecoins?**

Stablecoins are designed to maintain a stable value tied to an external asset (e.g., US dollar). PRDX, on the other hand, creates a mathematically predictable economy with a tendency toward value growth due to the deflationary mechanism. While stablecoins aim for stability, PRDX aims for sustainable growth.

**What risks exist when using PARADOX?**

-   **Protocol Risk:** Possibility of vulnerabilities in smart contracts
-   **Liquidity Risk:** Although the Burn operation guarantees TON return, its value depends on the current system state
-   **Risk for Active Participants:** Negative mathematical expectation of Mine operation creates systematic risk for its participants
-   **Market Risk:** PRDX retains TON volatility as it is backed by it

### 9.2. Mining Questions

**Why is the mathematical expectation of the Mine operation negative?**

The negative mathematical expectation ($EV_{mine} = -12.5\%$) is a fundamental element of the PARADOX economic model. It ensures the system's deflationary nature, as it leads to a reduction in the total amount of PRDX in circulation on average. This reduction creates pressure toward token value growth, benefiting all holders.

**How does the Mine operation differ from gambling?**

Key differences:

-   **Transparency:** All algorithms and probabilities are fully open
-   **Mathematical Certainty:** Results are determined by clear mathematical models
-   **System Effect:** Individual "losses" transform into collective benefit
-   **No Intermediaries:** The process is fully decentralized and algorithmic

### 9.3. Pricing Questions

**Can the PRDX to TON rate decrease?**

Yes, short-term rate fluctuations are possible. They may be caused by:

-   Changes in the ratio between TON reserve and PRDX emission
-   Activity of Mine operation participants
-   External market factors affecting TON value

However, the mathematical model creates long-term deflationary pressure, which forms a trend toward PRDX value growth.

**How do fees affect the system?**

Fees perform several important functions:

-   Ensure the sustainability of the economic model
-   Create incentives for further protocol development
-   Support infrastructure operation
-   Balance supply and demand in the system

## 10. Glossary of Terms

**PARADOX** — decentralized financial protocol implementing a model of deflationary money with mathematical pricing.

**PRDX** — native token of the PARADOX protocol, fully backed by TON and possessing deflationary characteristics.

**Mint** — operation of acquiring PRDX tokens in exchange for TON. Contributed TON enters the protocol reserve.

**Burn** — operation of returning TON from the protocol reserve in exchange for PRDX tokens. Provided PRDX is withdrawn from circulation.

**Mine** — probabilistic PRDX transformation operation based on an adapted St. Petersburg paradox model.

**St. Petersburg Paradox** — classic probability theory problem demonstrating the divergence between the theoretical mathematical value of a lottery and people's practical willingness to pay for participation.

**Mathematical Expectation** — average result of a probabilistic operation upon repeated execution. In the context of PARADOX, it characterizes the systemic effect of the Mine operation.

**Deflationary Pressure** — economic effect expressed in the gradual reduction of the total amount of PRDX in circulation, which, all else being equal, leads to an increase in token value.

## 11. Conclusion

PARADOX represents an experiment in creating next-generation financial instruments — instruments whose value is determined not by market speculations, but by transparent mathematical algorithms.

Through the adaptation of the classic probabilistic model of the St. Petersburg paradox, the protocol creates a symbiotic economic environment where different participant behavior strategies coexist mutually beneficially. Conservative holders benefit from the deflationary pressure created by active participants, while active participants gain the opportunity to increase their assets through clearly defined probabilistic processes.

The system's sustainability is ensured by fundamental economic principles and mathematically verified parameters. The negative mathematical expectation of the Mine operation creates constant deflationary pressure, while limits on operation sizes protect the system from excessive influence by individual participants.

PARADOX is not just another digital asset. It is an exploration of new forms of money based on transparency, mathematical predictability, and fair distribution of benefits among all system participants.

---

_This documentation describes the current state of the PARADOX protocol. System parameters may be changed during the protocol's development. Up-to-date information can always be found in the project's official sources._
