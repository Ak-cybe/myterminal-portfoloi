# 🖥️ Terminal Portfolio

<div align="center">

![Terminal Portfolio Banner](https://img.shields.io/badge/Terminal-Portfolio-00ff00?style=for-the-badge&logo=windowsterminal&logoColor=white)

**A cybersecurity-themed interactive terminal portfolio built with React + TypeScript**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Commands](#-terminal-commands)

</div>

---

## 🎯 Overview

An immersive, hacker-style terminal portfolio that showcases my skills, projects, and experience in cybersecurity. The interface mimics a real Linux terminal with interactive commands, Matrix rain effects, and CRT screen aesthetics.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🖥️ **Terminal Interface** | Fully interactive command-line experience |
| 🌧️ **Matrix Rain** | Animated background with customizable density |
| 📺 **CRT Effects** | Retro scanlines and screen glow |
| ⌨️ **TypeWriter Effect** | Realistic typing animations |
| 🎨 **Multiple Themes** | Default, Amber, Cyan, Red color schemes |
| 📱 **Responsive Design** | Works on desktop and mobile |
| ⚡ **Fast Performance** | Built with Vite for instant HMR |

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Ak-cybe/terminal-portfolio.git

# Navigate to project directory
cd terminal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 💻 Terminal Commands

| Command | Aliases | Description |
|---------|---------|-------------|
| `help` | `?`, `h` | Display available commands |
| `whoami` | `about`, `me` | Display user information |
| `cat bio.txt` | `bio` | Read full biography |
| `htop --skills` | `skills` | Show skills matrix |
| `ls -la ./projects` | `projects`, `ls` | List all projects |
| `cat education.log` | `education`, `edu` | View education history |
| `gpg --list-keys` | `certifications`, `certs` | Show certifications |
| `ping amresh` | `contact` | Get contact information |
| `neofetch` | `sys`, `system` | Display system info |
| `theme <name>` | `color`, `style` | Switch terminal theme |
| `hack` | `exploit`, `attack` | Simulate system intrusion |
| `clear` | `cls`, `reset` | Clear terminal screen |

## 🎨 Themes

Switch themes using `theme <name>`:

- `default` - Classic green terminal
- `amber` - Retro amber CRT
- `cyan` - Cyberpunk cyan
- `red` - Danger/alert mode

## 🛠️ Tech Stack

```
├── React 18          # UI Framework
├── TypeScript        # Type Safety
├── Vite              # Build Tool
├── Tailwind CSS      # Styling
├── Framer Motion     # Animations
├── Lucide React      # Icons
└── PostCSS           # CSS Processing
```

## 📁 Project Structure

```
terminal-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── CRTScreen.tsx
│   │   ├── Terminal.tsx
│   │   ├── MatrixRain.tsx
│   │   └── ...
│   ├── data/
│   │   └── profile.ts    # Portfolio data
│   ├── sections/
│   │   └── TerminalOutputs.tsx
│   ├── types/
│   │   └── types.ts
│   ├── App.tsx
│   └── main.tsx
├── LICENSE
├── package.json
└── README.md
```

## 🔐 Featured Projects

| Project | Description |
|---------|-------------|
| [CVE-2025-68664-LangGrinch-PoC](https://github.com/Ak-cybe/CVE-2025-68664-LangGrinch-PoC) | LangChain environment variable leak vulnerability PoC |
| [CVE-2025-68613-n8n-rce-analysis](https://github.com/Ak-cybe/CVE-2025-68613-n8n-rce-analysis) | n8n workflow automation RCE vulnerability analysis |
| [web-llm-attacks](https://github.com/Ak-cybe/web-llm-attacks) | Web LLM attacks guide - prompt injection & exploitation |
| [AWS-Security-Projects](https://github.com/Ak-cybe/AWS-Security-Projects) | AWS Security implementations & IAM policies |
| [Cyber Awareness Hub](https://ak-cybe.github.io/cyber-awareness-hub/) | Educational platform for digital safety |

## 👤 Author

<div align="center">

**Amresh Kumar (Ak-cybe)**

[![GitHub](https://img.shields.io/badge/GitHub-Ak--cybe-181717?style=for-the-badge&logo=github)](https://github.com/Ak-cybe)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/amresh-kumar-7b5ab8326/)

*BCA Student | AI × Cybersecurity Enthusiast | Security Researcher*

</div>

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

```
MIT License
Copyright (c) 2025 Amresh Kumar (Ak-cybe)
```

---

<div align="center">

**⭐ Star this repo if you found it useful!**

Made with 💚 and lots of ☕

</div>
