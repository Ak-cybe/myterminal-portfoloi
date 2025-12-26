import React from 'react';

const GridOverlay: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Radial Gradient Glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.03) 0%, transparent 60%)'
                }}
            />

            {/* Hex/Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px),
                    linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)'
                }}
            />

            {/* Cyber Vignette Edges */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />
        </div>
    );
};

export default GridOverlay;
