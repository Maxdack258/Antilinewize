import React from 'react';
import { motion } from 'framer-motion';
import { useReducedAnimations } from '../hooks/useIsMobile';

const Background = () => {
    const reduceAnimations = useReducedAnimations();

    // Simplified background for mobile - just solid color with subtle gradient
    if (reduceAnimations) {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark-bg">
                {/* Simple subtle gradient - no animations */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at top left, rgba(239, 68, 68, 0.08) 0%, transparent 50%)'
                    }}
                />
                {/* Simple vignette */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(5, 5, 5, 0.7) 100%)'
                    }}
                />
            </div>
        );
    }

    // Full animated background for desktop
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark-bg">
            {/* Tech Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Radial Vignette Overlay - Focus Center */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(5, 5, 5, 0.4) 50%, rgba(5, 5, 5, 0.9) 100%)'
                }}
            />

            {/* Primary Red Glow - Top Left */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.12, 0.2, 0.12],
                    x: [0, -40, 0],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[15%] -left-[10%] w-[700px] h-[700px] bg-gradient-to-br from-red-800/40 to-red-950/20 rounded-full blur-[140px]"
            />

            {/* Secondary Gray Glow - Bottom Right */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    x: [0, 60, 0],
                    opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
                className="absolute -bottom-[15%] -right-[10%] w-[900px] h-[900px] bg-gradient-to-tl from-gray-700/15 to-gray-900/10 rounded-full blur-[150px]"
            />

            {/* Accent Glow - Center subtle */}
            <motion.div
                animate={{
                    opacity: [0.02, 0.06, 0.02],
                    scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"
            />

            {/* Noise texture overlay for depth */}
            <div
                className="absolute inset-0 z-[2] opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default Background;
