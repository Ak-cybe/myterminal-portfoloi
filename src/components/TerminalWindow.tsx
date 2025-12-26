import React from 'react';

interface TerminalWindowProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
    children,
    title = 'amresh@portfolio:~/home',
    className = ''
}) => {
    return (
        <div className={`terminal-window rounded-none overflow-hidden ${className}`}>
            {/* Terminal Header */}
            <div className="terminal-header flex items-center justify-between px-4 py-2">
                {/* Traffic light buttons */}
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyber-red hover:brightness-110 transition-all cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-cyber-yellow hover:brightness-110 transition-all cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-cyber-green hover:brightness-110 transition-all cursor-pointer" />
                </div>

                {/* Title */}
                <div className="text-cyber-gray text-sm font-mono">
                    {title}
                </div>

                {/* BASH badge */}
                <div className="text-cyber-green text-xs font-mono border border-cyber-green px-2 py-0.5">
                    BASH
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 min-h-[400px] font-mono text-sm leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export default TerminalWindow;
