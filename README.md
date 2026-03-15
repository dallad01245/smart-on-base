# BaseNexus (BNX) 🔵

[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.24-363636.svg?style=flat-square&logo=solidity)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Built%20with-Hardhat-FFEE8C.svg?style=flat-square)](https://hardhat.org/)
[![Base](https://img.shields.io/badge/Network-Base%20Layer%202-0052FF.svg?style=flat-square&logo=base)](https://base.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> A robust, secure, and gas-optimized ERC-20 token smart contract deployed on the Base Layer 2 network.

BaseNexus (BNX) is a standard ERC-20 token built with [OpenZeppelin](https://www.openzeppelin.com/) v5 contracts. It is designed to be highly secure, supporting token burning mechanisms and strict access control for minting operations. This repository serves as a professional boilerplate and production-ready implementation for launching tokens on the Base ecosystem.

---

## ✨ Features

* **ERC-20 Standard:** Fully compliant with the ERC-20 token standard.
* **Burnable (`ERC20Burnable`):** Token holders can permanently destroy their own tokens, enabling deflationary tokenomics.
* **Access Control (`Ownable`):** Minting privileges are strictly restricted to the contract owner.
* **Gas Optimized:** Compiled with customized Hardhat optimizer settings for minimal deployment and transaction costs on Base.
* **Comprehensive Testing:** 100% test coverage using Chai and Hardhat Network.

---

## 🏗️ Architecture & Tech Stack

* **Smart Contracts:** Solidity `^0.8.24`
* **Framework:** [Hardhat](https://hardhat.org/)
* **Libraries:** OpenZeppelin Contracts `v5.0.0`
* **Language:** TypeScript
* **Deployment:** Hardhat Ignition

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18.0.0 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* A Base-compatible wallet (e.g., MetaMask, Coinbase Wallet) with testnet/mainnet funds.

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone [https://github.com/YourUsername/base-professional-token.git](https://github.com/YourUsername/base-professional-token.git)
cd base-professional-token
2. Install Dependencies
Bash
npm install
3. Environment Setup
Create a .env file in the root directory based on the provided template:

Bash
cp .env.example .env
Open the .env file and configure your variables:

Đoạn mã
PRIVATE_KEY="your_wallet_private_key_here"
BASESCAN_API_KEY="your_basescan_api_key_here"
⚠️ Security Warning: Never commit your .env file or expose your private keys.

🛠️ Usage & Commands
Compile Contracts
Compile the Solidity smart contracts and generate TypeScript typings:

Bash
npx hardhat compile
Run Tests
Execute the automated test suite to ensure contract integrity:

Bash
npx hardhat test
Deployment (Base Sepolia Testnet)
Deploy the contract using Hardhat Ignition:

Bash
npx hardhat ignition deploy ./ignition/modules/BaseNexus.ts --network base-sepolia
Contract Verification
Verify the source code on BaseScan to make it publicly readable:

Bash
npx hardhat verify --network base-sepolia <DEPLOYED_CONTRACT_ADDRESS> "<OWNER_ADDRESS>"
📂 Project Structure
Plaintext
├── contracts/               # Solidity source files
│   └── BaseNexus.sol        # Main ERC-20 Token Contract
├── ignition/modules/        # Hardhat Ignition deployment modules
│   └── BaseNexus.ts         # Deployment script
├── test/                    # Unit tests
│   └── BaseNexus.ts         # Test coverage for BNX token
├── hardhat.config.ts        # Hardhat configuration & network setup
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
🔒 Security
This project utilizes established, audited open-source libraries from OpenZeppelin. However, the deployment and management of smart contracts carry inherent risks.

Disclaimer: This code is provided as-is. Please conduct your own comprehensive security audits before deploying to the Base Mainnet holding real financial value.

📄 License
Distributed under the MIT License. See LICENSE for more information.
