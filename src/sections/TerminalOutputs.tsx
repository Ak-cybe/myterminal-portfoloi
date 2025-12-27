import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, MapPin, Send } from 'lucide-react';
import { profile, education, certifications, skills, projects, commands } from '../data/profile';
import SkillBar from '../components/SkillBar';
import ProjectCard from '../components/ProjectCard';
import TypeWriter from '../components/TypeWriter';
import HackOutput from '../components/HackOutput';

// Help Command Output
const HelpOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="text-cyber-blue mb-2">Available commands:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
            {commands.map((cmd, idx) => (
                <div key={idx} className="flex">
                    <span className="text-cyber-green w-40">{cmd.name}</span>
                    <span className="text-cyber-gray">- {cmd.description}</span>
                </div>
            ))}
        </div>
        <div className="text-cyber-gray mt-3 text-sm">
            Tip: Use ↑/↓ arrows to navigate command history
        </div>
    </motion.div>
);

// Whoami / About Output - Short identity info like real 'whoami'
const WhoamiOutput: React.FC = () => {
    const systemInfo = `uid=1000(amresh) gid=1000(security) groups=1000(security),27(sudo),998(hackers)
shell=/bin/bash
home=/home/amresh`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2"
        >
            <div className="border border-cyber-gray p-4 bg-cyber-dark max-w-xl">
                <div className="text-cyber-blue mb-2 text-sm">$ whoami</div>
                <div className="text-cyber-green text-glow text-xl font-bold mb-1">
                    <TypeWriter text={profile.name} speed={40} showCursor={false} />
                </div>
                <div className="text-cyber-greenDim mb-3">
                    <TypeWriter text={profile.title} speed={25} showCursor={false} />
                </div>
                <div className="text-cyber-gray text-xs whitespace-pre-line">
                    <TypeWriter text={systemInfo} speed={15} showCursor={false} />
                </div>
                <div className="mt-3 pt-3 border-t border-cyber-gray text-sm">
                    <span className="text-cyber-blue">Status:</span>
                    <span className="text-cyber-green ml-2">● Active</span>
                    <span className="text-cyber-gray ml-4">|</span>
                    <span className="text-cyber-blue ml-4">Mode:</span>
                    <span className="text-cyber-yellow ml-2">Offensive Security</span>
                </div>
            </div>
            <div className="text-cyber-gray text-xs mt-2">
                Tip: Run 'cat bio.txt' for detailed biography
            </div>
        </motion.div>
    );
};

// Bio Output - Full detailed biography like reading a file
const BioOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="border border-cyber-gray p-4 bg-cyber-dark">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyber-gray">
                <div className="text-cyber-blue text-sm">$ cat bio.txt</div>
                <div className="text-cyber-gray text-xs">-rw-r--r-- 1 amresh security 2.1K Dec 27 2025</div>
            </div>

            {/* ASCII Art Header */}
            <pre className="text-cyber-green text-xs mb-4 hidden md:block">
                {`
    ╔══════════════════════════════════════════════════════════════════╗
    ║                                                                  ║
    ║     █████╗ ███╗   ███╗██████╗ ███████╗███████╗██╗  ██╗           ║
    ║    ██╔══██╗████╗ ████║██╔══██╗██╔════╝██╔════╝██║  ██║           ║
    ║    ███████║██╔████╔██║██████╔╝█████╗  ███████╗███████║           ║
    ║    ██╔══██║██║╚██╔╝██║██╔══██╗██╔══╝  ╚════██║██╔══██║           ║
    ║    ██║  ██║██║ ╚═╝ ██║██║  ██║███████╗███████║██║  ██║           ║
    ║    ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝           ║
    ║                                                                  ║
    ║                    [ SECURITY RESEARCHER ]                       ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
`}
            </pre>

            <div className="text-cyber-green text-lg font-bold mb-2">
                <TypeWriter text={profile.name} speed={35} showCursor={false} />
            </div>
            <div className="text-cyber-blue mb-4">
                <TypeWriter text={profile.title} speed={20} showCursor={false} />
            </div>

            <div className="text-cyber-greenDim leading-relaxed whitespace-pre-wrap mb-4">
                <TypeWriter
                    text={profile.bio}
                    speed={12}
                    showCursor={false}
                />
            </div>

            <div className="border-t border-cyber-gray pt-4 mt-4">
                <div className="text-cyber-blue text-sm mb-2">// Quick Stats</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span className="text-cyber-gray">Focus:</span>
                        <span className="text-cyber-green ml-2">AI + Security</span>
                    </div>
                    <div>
                        <span className="text-cyber-gray">Mode:</span>
                        <span className="text-cyber-red ml-2">Red Team</span>
                    </div>
                    <div>
                        <span className="text-cyber-gray">Status:</span>
                        <span className="text-cyber-yellow ml-2">Learning</span>
                    </div>
                    <div>
                        <span className="text-cyber-gray">CVEs:</span>
                        <span className="text-cyber-green ml-2">2 Published</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-cyber-gray text-sm">
                <div className="flex items-center gap-4 mb-2">
                    <Mail size={14} className="text-cyber-green" />
                    <span className="text-cyber-greenDim">{profile.email}</span>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin size={14} className="text-cyber-green" />
                    <span className="text-cyber-greenDim">{profile.location}</span>
                </div>
            </div>
        </div>
        <div className="text-cyber-gray text-xs mt-2">
            EOF - bio.txt [69 lines]
        </div>
    </motion.div>
);

