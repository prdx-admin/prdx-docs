# PARADOX (PRDX) — User Documentation

## 1. Introduction

**PARADOX (PRDX)** is a financial instrument on the TON blockchain, created as an alternative to traditional monetary systems. Unlike inflationary fiat currencies, volatile cryptocurrencies, and fiat-pegged stablecoins, PARADOX implements the concept of _ideal speculative money_ with mathematically regulated pricing.

### Key Principles

1. **Mathematical Pricing**
   - The price of PRDX is determined by an objective formula linking the number of tokens to reserves
   - Excludes the influence of subjective factors of supply and demand

2. **Full Reserve Backing**
   - Each PRDX token is backed by real assets (TON)
   - Digital analog of the gold standard

3. **Controlled Deflation**
   - Uses mathematically verified probabilistic processes
   - Creates predictable deflationary pressure

### Basic Operations

| Operation | Description | Mechanism |
|-----------|-------------|-----------|
| **Mint** | Minting PRDX tokens for TON | Sent TON are reserved in the protocol, new PRDX are issued (minted) and transferred to the user |
| **Burn** | Burning PRDX tokens for TON | Sent PRDX are permanently destroyed (burned), TON are returned to the user from the reserve |
| **Mine** | Mining tokens through a probabilistic mechanism | Sent PRDX are burned, the result is determined by a probabilistic model and minted as new PRDX tokens |

### Mathematical Foundation

