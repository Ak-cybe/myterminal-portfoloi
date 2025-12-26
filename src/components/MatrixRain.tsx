import React, { useEffect, useState } from 'react';

interface MatrixRainProps {
    density?: number;
}

interface Drop {
    id: number;
    x: number;
    delay: number;
    duration: number;
    chars: string[];
}

const MatrixRain: React.FC<MatrixRainProps> = ({ density = 30 }) => {
    const [drops, setDrops] = useState<Drop[]>([]);

    const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    useEffect(() => {
        const generateDrops = () => {
            const newDrops: Drop[] = [];
            for (let i = 0; i < density; i++) {
                const chars: string[] = [];
                const charCount = Math.floor(Math.random() * 15) + 10;
                for (let j = 0; j < charCount; j++) {
                    chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
                }
                newDrops.push({
                    id: i,
                    x: Math.random() * 100,
                    delay: Math.random() * 5,
                    duration: Math.random() * 10 + 10,
                    chars,
                });
            }
            setDrops(newDrops);
        };

        generateDrops();
    }, [density]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
            {drops.map((drop) => (
                <div
                    key={drop.id}
                    className="absolute top-0 text-cyber-green text-xs font-mono leading-tight"
                    style={{
                        left: `${drop.x}%`,
                        animation: `matrix-fall ${drop.duration}s linear ${drop.delay}s infinite`,
                    }}
                >
                    {drop.chars.map((char, idx) => (
                        <div
                            key={idx}
                            className="matrix-char"
                            style={{
                                opacity: 1 - (idx / drop.chars.length) * 0.8,
                                textShadow: idx === 0 ? '0 0 10px #00ff41, 0 0 20px #00ff41' : '0 0 5px #00ff41',
                            }}
                        >
                            {char}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MatrixRain;
