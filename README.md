# AccessLayer – Tokenized Authentication, AI Agents & Compliance Infrastructure on Coreum

AccessLayer is the official home of the **Compliance-Fi Stack** — a modular, enterprise-grade suite of Coreum-native primitives for secure, programmable, and compliant decentralized systems.

Built by **Manuel Solomente** (aka William Shipman), founder of AccessLayer and operator of a high-uptime Coreum validator, this repository powers the next generation of tokenized infrastructure through:



# AccessLayer – Tokenized Authentication, AI Agents & Compliance Infrastructure on Coreum

AccessLayer is the official home of the **Compliance-Fi Stack** — a modular, enterprise-grade suite of Coreum-native primitives for secure, programmable, and compliant decentralized systems.

Built by **Manuel Solomente** (aka William Shipman), founder of AccessLayer and operator of a high-uptime Coreum validator, this repository powers the next generation of tokenized infrastructure through:

- 🔐 **SoloPass** – Time-limited smart tokens for access control, subscription-as-a-token, and SaaS monetization
- 🤖 **SmartAgent** – AI-powered automation bots that respond to token ownership, compliance flags, or API events
- 🪪 **SmartID** – Soulbound identity tokens with compliance metadata and zero-knowledge access control
- 🔁 **Gated SmartRouter** – A programmable router that blocks token movement unless SoloPass, SmartID, and SmartAgent logic all approve
- 📦 **Compliance-Fi SDK** – A toolkit to tokenize RWAs, stocks, FX, or any asset class with on-chain compliance baked in

---

## 🔧 Getting Started

### 🛠 Install dependencies

```bash
pnpm install

▶️ Run the web dashboard (Vite)
bash
Copy
Edit
pnpm dev

🧪 Build or test smart contracts (CosmWasm)
bash
Copy
Edit
cd contracts/solopass
cargo build --release --target wasm32-unknown-unknown

🪙 CLI – Mint a test SoloPass token
bash
Copy
Edit
pnpm mint-test-token

🧱 Architecture Overview
AccessLayer is designed with modularity and compliance in mind.

plaintext
Copy
Edit
           +-------------------------+
           |     SmartAgent (AI)     |
           |  Triggers, listeners,   |
           |  compliance logic bots  |
           +-----------+-------------+
                       ↓
     +---------------------------+
     |     Gated SmartRouter     |  <-- Checks every rule
     +---------------------------+
        ↑           ↑          ↑
   [SoloPass]   [SmartID]   [Compliance-Fi SDK]
   Time Access   Identity     RWA Rules & Logic
🧰 Supporting Files
contracts/ – CosmWasm smart contracts

sdk/ – TypeScript SDKs to integrate access checks & minting

apps/solopass-web-ui – Developer dashboard (demo dApp)

supporting-docs/ – Pitch deck visuals, diagrams, mockups

scripts/ – Mint/test helpers & CLI tools

🧠 About the Creator
Manuel Solomente is the Web3 builder identity of William Shipman, a former enterprise software engineer with a background in databases and infrastructure.

He is the creator of SoloPass, SmartAgent, SmartID, and the Compliance-Fi SDK — a modular stack built on Coreum, designed for regulated finance, AI-native agents, and tokenized authentication.

“I build systems that are simple, elegant, and future-proof — unlocking decentralized access, automation, and compliance at the protocol layer.”

🌐 Follow the Journey

🌐 Solomente Validator – Coreum

🧠 AccessLayer – Infrastructure Company

📚 Documentation & SDKs

💼 For partnerships or investor


🪪 License
This project is licensed under the MIT License. See LICENSE for details.
