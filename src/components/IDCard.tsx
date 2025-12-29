import { useState, useRef } from 'react';
import { Shield, Fingerprint, Wifi } from 'lucide-react';

interface IDCardProps {
    profilePhoto?: string;
}

const IDCard = ({ profilePhoto }: IDCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = (e.clientY - centerY) / 10;
        const rotateY = (centerX - e.clientX) / 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <div className="relative lanyard-swing">
            {/* Lanyard String */}
            <div className="flex flex-col items-center">
                {/* Lanyard clip */}
                <div className="w-8 h-4 bg-[#1a1a1a] rounded-b-lg border-2 border-t-0 border-[var(--cyber-green)]/50 relative z-10">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-[var(--cyber-green)] rounded-full" />
                </div>

                {/* Lanyard cord */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--cyber-green)]/60 to-[var(--cyber-green)]/30" />

                {/* Card holder ring */}
                <div className="w-4 h-4 border-2 border-[var(--cyber-green)]/50 rounded-full -mt-1" />
            </div>

            {/* 3D ID Card */}
            <div
                ref={cardRef}
                className="relative w-64 mt-4"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: isHovered ? 'none' : 'transform 0.5s ease-out',
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="bg-[#0d0d0d] border-2 border-[var(--cyber-green)]/60 rounded-xl overflow-hidden neon-border relative">
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 holographic pointer-events-none z-10" />

                    {/* Header */}
                    <div className="bg-[var(--cyber-green)]/10 px-4 py-3 border-b border-[var(--cyber-green)]/40">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-[var(--cyber-green)]" />
                                <span className="text-xs font-bold text-[var(--cyber-green)] tracking-wider">CYBERSEC</span>
                            </div>
                            <Wifi className="w-4 h-4 text-[var(--cyber-green)] animate-pulse" />
                        </div>
                    </div>

                    {/* Photo area */}
                    <div className="p-4">
                        <div className="flex gap-4">
                            {/* Photo */}
                            <div className="w-20 h-24 bg-[#1a1a1a] rounded border border-[var(--cyber-green)]/40 flex items-center justify-center overflow-hidden relative group">
                                {profilePhoto ? (
                                    <img
                                        src={profilePhoto}
                                        alt="Amresh Kumar"
                                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                                    />
                                ) : (
                                    <div className="text-[var(--cyber-green)]/50 text-3xl">👤</div>
                                )}

                                {/* Tech Grid Overlay */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

                                {/* Enhanced Scan line effect */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="absolute inset-x-0 h-2 bg-gradient-to-b from-transparent via-[var(--cyber-green)] to-transparent opacity-75 animate-photo-scan shadow-[0_0_15px_var(--cyber-green)]" />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 space-y-1">
                                <div className="text-[10px] text-[var(--cyber-green)]/60 uppercase">Name</div>
                                <div className="text-sm font-bold text-[var(--cyber-green)]">AMRESH</div>
                                <div className="text-sm font-bold text-[var(--cyber-green)]">KUMAR</div>

                                <div className="text-[10px] text-[var(--cyber-green)]/60 uppercase mt-2">Role</div>
                                <div className="text-xs text-[var(--cyber-green)]">CYBER SECURITY</div>
                                <div className="text-xs text-[var(--cyber-green)]">STUDENT</div>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse" />
                                <span className="text-[10px] text-[#00ff41] font-bold">ACTIVE</span>
                            </div>
                            <div className="text-[10px] text-[var(--cyber-green)]/60">
                                ID: CST-2024-001
                            </div>
                        </div>

                        {/* Fingerprint / Barcode */}
                        <div className="mt-2 flex items-center justify-between border-t border-[var(--cyber-green)]/30 pt-2 group/barcode cursor-crosshair">
                            <Fingerprint className="w-8 h-8 text-[var(--cyber-green)]/40 group-hover/barcode:text-[var(--cyber-green)] transition-all duration-300" />
                            <div className="flex flex-col items-end">
                                {/* Animated Barcode Lines */}
                                <div className="flex gap-[2px] h-6 items-end overflow-hidden">
                                    {[1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1].map((w, i) => (
                                        <div
                                            key={i}
                                            className={`bg-[var(--cyber-green)]/80 group-hover:bg-[#00ff41] transition-all duration-300`}
                                            style={{
                                                width: w === 1 ? '2px' : '1px',
                                                height: `${60 + (w ? 40 : 20)}%`,
                                                opacity: w === 0 ? 0.3 : 0.9,
                                                transform: isHovered ? `scaleY(${0.8 + Math.random() * 0.4})` : 'scaleY(1)',
                                                transformOrigin: 'bottom'
                                            }}
                                        />
                                    ))}
                                </div>
                                {/* Barcode Text */}
                                <span className="text-[7px] text-[var(--cyber-green)]/60 font-mono tracking-[0.2em] mt-0.5 group-hover:text-[#00ff41] transition-colors">
                                    *CST-8501*
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-[var(--cyber-green)]/5 px-3 py-1 text-center">
                        <span className="text-[8px] text-[var(--cyber-green)]/60 font-mono">
                            VALID UNTIL: 12/2025
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IDCard;