// Skills Output (htop style)
const SkillsOutput: React.FC = () => {
    const categories = [
        { key: 'offensive', name: 'Offensive Security', color: 'text-cyber-red' },
        { key: 'network', name: 'Network Defense', color: 'text-cyber-blue' },
        { key: 'development', name: 'Development & Tech', color: 'text-cyber-green' },
        { key: 'analysis', name: 'AI & Analysis', color: 'text-cyber-yellow' },
    ] as const;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2"
        >
            <div className="border border-cyber-gray p-4 bg-cyber-dark">
                <div className="text-cyber-blue text-center mb-4 text-sm">
                    [SYS_MONITOR::SKILL_MATRIX] ─ htop --skills
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat, catIdx) => (
                        <div key={cat.key}>
                            <div className={`${cat.color} text-sm font-bold mb-2 border-b border-cyber-gray pb-1`}>
                                {cat.name}
                            </div>
                            {skills
                                .filter((s) => s.category === cat.key)
                                .map((skill, idx) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        delay={catIdx * 0.2 + idx * 0.1}
                                    />
                                ))}
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-2 border-t border-cyber-gray text-xs text-cyber-gray flex justify-between">
                    <span>System integrity: 100%</span>
                    <span>Knowledge base: EXPANDING</span>
                    <span>Threat detection: ACTIVE</span>
                </div>
            </div>
        </motion.div>
    );
};

// Projects Output (ls -la style)
const ProjectsOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="text-cyber-blue mb-2">total {projects.length}</div>
        {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
        ))}
    </motion.div>
);

// Education Output
const EducationOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="text-cyber-blue mb-3">$ cat education.log</div>
        {education.map((edu, idx) => (
            <motion.div
                key={idx}
                className="border-l-2 border-cyber-green pl-4 mb-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
            >
                <div className="text-cyber-green font-bold">{edu.degree}</div>
                <div className="text-cyber-greenDim text-sm">{edu.institution}</div>
                <div className="text-cyber-gray text-xs mt-1">
                    [{edu.timeline}] - {edu.status === 'in-progress' ? '⏳ In Progress' : '✓ Completed'}
                </div>
            </motion.div>
        ))}
    </motion.div>
);