The system is based on the [St. Petersburg Paradox](https://ru.wikipedia.org/wiki/Санкт-петербургский_парадокс) — an 18th-century model described by Daniel Bernoulli. This model allows transforming individual participant risk into collective benefit through gradual reduction of the total number of tokens.

## 2. Mathematical Foundations of the System

### Basic Parameters

| Variable | Description | Value |
|----------|-------------|-------|
| $R$ | Total TON reserve in the protocol | Dynamic |
| $S$ | Total PRDX supply in circulation | Dynamic |
| $\phi_{mint}$ | Mint operation fee | 0.78% |
| $\phi_{burn}$ | Burn operation fee | 1.56% |
| $EV_{mine}$ | Expected value of the Mine operation | -12.5% |

### Pricing Formulas

**Base PRDX to TON Rate:**
$$K_{base} = \frac{S}{R}$$

**Mint Rate:**
$$K_{mint} = \frac{S}{R} \times (1 - \phi_{mint})$$

**Burn Rate:**
$$K_{burn} = \frac{R}{S} \times (1 - \phi_{burn})$$

### Operation Formulas

#### Mint (Token Minting)
$PRDX_{received} = TON_{sent} \times \frac{S}{R} \times (1 - \phi_{mint})$

#### Burn (Token Burning)
$TON_{received} = PRDX_{sent} \times \frac{R}{S} \times (1 - \phi_{burn})$

#### Mine (Token Mining)

**Minimum Reward:**
$$PRDX_{min} = \frac{2 \times PRDX_{stake} \times (1 - EV_{mine})}{outcomes + 1}$$

**Reward for Outcome $i$:**
$$PRDX_{reward}(i) = PRDX_{min} \times 2^{i-1}$$

**Probability of Outcome $i$:**
$$P(i) = \begin{cases}
\frac{1}{2^i} & \text{for } i = 1, 2, \ldots, outcomes-1 \\
\frac{1}{2^{outcomes-1}} & \text{for } i = outcomes
\end{cases}$$

**Expected Value:**
$$E[reward] = PRDX_{stake} \times (1 - EV_{mine})$$

## 3. Quick Start

### Connection

1. Launch the [PrdxCoin Bot](https://t.me/PrdxCoinBot) in Telegram
2. Click **Connect** to connect your TON wallet
3. Ensure you have sufficient TON for operations
4. Start with small amounts to master the system

> ⚠️ **Warning:** PARADOX is deployed on the TON testnet. Use a test wallet.

### Security Guarantees

- **Full Backing:** PRDX are 100% backed by TON reserves
- **Resilience:** Stability during periods of market turbulence
- **Transparency:** All operations are mathematically defined and verifiable

## 4. Operations Guide

### 4.1 Mint — Token Minting

**Mint Operation** — the process of obtaining PRDX tokens in exchange for TON. When you send TON to the protocol, these funds are reserved in the system, and in return, new PRDX tokens are issued (minted) to you at a mathematically determined rate.

The key feature of the operation is that it occurs without the influence of speculative market factors — the rate is determined solely by the current ratio of reserves to supply in the system.

#### Procedure

1. Select the **"Mint"** function on the main screen
2. Specify the amount of TON to convert or the desired amount of PRDX
3. Check the fee calculation
4. Confirm the operation

#### Mint Operation Example

**Initial State:**
- Reserve: 100 TON
- Supply: 100,000 PRDX
- Mint Rate: 992.2 PRDX/TON

**Operation:** Sending 10 TON → receiving PRDX

**Result:**
| Parameter | Before | After |
|-----------|--------|-------|
| TON Reserve | 100 | 110 |
| PRDX Supply | 100,000 | 109,922 |
| Received PRDX | — | 9,922 |
| Rate (PRDX/TON) | 1,000 | 999.3 |

> **Feature:** The Mint operation minimally affects the rate, creating a stable environment for all participants.

### 4.2 Burn — Token Burning

**Burn Operation** — the process of obtaining TON in exchange for PRDX. When you send PRDX tokens to the protocol, they are permanently destroyed (burned), and in return, TON are returned to you from the system's reserve.

This operation ensures full liquidity of PRDX tokens — you can obtain TON at a mathematically determined rate at any time, which fundamentally reduces liquidity risk.

#### Procedure

1. Select the **"Burn"** function on the main screen
2. Specify the amount of PRDX to convert or the desired amount of TON
3. Check the fee calculation
4. Confirm the operation

#### Burn Operation Example

**Initial State:**
- Reserve: 100 TON
- Supply: 100,000 PRDX
- Burn Rate: 0.000984 TON/PRDX

**Operation:** Sending 10,000 PRDX → receiving TON

**Result:**
| Parameter | Before | After |
|-----------|--------|-------|
| TON Reserve | 100 | 90.16 |
| PRDX Supply | 100,000 | 90,000 |
| Received TON | — | 9.84 |
| Rate (PRDX/TON) | 1,000 | 998.2 |

> **Liquidity Guarantee:** The ability to exchange PRDX for TON at a mathematically determined rate at any time.

### 4.3 Mine — Token Mining

**Mine Operation** — a unique probabilistic mechanism where you send a certain amount of PRDX and receive a random amount of new PRDX tokens in return. The sent tokens are permanently burned, and the operation's result is determined by a strict mathematical model and minted as new PRDX tokens.

This is not ordinary speculation — the system is built so that the individual risk of each participant is transformed into collective benefit for all token holders through the creation of deflationary pressure.

#### Mining Concept

PRDX mining represents a **controlled probabilistic operation** with the following characteristics:

- **Mechanism:** Send a certain amount of PRDX → receive a random amount of new PRDX
- **Burning:** All sent tokens are permanently destroyed regardless of the result
- **Result Minting:** Won tokens are created anew according to a strict mathematical model
- **Deflationary Effect:** The system creates constant pressure to reduce the total number of tokens
- **Collective Benefit:** Individual miners' risks are transformed into benefit for all token holders

#### Technical Process

A three-stage procedure to ensure cryptographic security:

| Stage | Name | Description |
|-------|------|-------------|
| 1 | **Mine Commit** | User generates a random number and sends its hash |
| 2 | **Mine Process** | Smart contract requests a random number from the oracle |
| 3 | **Mine Resolve** | User reveals their number and the outcome is determined |

**Final Outcome Formula:**
$$final\_seed = oracle\_seed \oplus user\_seed$$

Outcome number = number of consecutive ones from the end of the binary representation of $final\_seed$ + 1.

#### Mining Limitations

**Mine Limit** to maintain system stability:
$$PRDX_{min} \times 2^{outcomes-1} \leq 0.125 \times S$$

The maximum win cannot exceed 12.5% of the total PRDX supply.

#### Practical Examples

##### Example 1: Mining with 3 Outcomes

**Conditions:**
- Reserve: 1,000 TON
- Supply: 1,000 PRDX
- Stake: 32 PRDX

**Minimum Reward:**
$$PRDX_{min} = \frac{2 \times 32 \times 0.875}{4} = 14 \text{ PRDX}$$

**Possible Outcomes:**
| Outcome | Reward | Probability | Percent |
|---------|--------|-------------|---------|
| 1 | 14 PRDX | 1/2 | 50% |
| 2 | 28 PRDX | 1/4 | 25% |
| 3 | 56 PRDX | 1/4 | 25% |

**Expected Value:** 28 PRDX

##### Example 2: Mining with 6 Outcomes

**Conditions:**
- Reserve: 1,000 TON
- Supply: 1,000 PRDX
- Stake: 16 PRDX

**Minimum Reward:**
$$PRDX_{min} = \frac{2 \times 16 \times 0.875}{7} = 4 \text{ PRDX}$$

**Possible Outcomes:**
| Outcome | Reward | Probability | Percent |
|---------|--------|-------------|---------|
| 1 | 4 PRDX | 1/2 | 50.000% |
| 2 | 8 PRDX | 1/4 | 25.000% |
| 3 | 16 PRDX | 1/8 | 12.500% |
| 4 | 32 PRDX | 1/16 | 6.250% |
| 5 | 64 PRDX | 1/32 | 3.125% |
| 6 | 128 PRDX | 1/32 | 3.125% |

**Expected Value:** 14 PRDX

> **Key Feature:** In any outcome, the total amount of PRDX in the system decreases on average by 12.5%, creating deflationary pressure.

## 5. Participation Strategies

### 5.1 Miner Strategy

**Profile:** Active users willing to take higher risk.

**Characteristics:**
- Potential for exponential asset growth
- High risk level
- Flexible parameter settings
- Support for protocol functioning

**Recommendations:**
- Start with small stakes
- Vary the number of outcomes based on risk tolerance
- Consider mining as part of a diversified strategy

### 5.2 Holder Strategy

**Profile:** Passive investors focused on long-term growth.

**Characteristics:**
- Passive benefit from deflationary effect
- Low-medium risk level
- Long-term time horizon
- Minimal involvement after purchase

**Recommendations:**
- View PRDX as a long-term investment
- Use cost averaging strategy
- Monitor mining activity in the system

### 5.3 Ecosystem Interaction

The uniqueness of PARADOX lies in the symbiotic relationships between miners and holders:

1. Miners create deflation → reduction in supply
2. Reduction in supply → increase in PRDX value
3. Value increase → benefit to holders and attraction of new miners
4. Holders provide system stability and liquidity

## 6. Frequently Asked Questions

### General Questions

**What is the difference between PRDX and stablecoins?**

| Aspect | Stablecoins | PRDX |
|--------|-------------|------|
| Goal | Fixed value | Controlled growth |
| Mechanism | Peg to fiat | Mathematical pricing |
| Nature | Static | Deflationary |
| Backing | Fiat reserves | Full crypto backing |

**What risks exist?**
- **Mining:** Negative expected value (-12.5%)
- **Technological:** Dependence on TON blockchain
- **Liquidation:** Minimal due to Burn mechanism
- **Market:** Eliminated by mathematical pricing

### On Pricing

**Can the PRDX/TON rate fall?**

Yes, short-term fluctuations are possible depending on:
- Miner activity
- Mining results

However, the mathematical model creates long-term deflationary pressure.

### On Mining

**How does the Mine operation differ from ordinary speculation?**

| Aspect | Market Speculation | Mine Operation |
|--------|--------------------|----------------|
| Predictability | Low | High (known probabilities) |
| Transparency | Limited | Full (open algorithms) |
| Fairness | Information asymmetry | Equal conditions |
| Loss Result | Profit to other participants | Distribution among all |

**Why is the expected value of mining negative?**

Negative expectation (-12.5%) is a key feature of the system:
1. Creates deflationary pressure
2. Increases the value of remaining PRDX
3. Ensures sustainable value growth
4. Transforms individual risk into collective benefit

## 7. Glossary

| Term | Definition |
|------|------------|
| **PARADOX** | System of financial instruments on the TON blockchain |
| **PRDX** | Deflationary token of the PARADOX system |
| **MINT** | Token minting: send TON to the system → receive PRDX (TON are reserved, new PRDX are minted) |
| **BURN** | Token burning: send PRDX to the system → receive TON (PRDX are destroyed, TON are returned from reserve) |
| **MINE** | Token mining: send PRDX to the system → receive PRDX probabilistically (sent are burned, result is minted anew) |
| **MINE LIMIT** | Limit on maximum win (12.5% of supply) |
| **ORACLE** | System for generating cryptographically secure random numbers |
| **SEED** | Random number for generating mining outcomes |
| **Final_seed** | Result of XOR between user and oracle numbers |
| **Outcomes** | Number of possible mining outcomes (1-32) |
| **Expected Value** | Average result of the operation with repeated trials |
| **Deflationary Pressure** | Effect of reducing the number of tokens |
| **St. Petersburg Paradox** | Probabilistic model, basis of the mining system |

## 8. Conclusion

**PARADOX (PRDX)** represents an evolutionary step in the development of digital financial instruments, solving fundamental problems of traditional monetary systems through:

### Key Achievements
- **Mathematical Determinism** instead of market chaos
- **Controlled Deflation** instead of inflationary devaluation
- **Transparent Algorithms** instead of unpredictable speculation
- **Fair Risk Distribution** among participants

### System Innovations

PARADOX proves the possibility of creating financial instruments that:
1. **Combine Stability and Growth** — providing predictability without stagnation
2. **Transform Speculation** — turning chaos into a mathematically verified mechanism
3. **Create a Fair Environment** — with equal access to information and opportunities
4. **Ensure Resilience** — through full reserve backing

The mathematical formulas underlying all operations guarantee transparency and predictability, allowing each participant to make informed decisions based on objective data.

PARADOX opens a new era of **mathematical money** — where technology serves to create more fair, transparent, and efficient financial relationships.
