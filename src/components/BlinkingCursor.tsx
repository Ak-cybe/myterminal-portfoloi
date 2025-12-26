import { motion } from 'framer-motion';

const BlinkingCursor: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <motion.span
            className={`inline-block w-2.5 h-5 bg-cyber-green ${className}`}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'steps(2)' as any }}
        />
    );
};

export default BlinkingCursor;
