# PARADOX (PRDX) — User Documentation

## 1. Introduction

**PARADOX (PRDX)** is a financial instrument on the TON blockchain, created as a response to the fundamental limitations of existing monetary systems. Traditional currencies are subject to inflation, cryptocurrencies are characterized by high volatility, and stablecoins simply peg digital assets to existing fiat money.
PARADOX offers a different approach, implementing the concept of _ideal speculative money_ — a system where the speculative element is not chaotic and unpredictable, but strictly mathematically regulated. This concept is based on three key ideas:

1. **Mathematical pricing instead of market-based.** The price of PRDX is determined not by subjective supply and demand factors, but by an objective formula connecting the number of tokens with the reserves backing them.
2. **Full reserve backing.** Each PRDX token is backed by real assets (TON), reminiscent of the gold standard in the digital age.
3. **Controlled deflation through probabilistic mechanisms.** Instead of arbitrary emission or hard cap, PRDX uses mathematically refined probabilistic processes to create predictable deflationary pressure.

The PARADOX system consists of three main operations:

-   **Mint**: creating new PRDX by depositing TON into the reserve
-   **Burn**: exchanging PRDX back for TON from the reserve
-   **Mine**: a probabilistic process where PRDX tokens are burned with the possibility of receiving more or fewer tokens depending on a random outcome

