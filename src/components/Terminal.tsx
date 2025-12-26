import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CommandPrompt from './CommandPrompt';
import {
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
} from '../sections/TerminalOutputs';
import { commands } from '../data/profile';

interface TerminalProps {
    setTheme: (theme: string) => void;
}

interface TerminalEntry {
    id: string;
    command: string;
    output: React.ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ setTheme }) => {
    const [entries, setEntries] = useState<TerminalEntry[]>([
        {
            id: 'welcome',
            command: 'welcome',
            output: <WelcomeOutput />,
        },
    ]);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when new entries are added
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [entries]);

    const handleCommand = (command: string) => {
        const cmdLower = command.toLowerCase().trim();

        // Handle Theme Command
        if (cmdLower.startsWith('theme')) {
            const args = cmdLower.split(' ');
            const themeName = args[1];

            if (!themeName) {
                const newEntry: TerminalEntry = {
                    id: Date.now().toString(),
                    command,
                    output: (
                        <div className="text-cyber-greenDim mt-2">
                            Usage: <span className="text-cyber-blue">theme &lt;name&gt;</span>
                            <br />
                            Available themes: <span style={{ color: '#00ff41' }}>default</span>, <span style={{ color: '#ffb000' }}>amber</span>, <span style={{ color: '#00f3ff' }}>cyan</span>, <span style={{ color: '#ff0040' }}>red</span>
                        </div>
                    ),
                };
                setEntries((prev) => [...prev, newEntry]);
                return;
            }

            if (['default', 'amber', 'cyan', 'red'].includes(themeName)) {
                setTheme(themeName);
                const newEntry: TerminalEntry = {
                    id: Date.now().toString(),
                    command,
                    output: <div className="text-cyber-green mt-2">Theme switched to <span className="font-bold uppercase">{themeName}</span> successfully.</div>,
                };
                setEntries((prev) => [...prev, newEntry]);
                return;
            } else {
                const newEntry: TerminalEntry = {
                    id: Date.now().toString(),
                    command,
                    output: <div className="text-cyber-red mt-2">Error: Theme '{themeName}' not found.</div>,
                };
                setEntries((prev) => [...prev, newEntry]);
                return;
            }
        }

        const newEntry: TerminalEntry = {
            id: Date.now().toString(),
            command,
            output: getCommandOutput(command),
        };

        if (command === 'clear' || command === 'cls' || command === 'reset') {
            setEntries([]);
            return;
        }

        setEntries((prev) => [...prev, newEntry]);
    };

    const getCommandOutput = (cmd: string): React.ReactNode => {
        const command = cmd.toLowerCase().trim();

        // PATCH: Helper to check command against aliases in profile.ts (Single Source of Truth)
        const isCmd = (name: string) => {
            const cmdDef = commands.find(c => c.name === name);
            return cmdDef ? (command === name || cmdDef.aliases.includes(command)) : false;
        };

        // Help commands
        if (isCmd('help')) {
            return <HelpOutput />;
        }

        // About / Whoami commands
        if (isCmd('whoami')) {
            return <WhoamiOutput />;
        }

        // Bio commands
        if (isCmd('cat bio.txt')) {
            return <BioOutput />;
        }

        // Skills commands
        if (isCmd('htop --skills')) {
            return <SkillsOutput />;
        }

        // Projects commands
        if (isCmd('ls -la ./projects')) {
            return <ProjectsOutput />;
        }

        // Education commands
        if (isCmd('cat education.log')) {
            return <EducationOutput />;
        }

        // Certifications commands
        if (isCmd('gpg --list-keys')) {
            return <CertificationsOutput />;
        }

        // Contact commands
        if (isCmd('ping amresh')) {
            return <ContactOutput />;
        }

        // Neofetch / System info
        if (isCmd('neofetch')) {
            return <NeofetchOutput />;
        }

        // Welcome
        if (['welcome', 'home', 'init', 'clear', 'cls', 'reset'].includes(command)) {
            return <WelcomeOutput />; // Note: clear is handled in handleCommand, but if it slips through...
        }

        // Easter eggs
        if (command === 'sudo rm -rf /' || command === 'sudo rm -rf /*') {
            return <AccessDeniedOutput />;
        }

        // Echo command
        if (command.startsWith('echo ')) {
            const text = command.slice(5);
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-cyber-green mt-2"
                >
                    {text}
                </motion.div>
            );
        }

        // Matrix easter egg
        if (command === 'matrix') {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-cyber-green mt-2"
                >
                    <div className="text-cyber-greenDim">Wake up, Neo...</div>
                    <div className="text-cyber-green mt-2">The Matrix has you...</div>
                    <div className="text-cyber-blue mt-2">Follow the white rabbit. 🐰</div>
                </motion.div>
            );
        }

        // Date command
        if (command === 'date') {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-cyber-green mt-2"
                >
                    {new Date().toString()}
                </motion.div>
            );
        }

        // Hack command
        if (isCmd('hack')) {
            return <HackOutput />;
        }

        // Unknown command
        return <CommandNotFoundOutput command={command} />;
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Terminal Output */}
                <AnimatePresence>
                    {entries.map((entry) => (
                        <motion.div
                            key={entry.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mb-6"
                        >
                            {/* Show command prompt for non-welcome entries */}
                            {entry.command !== 'welcome' && (
                                <div className="flex items-center gap-2 text-cyber-green mb-1">
                                    <span className="font-bold">amresh@portfolio:~$</span>
                                    <span className="text-cyber-greenDim">{entry.command}</span>
                                </div>
                            )}
                            {/* Output */}
                            {entry.output}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Scroll anchor */}
                <div ref={terminalEndRef} />

                {/* Command Input */}
                <CommandPrompt onCommand={handleCommand} />
            </div>
        </div>
    );
};

export default Terminal;
