# CompTIA Security+ (SY0-701) Exam Trainer & PBQ Simulator

[![CompTIA Security+](https://img.shields.io/badge/CompTIA-Security%2B%20SY0--701-red.svg)](https://www.comptia.org/certifications/security)
[![React 19](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-purple.svg)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8.svg)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A production-grade, interactive study simulator for the **CompTIA Security+ SY0-701** certification exam. Features realistic full-length timed mock exams, authentic hands-on Performance-Based Questions (PBQs), domain-by-domain diagnostic drills, and granular performance tracking over time.

---

## 🚀 Quick Start (Run Locally in 60 Seconds)

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### Step-by-Step Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/security-plus-trainer.git
   cd security-plus-trainer
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

5. **Build for production (optional):**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📤 How to Upload This Project to GitHub

Follow these simple steps from your terminal inside the project directory:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage and commit all files
git add .
git commit -m "feat: CompTIA Security+ SY0-701 Exam Trainer and PBQ Simulator"

# 3. Rename branch to main
git branch -M main

# 4. Link your remote GitHub repository
# Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub details:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 5. Push the code to GitHub
git push -u origin main
```

---

## 🎯 Key Application Features

### 1. Simulated CompTIA Security+ Exams
- **Custom Question Count Typing**: Enter any desired number of questions (e.g. 5, 15, 30, 50, 90) with real-time domain breakdown preview.
- **5-Domain Weighted Percentage Distribution**: Automatically allocates questions strictly adhering to official CompTIA SY0-701 weights:
  - **Domain 1.0 General Security Concepts**: 12%
  - **Domain 2.0 Threats, Vulnerabilities & Mitigations**: 22%
  - **Domain 3.0 Security Architecture**: 18%
  - **Domain 4.0 Security Operations**: 28%
  - **Domain 5.0 Security Program Management & Oversight**: 20%
  - **Plus authentic Performance-Based Questions (PBQs)**
- **Instant Answer & Explanation Mode**: As soon as each question is answered, the interface reveals the correct answer, whether you got it right or wrong, full "Why" reasoning, and CompTIA Exam Pro-Tips.
- **Official Scoring Algorithm**: Evaluates performance on the authentic CompTIA 100–900 scaled score, with the official **750 cut-off passing score** (83.3%).
- **CompTIA Pearson VUE Testing Interface**:
  - Live countdown timer with pause/resume capability.
  - Pearson VUE style **Question Navigator Grid** (track Answered, Incomplete, and Flagged items).
  - **Flag for Review** toggle to easily revisit uncertain questions before submitting.
  - **Strike-Through Tool** to cross out eliminated options for test strategy practice.
  - Live in-exam toggle for instant explanations (ON/OFF).

### 2. Interactive Performance-Based Questions (PBQ Lab)
- **PBQ 1: Threat Vector & Remediation Matching**: Match botnets, RATs, worms, keyloggers, and backdoors to their industry-standard mitigation controls.
- **PBQ 2: Incident Response Log Forensics & Quarantine**: Inspect terminal logs across multiple endpoints, identify C2 botnet communication and lateral SMB movement, and selectively quarantine infected nodes while keeping clean servers online.
- **PBQ 3: PCI DSS Cloud Architecture Diagramming**: Architect a multi-tier cloud environment placing Internet Gateways, WAF, Load Balancers, Web Clusters, and isolated Cardholder Database Clusters into appropriate public vs. private subnets.
- **PBQ 4: Dark Web Credential Audit & Evidence Containment**: Identify legacy password policy failures (Age, Reuse, Length, Complexity) and deploy hardware-based FIDO2 security keys to preserve forensic memory state.
- **PBQ 5: Multi-Tier Web Defense-in-Depth Pipeline**: Structure network perimeter defenses (Firewall -> Router -> WAF -> Web Server -> PKI TLS 1.3) to neutralize black-box pen test findings.

### 3. All 5 SY0-701 Exam Domains Covered
- **Domain 1.0**: General Security Concepts (12%)
- **Domain 2.0**: Threats, Vulnerabilities, and Mitigations (22%)
- **Domain 3.0**: Security Architecture (18%)
- **Domain 4.0**: Security Operations (28%)
- **Domain 5.0**: Security Program Management and Oversight (20%)

### 4. Detailed Performance Analytics & Tracking Over Time
- **Overall Readiness Gauge**: Dynamic metric computed from weighted domain mastery and recent simulated exam attempts.
- **Domain Mastery Breakdown**: Track percentage accuracy and volume of questions answered per domain to isolate weak spots.
- **Weakness Drills**: Instant one-click sessions generating quizzes exclusively from previously missed questions.
- **Bookmarking System**: Bookmark tricky questions during drills and review them anytime in a dedicated Bookmarked Drill.
- **Study Streak Tracking**: Automatic daily streak counter.
- **Export & Import Backup**: Complete progress persistence using browser `localStorage` with JSON export/import for seamless data portability without external server dependencies.

### 5. In-App Quick Reference Cheat Sheet
- **High-Yield Port Matrix**: Ports 21 (FTP), 22 (SSH/SFTP), 23 (Telnet), 25 (SMTP), 53 (DNS), 80 (HTTP), 88 (Kerberos), 123 (NTP), 161 (SNMP), 389 (LDAP), 443 (HTTPS), 445 (SMB), 636 (LDAPS), 1812 (RADIUS), 3389 (RDP).
- **Core Acronyms Glossary**: SIEM, SOAR, EDR, XDR, CASB, SASE, DLP, FIM, PAM, AUP, DRP, BCP, BIA, RTO, RPO, MTTR, MTBF, ARO, SLE, ALE, CVSS, SCAP, FIDO2, SAML.
- **Formula Reference**: Quantitative Risk Formulas ($ALE = SLE \times ARO$, $SLE = AV \times EF$) and Resiliency metrics.
- **Security Control Matrix**: Technical, Managerial, Operational, Physical vs. Preventative, Detective, Corrective, Compensating, Deterrent.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: [Motion](https://motion.dev/) & [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Data & Persistence**: Pure Client-Side LocalStorage with JSON Data Export/Import

---

## 📜 License

This project is licensed under the MIT License - feel free to use it for your personal certification studies, training bootcamps, and portfolio demonstrations!