PARADOX is based on the [St. Petersburg paradox model](https://en.wikipedia.org/wiki/St._Petersburg_paradox), described by mathematician Daniel Bernoulli in the 18th century. This model allows for the creation of a system where individual risk of participants (through the Mine operation) is transformed into a collective benefit for all holders through the gradual reduction of the total number of tokens in circulation.
PRDX demonstrates how cryptography and blockchain make it possible to implement monetary concepts that were impossible in the pre-digital era, creating an environment where speculation becomes not a chaotic process with information asymmetry, but a transparent and mathematically predictable mechanism accessible to all participants on equal terms.

## 2. Getting Started

PARADOX is available as a telegram application. To start using it:

-   Launch the [PrdxCoin](https://t.me/PrdxCoinBot) application
-   To perform operations, connect your TON wallet. This can be done by clicking the blue _Connect_ button. Make sure you have enough TON for initial operations and fees
-   Start with small amounts to familiarize yourself with the system

![Main Page](https://github.com/prdx-admin/prdx-docs/raw/main/screenshots/prdx.main.jpeg)

Remember that your PRDX is fully backed by TON reserves, making the system resilient even during periods of market turbulence

> Currently, PARADOX is deployed on the TON test network. Test TON wallet connection is available

## 3. Basic Operations

### Mint (creating PRDX)

The Mint operation allows you to exchange TON for PRDX tokens at the current rate. Unlike standard exchanges or market mechanisms, the price here is formed strictly mathematically, without speculative factors.

**How to perform a Mint operation:**

-   On the main screen of the application, select the "Mint" function
-   Specify either the amount of TON you want to convert to PRDX, or the amount of PRDX you want to receive
-   Pay attention to the fee (Inc. commission). It is already included in the calculations
-   Confirm the operation

![Mint Page](https://github.com/prdx-admin/prdx-docs/raw/main/screenshots/prdx.mint.jpeg)

> **Example:**
> With a reserve of 100 TON and an emission of 100,000 PRDX, the current mint rate is 1 TON = 992.2 PRDX. If you send 10 TON, you will receive approximately 9,922 PRDX (a commission of 0.78% of the reserved TON is already included). After this operation, the protocol will have reserved 110 TON with an emission of about 109,922 PRDX, and the rate will remain unchanged.

> **Uniqueness of the Mint operation:**
> Unlike market mechanisms where each purchase increases the asset price, the Mint operation does not affect the PRDX/TON rate. This creates a stable and predictable environment for all participants.

### Burn (exchanging PRDX for TON)

The Burn operation is a mirror reflection of Mint, allowing you to exchange PRDX back for the base currency TON. This function provides full liquidity for your asset at any time.

**How to perform a Burn operation:**

-   On the main screen of the application, select the "Burn" function
-   Specify either the amount of PRDX you want to convert back to TON, or the amount of TON to receive
-   Pay attention to the fee (Inc. commission). It is already included in the calculations
-   Confirm the operation

![Mint Page](https://github.com/prdx-admin/prdx-docs/raw/main/screenshots/prdx.burn.jpeg)

> **Example:**
> With a reserve of 100 TON and an emission of 100,000 PRDX, the current burn rate is 1 PRDX = 0.00101587 TON. If you send 10,000 PRDX, you will receive approximately 10.16 TON (a commission of 1.56% of the burned PRDX is already accounted for). After this operation, the protocol will have reserved approximately 98.84 TON with an emission of about 99,156 PRDX, and the rate will remain unchanged.

> **Important note about rates:**
> Although the Mint and Burn operations themselves do not change the PRDX/TON rate, due to different commissions (0.78% for Mint and 1.56% for Burn), the effective exchange rate for these operations may differ slightly. This is a principled decision, creating a small spread that prevents arbitrage and ensures system stability.

> **Liquidity guarantee:**
> PRDX guarantees your ability to exchange for TON at a mathematically determined rate at any time. This fundamentally reduces liquidity risk.

### Mine (mining PRDX)

#### What is mining in PARADOX?

Mining PRDX is a fundamentally new concept, with no analogues in traditional finance. Unlike mining bitcoin or other cryptocurrencies, there are no computational tasks or transaction confirmations.
Essentially, the _Mine operation is a controlled probabilistic mechanism_ that:

-   Allows users to burn a certain amount of PRDX
-   In return, receive a random amount of new PRDX, based on a strict probability model
-   Creates systemic deflationary pressure due to negative mathematical expectation. This is a kind of _managed speculation_, where individual risk of participants is transformed into a collective benefit for the entire system through the deflationary effect.

#### Technical mining process

The PRDX mining process is implemented as a three-stage procedure, ensuring maximum transparency and cryptographic security:

-   **Stage 1: Mine Commit (Initiation)**
    -   You choose the amount of PRDX for mining and the number of possible outcomes.
    -   Your client generates a cryptographically secure random 256-bit number. This number is stored only on your device, and only its cryptographic signature and your public key are sent to the smart contract. This mechanism ensures that you cannot change your number after receiving data from the oracle.
-   **Stage 2: Mine Process (Processing).** The smart contract requests a cryptographically secure random 256-bit number from the oracle. This number (seed) serves as an external source of entropy that cannot be predicted in advance.
-   **Stage 3: Mine Resolve (Completion)**
    -   You send your original random number to the smart contract.
    -   The contract verifies the authenticity of the number, comparing it with the previously sent signature
    -   The final random number is calculated by applying the XOR (exclusive OR) operation between your number and the oracle number: final_seed = oracle_seed ^ user_seed
    -   The outcome is determined by the binary representation of this number: the number of consecutive ones from the end of the number to the first zero is counted. Outcome number = number of ones + 1

-![Mine Commit Page](https://github.com/prdx-admin/prdx-docs/raw/main/screenshots/prdx.mine.commit.jpeg)

> **Limitations.**
> Mining parameters (amount of PRDX and number of possible outcomes) must be such that the maximum possible winnings (Mine Limit) do not exceed 12.5% of the total PRDX emission. This limitation restricts volatility and maintains system stability. The current value (12.5%) may be adjusted.

> **Why is this system reliable?**
> Neither the user nor the oracle can influence the outcome alone, as the final number is formed from two independent sources. The user fixes their choice before receiving data from the oracle through a cryptographic signature. The oracle does not know the user's number when generating its seed. The entire system is mathematically transparent and verifiable

#### Understanding probabilities and outcomes

When mining, your PRDX tokens are burned, and you receive one of the possible outcomes with a given probability.

> **Fundamentally important:**
> the mathematical expectation when mining is -12.5%, which means that on average, miners "lose" 12.5% of the invested tokens.

##### Example 1 (with 3 outcomes):

Let's say the protocol has reserved 1000 TON, and the emission is 1000 PRDX. Current rate: 1 TON = 1 PRDX. You send 32 PRDX for mining with 3 possible outcomes:

-   14 PRDX with a probability of 1/2 (50%)
-   28 PRDX with a probability of 1/4 (25%)
-   56 PRDX with a probability of 1/4 (25%)

Mathematical expectation: 14 × (1/2) + 28 × (1/4) + 56 × (1/4) = 28 PRDX for a stake of 32 PRDX. Suppose you were lucky and got the third outcome (56 PRDX). After the operation:

-   Your 32 PRDX were burned
-   You received 56 new PRDX
-   The protocol now has 1000 TON and 1024 PRDX (instead of 1000)
-   New rate: 1 TON = 1.024 PRDX

##### Example 2 (with 6 outcomes):

Let's say the protocol has reserved 1000 TON, and the emission is 1000 PRDX. Current rate: 1 TON = 1 PRDX. You send 16 PRDX for mining with 6 possible outcomes:

-   4 PRDX with a probability of 1/2 (50%)
-   8 PRDX with a probability of 1/4 (25%)
-   16 PRDX with a probability of 1/8 (12.5%)
-   32 PRDX with a probability of 1/16 (6.25%)
-   64 PRDX with a probability of 1/32 (3.125%)
-   128 PRDX with a probability of 1/32 (3.125%)

Mathematical expectation: 4 × (1/2) + 8 × (1/4) + ... + 128 × (1/32) = 14 PRDX for a stake of 16 PRDX. Suppose you got the second outcome (8 PRDX). After the operation:

-   Your 16 PRDX were burned
-   You received 8 new PRDX
-   The protocol now has 1000 TON and 992 PRDX (instead of 1000)
-   New rate: 1 TON = 0.992 PRDX
-   [Screenshot here: Visualization of mining results and changes in the PRDX/TON rate after both examples]

> **Connection to the St. Petersburg paradox:**
> The probability distribution in PRDX mining is directly related to a classic problem in probability theory - the St. Petersburg paradox, formulated by Daniel Bernoulli in 1738. In this model, probabilities are distributed in such a way that the mathematical expectation is theoretically infinite, but the real "fair price" of participation is finite due to the principle of diminishing marginal utility.
> PRDX adapts this model, creating a controlled probabilistic environment with negative mathematical expectation and exponential variance.

> **Revolutionary aspect of mining:**
> With any mining outcome, the total amount of PRDX in the system decreases on average (due to the negative mathematical expectation of -12.5%). This creates deflationary pressure on the entire system, increasing the value of each remaining PRDX token.

## 4. Usage Strategies

When working with PRDX, two pure strategies for interacting with the asset can be identified:

### Miner Strategy

Miners are active participants in the ecosystem who take on greater risk with the potential for significant profit. This strategy is suitable for those who are ready for volatility in the short term. The strategy involves active participation in the process of mining PRDX tokens. Key aspects:

-   **High profit potential.**
    Possibility of exponential asset growth.
-   **Increased risk.**
    Probability of losing part of the invested tokens in the mining process.
-   **Flexibility in risk management.**
    Miners can adjust mining parameters according to their risk tolerance.
-   **Network support.**
    Miners play a key role in the functioning and development of the protocol.
-   **Short-term volatility.**
    Mining results can fluctuate significantly in the short term.

### Holder Strategy

Holders are passive participants in the ecosystem who acquire and hold PRDX in the long term. This strategy benefits from the deflationary nature of the token and the growth of its value over time. Key aspects of the holder strategy:

-   **Passive profit.** Holders benefit from the activity of miners, who create deflationary pressure, increasing the value of PRDX
-   **Long-term perspective.** This strategy is most effective with an investment horizon of several months or longer
-   **Diversification.** PRDX can serve as a stable component of a diversified crypto portfolio
-   [Screenshot here: Chart of long-term growth in PRDX value with examples of increased purchasing power]

> **Symbiosis of strategies.**
> The uniqueness of the PARADOX ecosystem lies in the fact that miners and holders are in a symbiotic relationship. The activity of miners increases the value of tokens held by holders, and the growing value of PRDX attracts more miners, creating a positive cycle.

## 5. Frequently Asked Questions

-   **How is PRDX different from stablecoins?** Stablecoins aim to maintain a fixed value (usually 1:1 to the dollar), whereas PRDX has a built-in deflationary mechanism (through the Mine operation) that increases its value over time.
-   **What risks exist when using PRDX?** The main risks are associated with the mining operation, which has a negative mathematical expectation. However, unlike traditional cryptocurrencies, PRDX eliminates market risks and liquidity risk thanks to the Mint and Burn mechanisms.
-   **Can the PRDX/TON rate fall?** In the short term, the rate may fluctuate depending on the activity of miners and mining results. However, the mathematical model of the system creates long-term deflationary pressure, which on average increases the value of PRDX.
-   **How is the Mine operation different from ordinary market speculation?** Unlike market speculation, where the outcome depends on many unpredictable factors, the Mine operation is based on an exact mathematical model with known probabilities. Additionally, the negative mathematical expectation in Mine does not become profit for any individual, but is distributed among all PRDX holders through the deflationary effect.

## 6. Glossary

-   **PARADOX** - project name; system, concept
-   **PRDX** - token of the PARADOX system
-   **MINT** — creating PRDX in exchange for TON with TON being added to the protocol reserve
-   **BURN** — burning PRDX in exchange for TON with TON being returned from the protocol reserve
-   **MINE** — burning PRDX to receive one of the possible stochastic outcomes
-   **MINE LIMIT** - limit of the maximum possible winnings when mining
-   **ORACLE** - system for generating a seed, participating in forming the mining outcome
-   **SEED** - number used when generating random numbers
-   **Mathematical expectation (EV)** — average result of the Mine operation with a large number of repetitions
-   **Deflationary pressure** — the effect of reducing the number of tokens in circulation, leading to an increase in their value

## 8. Conclusion

**PARADOX (PRDX)** reimagines the very concept of money in the digital age. Instead of market chaos — mathematical logic. Instead of inflation — deflationary growth in value. Instead of uncertainty — transparent algorithms.
