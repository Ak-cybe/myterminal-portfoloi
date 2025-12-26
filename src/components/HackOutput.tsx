import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Unlock, Terminal } from 'lucide-react';

const HackOutput: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);
    const [accessGranted, setAccessGranted] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const sequence = [
        { text: "Resolving target host: 192.168.1.1...", delay: 500, color: "text-cyber-gray" },
        { text: "[*] Establishing handshake...", delay: 1200, color: "text-cyber-yellow" },
        { text: "[+] Port 443 (HTTPS) OPEN", delay: 1800, color: "text-cyber-green" },
        { text: "[+] Port 22 (SSH) OPEN", delay: 2400, color: "text-cyber-green" },
        { text: "Bypassing firewall rules (WAF-Bypass v2.1)...", delay: 3200, color: "text-cyber-red" },
        { text: "[!] Firewall breached.", delay: 4500, color: "text-cyber-green" },
        { text: "[*] Injecting SQL payload...", delay: 5500, color: "text-cyber-yellow" },
        { text: "Dump of /etc/shadow retrieved.", delay: 6500, color: "text-cyber-gray" },
        { text: "Decrypting hashes...", delay: 7500, color: "text-cyber-blue" },
        { text: "ROOT ACCESS GRANTED.", delay: 8500, color: "text-cyber-green font-bold" },
    ];

    useEffect(() => {
        let timeouts: ReturnType<typeof setTimeout>[] = [];

        // Log sequence
        sequence.forEach((item) => {
            const timeout = setTimeout(() => {
                const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
                setLogs(prev => [...prev, `<span class="opacity-50">[${timestamp}]</span> <span class="${item.color}">${item.text}</span>`]);
            }, item.delay);
            timeouts.push(timeout);
        });

        // Progress bar simulation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 2;
            });
        }, 150);

        // Final access granted
        const finalTimeout = setTimeout(() => {
            setAccessGranted(true);
            setProgress(100);
        }, 8500);
        timeouts.push(finalTimeout);

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs, accessGranted]);

    return (
        <div className="mt-4 border border-cyber-greenDim p-4 rounded bg-black/40 relative font-mono text-sm md:text-base max-w-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b border-cyber-greenDim pb-2">
                <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-cyber-green" />
                    <span className="text-cyber-green font-bold">SYSTEM_OWNED</span>
                </div>
                <span className="text-cyber-greenDim">{Math.min(100, Math.floor(progress))}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-cyber-gray/30 mb-4 rounded overflow-hidden">
                <motion.div
                    className="h-full bg-cyber-green"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Logs Window */}
            <div
                ref={scrollRef}
                className="h-64 overflow-y-auto font-mono space-y-1 mb-4 scrollbar-hide"
            >
                {logs.map((log, i) => (
                    <div key={i} dangerouslySetInnerHTML={{ __html: log }} />
                ))}
            </div>

            {/* Access Granted Banner */}
            {accessGranted && (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-4 border-2 border-cyber-green bg-cyber-green/5 p-6 flex flex-col items-center justify-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:100%_2px]" />

                    <div className="text-cyber-green mb-3">
                        <Unlock size={48} strokeWidth={1.5} />
                    </div>

                    <h2
                        className="text-3xl md:text-4xl font-bold text-cyber-green tracking-widest mb-2 animate-glitch glitch-text text-center"
                        data-text="ACCESS GRANTED"
                    >
                        ACCESS GRANTED
                    </h2>

                    <p className="text-cyber-greenDim text-sm font-mono mt-2 text-center">
                        Target system is now under your control.
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default HackOutput;
