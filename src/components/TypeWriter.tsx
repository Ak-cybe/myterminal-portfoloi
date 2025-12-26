import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    onComplete?: () => void;
    showCursor?: boolean;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
    text,
    speed = 30,
    delay = 0,
    className = '',
    onComplete,
    showCursor = true,
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(delayTimer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (displayedText.length < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);

            return () => clearTimeout(timer);
        } else {
            setIsComplete(true);
            onComplete?.();
        }
    }, [displayedText, text, speed, started, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isComplete && (
                <motion.span
                    className="inline-block w-2.5 h-5 bg-cyber-green ml-0.5"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'steps(2)' as any }}
                />
            )}
        </span>
    );
};

export default TypeWriter;
