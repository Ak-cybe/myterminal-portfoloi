import React, { useState, useRef, useEffect } from 'react';
import BlinkingCursor from './BlinkingCursor';

interface CommandPromptProps {
    onCommand: (command: string) => void;
    disabled?: boolean;
}

const CommandPrompt: React.FC<CommandPromptProps> = ({ onCommand, disabled = false }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onCommand(input.trim().toLowerCase());
            setHistory(prev => [input.trim(), ...prev]);
            setHistoryIndex(-1);
        }
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(history[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(history[newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
            <span className="text-cyber-green font-bold whitespace-nowrap">
                amresh@portfolio:~$
            </span>
            <div className="flex-1 relative flex items-center">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    className="w-full bg-transparent text-cyber-green border-none outline-none font-mono caret-transparent"
                    autoComplete="off"
                    spellCheck="false"
                    aria-label="Terminal command input"
                />
                {/* Custom cursor positioned after text */}
                <div
                    className="absolute top-0 left-0 flex items-center pointer-events-none"
                    style={{
                        transform: `translateX(${input.length * 9.6}px)`,
                    }}
                >
                    <BlinkingCursor />
                </div>
            </div>
        </form>
    );
};

export default CommandPrompt;
