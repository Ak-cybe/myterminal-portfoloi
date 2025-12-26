// Profile Types
export interface Social {
    name: string;
    url: string;
    icon: string;
}

export interface Profile {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    socials: Social[];
}

// Education Types
export interface Education {
    degree: string;
    institution: string;
    timeline: string;
    status: 'completed' | 'in-progress';
}

// Certification Types
export interface Certification {
    name: string;
    issuer: string;
    year: string;
}

// Skill Types
export type SkillCategory =
    | 'offensive'
    | 'network'
    | 'development'
    | 'analysis';

export interface Skill {
    name: string;
    category: SkillCategory;
    level: number; // 0-100
}

// Project Types
export interface Project {
    name: string;
    description: string;
    tags: string[];
    permissions: string;
    owner: string;
    url?: string;
}

// Terminal Types
export type CommandName =
    | 'help'
    | 'whoami'
    | 'about'
    | 'cat bio.txt'
    | 'htop --skills'
    | 'skills'
    | 'ls -la ./projects'
    | 'projects'
    | 'cat education.log'
    | 'education'
    | 'gpg --list-keys'
    | 'certifications'
    | 'ping amresh'
    | 'contact'
    | 'clear'
    | 'sudo rm -rf /'
    | 'neofetch'
    | 'matrix'
    | 'echo';

export interface TerminalOutput {
    id: string;
    command: string;
    content: React.ReactNode;
    timestamp: Date;
}

export interface Command {
    name: string;
    aliases: string[];
    description: string;
}