// Certifications Output
const CertificationsOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="text-cyber-blue mb-3">$ gpg --list-keys</div>
        <div className="border border-cyber-gray p-3 bg-cyber-dark">
            <div className="text-cyber-gray text-xs mb-2">
                /home/amresh/.gnupg/certifications.gpg
            </div>
            <div className="text-cyber-gray text-xs mb-3">
                --------------------------------
            </div>
            {certifications.map((cert, idx) => (
                <motion.div
                    key={idx}
                    className="flex items-start gap-2 mb-2 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <span className="text-cyber-green">🔑</span>
                    <div>
                        <span className="text-cyber-green">{cert.name}</span>
                        <span className="text-cyber-gray"> | {cert.issuer}</span>
                        <span className="text-cyber-greenDim"> [{cert.year}]</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

// Contact Output
const ContactOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="text-cyber-green text-xl mb-4">$ ping amresh</div>

        <div className="border border-cyber-gray p-4 mb-4">
            <div className="flex items-center gap-4 mb-3">
                <Mail className="text-cyber-green" size={18} />
                <div>
                    <span className="text-cyber-gray text-sm">EMAIL:</span>
                    <span className="text-cyber-green ml-4">{profile.email}</span>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-3">
                <Phone className="text-cyber-green" size={18} />
                <div>
                    <span className="text-cyber-gray text-sm">PHONE:</span>
                    <span className="text-cyber-green ml-4">{profile.phone}</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <MapPin className="text-cyber-green" size={18} />
                <div>
                    <span className="text-cyber-gray text-sm">LOCATION:</span>
                    <span className="text-cyber-green ml-4">{profile.location}</span>
                </div>
            </div>
        </div>

        <div className="text-cyber-blue mb-2">// Connect on Social Networks</div>
        <div className="flex gap-4">
            {profile.socials.map((social, idx) => (
                <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyber-greenDim hover:text-cyber-green transition-colors"
                >
                    {social.icon === 'linkedin' && <Linkedin size={16} />}
                    {social.icon === 'github' && <Github size={16} />}
                    <span>{social.name}</span>
                </a>
            ))}
        </div>

        <div className="mt-6 border border-cyber-gray p-4">
            <div className="text-cyber-green mb-3">$ ./send_message.sh</div>
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <span className="text-cyber-gray">&gt;</span>
                    <input
                        type="email"
                        placeholder="enter_email"
                        className="flex-1 bg-transparent border-b border-cyber-gray text-cyber-green px-2 py-1 focus:border-cyber-green transition-colors"
                    />
                </div>
                <div className="flex items-start gap-2">
                    <span className="text-cyber-gray">&gt;</span>
                    <textarea
                        placeholder="enter_message_payload"
                        rows={3}
                        className="flex-1 bg-transparent border border-cyber-gray text-cyber-green px-2 py-1 focus:border-cyber-green transition-colors resize-none"
                    />
                </div>
                <button className="cyber-button flex items-center gap-2 bg-transparent border border-cyber-green text-cyber-green px-4 py-2 hover:bg-cyber-green hover:text-cyber-black transition-all">
                    <Send size={14} />
                    EXECUTE SEND
                </button>
            </div>
        </div>
    </motion.div>
);

// Neofetch Output (system info style)
const NeofetchOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 font-mono"
    >
        <div className="flex flex-col md:flex-row gap-6">
            {/* ASCII Art */}
            <pre className="text-cyber-green text-xs leading-tight">
                {`
    ▄▄▄       ███▄ ▄███▓
   ▒████▄    ▓██▒▀█▀ ██▒
   ▒██  ▀█▄  ▓██    ▓██░
   ░██▄▄▄▄██ ▒██    ▒██ 
    ▓█   ▓██▒▒██▒   ░██▒
    ▒▒   ▓▒█░░ ▒░   ░  ░
     ▒   ▒▒ ░░  ░      ░
     ░   ▒   ░      ░   
         ░  ░       ░   
`}
            </pre>

            {/* System Info */}
            <div className="text-sm">
                <div className="text-cyber-green font-bold mb-2">amresh@portfolio</div>
                <div className="text-cyber-gray">─────────────────</div>
                <div><span className="text-cyber-blue">OS:</span> <span className="text-cyber-greenDim">CyberOS Security Edition</span></div>
                <div><span className="text-cyber-blue">Host:</span> <span className="text-cyber-greenDim">Portfolio Terminal v1.0</span></div>
                <div><span className="text-cyber-blue">Kernel:</span> <span className="text-cyber-greenDim">React 18.x + TypeScript</span></div>
                <div><span className="text-cyber-blue">Uptime:</span> <span className="text-cyber-greenDim">Since 2024</span></div>
                <div><span className="text-cyber-blue">Shell:</span> <span className="text-cyber-greenDim">bash 5.1</span></div>
                <div><span className="text-cyber-blue">Resolution:</span> <span className="text-cyber-greenDim">Responsive</span></div>
                <div><span className="text-cyber-blue">Theme:</span> <span className="text-cyber-greenDim">CyberSec Dark [GTK2/3]</span></div>
                <div><span className="text-cyber-blue">Icons:</span> <span className="text-cyber-greenDim">Lucide-React</span></div>
                <div><span className="text-cyber-blue">Terminal:</span> <span className="text-cyber-greenDim">Vite Dev Server</span></div>
                <div><span className="text-cyber-blue">CPU:</span> <span className="text-cyber-greenDim">Threat Analysis Engine</span></div>
                <div><span className="text-cyber-blue">Memory:</span> <span className="text-cyber-greenDim">Knowledge Base (Expanding)</span></div>
                <div className="mt-2 flex gap-1">
                    {['bg-black', 'bg-red-600', 'bg-green-600', 'bg-yellow-500', 'bg-blue-600', 'bg-purple-600', 'bg-cyan-500', 'bg-white'].map((color, i) => (
                        <div key={i} className={`w-4 h-4 ${color}`} />
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

// Access Denied (Easter Egg)
const AccessDeniedOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="text-cyber-red text-glow font-bold text-lg mb-2">
            ⚠️ ACCESS DENIED ⚠️
        </div>
        <div className="text-cyber-red">
            ERROR: Permission denied. This operation requires root privileges.
        </div>
        <div className="text-cyber-gray text-sm mt-2">
            Nice try, but this terminal is protected. 🛡️
        </div>
    </motion.div>
);

// Command Not Found
const CommandNotFoundOutput: React.FC<{ command: string }> = ({ command }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2"
    >
        <div className="text-cyber-red">
            bash: {command}: command not found
        </div>
        <div className="text-cyber-gray text-sm mt-1">
            Type 'help' to see available commands.
        </div>
    </motion.div>
);

// Welcome Output (initial)
const WelcomeOutput: React.FC = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        <div className="text-cyber-gray mb-2">&gt; initiating secure_connection...</div>
        <div className="text-cyber-green text-glow text-4xl md:text-5xl font-bold mb-4">
            HELLO, WORLD.
        </div>
        <div className="text-cyber-blue text-lg md:text-xl mb-6">
            I am {profile.name}. {profile.title}.
        </div>
        <div className="border border-cyber-gray p-4 mb-6 max-w-2xl">
            <p className="text-cyber-greenDim leading-relaxed">
                Welcome to my digital terminal. I specialize in identifying vulnerabilities,
                securing networks, and building AI-driven defense systems.
            </p>
        </div>
        <div className="flex flex-wrap gap-4">
            <button className="cyber-button flex items-center gap-2 border border-cyber-green text-cyber-green px-4 py-2 bg-transparent hover:bg-cyber-green hover:text-cyber-black transition-all">
                ./download_cv.sh
            </button>
            <button className="cyber-button flex items-center gap-2 border border-cyber-blue text-cyber-blue px-4 py-2 bg-transparent hover:bg-cyber-blue hover:text-cyber-black transition-all">
                contact --secure
            </button>
        </div>
        <div className="text-cyber-gray text-sm mt-6">
            Type 'help' to see available commands.
        </div>
    </motion.div>
);

// Export all
export {
    HelpOutput,
    WhoamiOutput,
    BioOutput,
    SkillsOutput,
    ProjectsOutput,
    EducationOutput,
    CertificationsOutput,
    ContactOutput,
    NeofetchOutput,
    AccessDeniedOutput,
    CommandNotFoundOutput,
    WelcomeOutput,
    HackOutput,
};
