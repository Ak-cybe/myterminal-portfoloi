import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
    name: string;
    level: number;
    delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
    return (
        <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
                <span className="text-cyber-green">{name}</span>
                <span className="text-cyber-greenDim">{level}%</span>
            </div>
            <div className="skill-bar h-2 rounded-none">
                <motion.div
                    className="skill-bar-fill h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
};

export default SkillBar;
