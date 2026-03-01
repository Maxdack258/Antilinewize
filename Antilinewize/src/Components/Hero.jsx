import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedAnimations } from '../hooks/useIsMobile';

const Hero = () => {
    const reduceAnimations = useReducedAnimations();

    // Staggered animation variants (used only on desktop)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Simplified mobile version
    if (reduceAnimations) {
        return (
            <section className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    {/* Main Title with Static Strikethrough */}
                    <div className="relative mb-4">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            <span className="relative inline-block">
                                Linewize
                                {/* Static strikethrough for mobile */}
                                <span className="absolute top-1/2 left-0 w-full h-1 bg-accent-red transform -rotate-6" />
                            </span>
                        </h1>
                    </div>

                    {/* Malwarewize */}
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-red tracking-tight font-mono">
                            Malwarewize
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-400 mb-10 leading-relaxed px-2">
                        Linewize isn't just a filter—it's <span className="text-white font-medium">surveillance</span>. From real-time screen watching to deep-packet data inspection, we break down how Qoria's software <span className="text-accent-red font-medium">compromises student privacy</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 justify-center px-4">
                        <Link to="/investigation" className="w-full">
                            <div className="bg-white text-black font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2">
                                <FileText size={18} />
                                <span>Read the Investigation</span>
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                        <Link to="/how-it-works" className="w-full">
                            <div className="bg-transparent border border-white/20 text-gray-300 font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2">
                                <Zap size={18} className="text-accent-red" />
                                <span>How it Works</span>
                            </div>
                        </Link>
                    </div>

                    {/* Stats Preview - simplified */}
                    <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
                        {[
                            { value: '23M+', label: 'Students' },
                            { value: '27K', label: 'Schools' },
                            { value: '$100M+', label: 'Revenue' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Full animated desktop version
    return (
        <section className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-40 pb-24 min-h-screen">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto"
            >
                {/* Main Title with Strikethrough Animation */}
                <motion.div variants={itemVariants} className="relative mb-4">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none">
                        <span className="relative inline-block">
                            Linewize
                            {/* Animated Strikethrough SVG */}
                            <svg
                                className="absolute top-0 left-0 w-[110%] h-full -ml-[5%] pointer-events-none overflow-visible"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <motion.path
                                    d="M0,60 Q50,30 100,60"
                                    fill="transparent"
                                    stroke="#ef4444"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M5,40 Q60,80 95,35"
                                    fill="transparent"
                                    stroke="#ef4444"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
                                />
                            </svg>
                        </span>
                    </h1>
                </motion.div>

                {/* Malwarewize Reveal */}
                <motion.div
                    variants={itemVariants}
                    className="mb-10"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-accent-red tracking-tight font-mono"
                        style={{
                            textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
                        }}
                    >
                        Malwarewize
                    </motion.h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-14 leading-relaxed"
                >
                    Linewize isn't just a filter—it's <span className="text-white font-medium">surveillance</span>. From real-time screen watching to deep-packet data inspection, we break down how Qoria's software <span className="text-accent-red font-medium">compromises student privacy</span> and stifles intellectual freedom.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
                >
                    {/* Primary Button */}
                    <Link to="/investigation">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-white text-black font-bold py-4 px-8 rounded-full cursor-pointer shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.3)] transition-all duration-200 flex items-center justify-center gap-3"
                        >
                            <FileText size={20} className="flex-shrink-0" />
                            <span>Read the Investigation</span>
                            <ArrowRight
                                size={18}
                                className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                            />
                        </motion.div>
                    </Link>

                    {/* Secondary Button */}
                    <Link to="/how-it-works">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-transparent border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-full cursor-pointer transition-all duration-200 flex items-center justify-center gap-3 hover:bg-white/5"
                        >
                            <Zap size={20} className="flex-shrink-0 text-accent-red" />
                            <span>How it Works</span>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Stats Preview */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                >
                    {[
                        { value: '23M+', label: 'Students Monitored' },
                        { value: '27K', label: 'Schools Affected' },
                        { value: '$100M+', label: 'Annual Revenue' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
