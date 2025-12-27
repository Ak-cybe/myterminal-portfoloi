import type { Profile, Education, Certification, Skill, Project, Command } from '../types/types';

export const profile: Profile = {
    name: 'Amresh Kumar',
    title: 'BCA Student | AI × Cybersecurity Enthusiast',
    email: 'singhak18245@gmail.com',
    phone: '8210803576',
    location: 'Bihar (Samastipur), India',
    bio: `Amresh — BCA student (India), AI × Cybersecurity enthusiast building intelligent, preventive defenses.

🧠 AI & GenAI: Certified in “AI for Engineers”, “Generative AI Mastermind”; Skills: LLMs, Prompt Engineering, Custom GPTs/Agents.
🛡️ Sec Focus: Network Security, Cryptography, LLM Vulnerabilities, AI Pentesting Principles.
💻 Tech: Python, C/C++, HTML/CSS/JS.
🎯 Goal: Internships + projects in AI-driven security with clean docs and reproducible labs.`,
    socials: [
        { name: 'LinkedIn_v2.0', url: 'https://linkedin.com/in/amresh-kumar-7b5ab8326/', icon: 'linkedin' },
        { name: 'GitHub_Repo', url: 'https://github.com/Ak-cybe', icon: 'github' },
    ],
};

export const education: Education[] = [
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Shri Ram College, UP',
        timeline: '2024 – 2027',
        status: 'in-progress',
    },
    {
        degree: 'Higher Secondary (12th)',
        institution: 'Bihar School Examination Board',
        timeline: 'Completed',
        status: 'completed',
    },
];

export const certifications: Certification[] = [
    { name: 'Red Teaming for Generative AI', issuer: 'LinkedIn Learning', year: '2025' },
    { name: 'AI in Cybersecurity: Red & Blue Teaming', issuer: 'LinkedIn Learning', year: '2025' },
    { name: 'AI for Engineers', issuer: 'Course Completion', year: '2024' },
    { name: 'Generative AI Mastermind Program', issuer: 'Outskills', year: '2024' },
    { name: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco', year: '2024' },
    { name: 'CCNA 200-301 Network Fundamentals', issuer: 'Simplilearn', year: '2024' },
    { name: 'Cybersecurity Analyst Job Simulation', issuer: 'Tata Group', year: '2024' },
];

export const skills: Skill[] = [
    // AI & GenAI
    { name: 'LLMs & Prompt Eng', category: 'analysis', level: 90 },
    { name: 'Custom GPTs/Agents', category: 'analysis', level: 85 },
    { name: 'AI Pentesting', category: 'offensive', level: 80 },
    { name: 'LLM Vulnerabilities', category: 'offensive', level: 78 },

    // Offensive Security
    { name: 'Ethical Hacking', category: 'offensive', level: 75 },
    { name: 'Penetration Testing', category: 'offensive', level: 70 },
    { name: 'OWASP Top 10', category: 'offensive', level: 80 },

    // Network Defense
    { name: 'Cryptography', category: 'network', level: 80 },
    { name: 'Wireshark', category: 'network', level: 85 },
    { name: 'Network Security', category: 'network', level: 75 },

    // Development & Tech
    { name: 'Python', category: 'development', level: 85 },
    { name: 'C/C++', category: 'development', level: 75 },
    { name: 'HTML/CSS/JS', category: 'development', level: 85 },
    { name: 'Bash/Shell', category: 'development', level: 75 },
    { name: 'Linux', category: 'development', level: 80 },
];

export const projects: Project[] = [
    {
        name: 'CVE-2025-68664-LangGrinch-PoC',
        description: 'Proof-of-Concept for LangChain environment variable leak vulnerability. Demonstrates secrets_from_env bypass in langchain-core.',
        tags: ['Python', 'CVE', 'LangChain', 'Security Research'],
        permissions: 'drwxr-xr-x',
        owner: 'root:amresh',
        url: 'https://github.com/Ak-cybe/CVE-2025-68664-LangGrinch-PoC',
    },
    {
        name: 'CVE-2025-68613-n8n-rce-analysis',
        description: 'Security analysis and PoC for n8n workflow automation RCE vulnerability. Includes exploitation techniques and remediation.',
        tags: ['Python', 'CVE', 'n8n', 'RCE', 'Security Research'],
        permissions: 'drwxr-xr-x',
        owner: 'root:amresh',
        url: 'https://github.com/Ak-cybe/CVE-2025-68613-n8n-rce-analysis',
    },
    {
        name: 'web-llm-attacks',
        description: 'Comprehensive guide to Web LLM attacks including prompt injection, indirect prompt injection, and LLM exploitation techniques.',
        tags: ['LLM', 'AI Security', 'Prompt Injection', 'OWASP'],
        permissions: 'drwxr-xr-x',
        owner: 'root:amresh',
        url: 'https://github.com/Ak-cybe/web-llm-attacks',
    },
    {
        name: 'AWS-Security-Projects',
        description: 'Collection of AWS Security implementations including EC2 Security and IAM Custom Policies for granular access control.',
        tags: ['AWS', 'IAM', 'EC2', 'Cloud Security'],
        permissions: 'drwxr-xr-x',
        owner: 'root:amresh',
        url: 'https://github.com/Ak-cybe/AWS-Security-Projects',
    },
    {
        name: 'Cyber Awareness Hub',
        description: 'Educational platform designed to teach non-tech users about phishing, hygiene, and digital safety.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        permissions: 'drwxr-xr-x',
        owner: 'root:amresh',
        url: 'https://ak-cybe.github.io/cyber-awareness-hub/',
    },
];

export const commands: Command[] = [
    { name: 'help', aliases: ['?', 'h'], description: 'Display available commands' },
    { name: 'whoami', aliases: ['about', 'me'], description: 'Display user information' },
    { name: 'cat bio.txt', aliases: ['bio'], description: 'Read full biography' },
    { name: 'htop --skills', aliases: ['skills'], description: 'Show skills matrix' },
    { name: 'ls -la ./projects', aliases: ['projects', 'ls'], description: 'List all projects' },
    { name: 'cat education.log', aliases: ['education', 'edu'], description: 'View education history' },
    { name: 'gpg --list-keys', aliases: ['certifications', 'certs'], description: 'Show certifications' },
    { name: 'ping amresh', aliases: ['contact'], description: 'Get contact information' },
    { name: 'neofetch', aliases: ['sys', 'system'], description: 'Display system info' },
    { name: 'theme', aliases: ['color', 'style'], description: 'Switch terminal theme (default, amber, cyan, red)' },
    { name: 'hack', aliases: ['exploit', 'attack'], description: 'Simulate system intrusion' },
    { name: 'clear', aliases: ['cls', 'reset'], description: 'Clear terminal screen' },
];
