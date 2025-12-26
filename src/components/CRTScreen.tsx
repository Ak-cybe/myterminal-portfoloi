import React from 'react';

interface CRTScreenProps {
    children: React.ReactNode;
}

const CRTScreen: React.FC<CRTScreenProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-cyber-black overflow-hidden scanlines crt-curve noise">
            {/* Scanline animation overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-50"
                style={{
                    background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
                    backgroundSize: '100% 4px',
                }}
            />

            {/* Vignette effect */}
            <div
                className="pointer-events-none fixed inset-0 z-40"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
                }}
            />

            {/* Flicker effect overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-30 animate-flicker opacity-[0.03]"
                style={{
                    background: 'rgba(0, 255, 65, 0.03)',
                }}
            />

            {/* Main content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default CRTScreen;
