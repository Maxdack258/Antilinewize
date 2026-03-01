import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Camera, Database, AlertTriangle, Heart, Lock } from 'lucide-react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const realityCards = [
        {
            icon: Eye,
            title: 'Invasive Monitoring',
            description: 'Technically known as "Man-in-the-Middle" (SSL Decryption). They break encryption on secure websites to inspect private search history, banking details, and personal communications.',
            accent: 'red'
        },
        {
            icon: Camera,
            title: 'The "Classwize" Panopticon',
            description: 'Screens viewed remotely in real-time. This constant, unannounced observation creates a "chilling effect," where students fear researching complex topics.',
            accent: 'red'
        },
        {
            icon: Database,
            title: 'Data Profits',
            description: 'Qoria is a for-profit entity aggregating the data of millions of minors to build "risk profiles" without clear, affirmative consent from the students themselves.',
            accent: 'red'
        }
    ];

    return (
        <div className="pt-40 pb-24 px-6 max-w-5xl mx-auto text-gray-300 relative z-10">
            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-20 text-center"
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6"
                    whileHover={{ scale: 1.02 }}
                >
                    <AlertTriangle size={16} className="text-accent-red" />
                    <span className="text-sm font-medium text-accent-red">Advocacy Project</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">About Us</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    We believe that education should be built on <span className="text-green-400 font-semibold">trust</span>, not <span className="text-accent-red font-semibold">surveillance</span>.
                </p>
            </motion.div>

            {/* Who We Are + Target */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mb-24 grid md:grid-cols-2 gap-8 items-stretch"
            >
                {/* Who We Are Card */}
                <motion.div
                    className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 cursor-default"
                    whileHover={{ y: -4 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                            <Heart size={20} className="text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Who We Are</h2>
                    </div>
                    <p className="leading-relaxed mb-4 text-gray-400">
                        This project was founded by students who recognized a growing problem in our schools: the replacement of guidance and trust with <span className="text-accent-red font-medium">aggressive, intrusive monitoring software</span>.
                    </p>
                    <p className="leading-relaxed text-gray-400">
                        We are dedicated to exposing the reality of <strong className="text-white">Linewize</strong> and advocating for a learning environment that respects <span className="text-green-400 font-medium">student privacy</span> and fosters true <span className="text-green-400 font-medium">digital citizenship</span>.
                    </p>
                </motion.div>

                {/* The Target Card */}
                <motion.div
                    className="p-8 rounded-2xl bg-gradient-to-br from-accent-red/10 to-transparent border border-accent-red/20 backdrop-blur-sm relative overflow-hidden"
                    whileHover={{ y: -4 }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 rounded-full blur-3xl" />
                    <div className="relative">
                        <div className="text-accent-red font-mono mb-2 text-sm uppercase tracking-widest flex items-center gap-2">
                            <Lock size={14} />
                            The Target
                        </div>
                        <div className="text-4xl font-black text-white mb-2">Qoria</div>
                        <div className="text-sm text-gray-500 mb-6">Parent Corporation of Linewize</div>
                        <div className="flex flex-col gap-3">
                            {['Global Surveillance Giant', 'For-Profit Data Aggregator', 'Risk Profiling Algorithms'].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* The Reality of Linewize */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="mb-24"
            >
                <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-10 text-center">
                    The Reality of Linewize
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {realityCards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-accent-red/40 transition-all duration-300 cursor-pointer"
                        >
                            <div className="p-3 rounded-xl bg-accent-red/10 border border-accent-red/20 w-fit mb-4 group-hover:bg-accent-red/20 transition-colors duration-300">
                                <card.icon size={24} className="text-accent-red" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Safety Shouldn't Mean Silence */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mb-20"
            >
                <h2 className="text-3xl font-bold text-white mb-8">Why "Safety" Shouldn't Mean "Silence"</h2>
                <p className="mb-8 leading-relaxed text-lg text-gray-400">
                    The current approach to digital <span className="text-green-400 font-medium">safety</span> is broken. By over-blocking educational resources and micromanaging every click, <span className="text-accent-red font-medium">Linewize</span> hinders the very education it is supposed to protect.
                </p>
                <div className="space-y-4">
                    <motion.div
                        className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-gray-600 transition-all duration-300"
                        whileHover={{ x: 4 }}
                    >
                        <div className="min-w-1 bg-gray-600 rounded-full" />
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Blocking Education</h4>
                            <p className="text-gray-400">Aggressive filtering algorithms <span className="text-accent-red">block legitimate research</span>, health information, and historical context.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-accent-red/20 hover:border-accent-red/40 transition-all duration-300"
                        whileHover={{ x: 4 }}
                    >
                        <div className="min-w-1 bg-accent-red rounded-full" />
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Eroding Trust</h4>
                            <p className="text-gray-400">When a school installs <span className="text-accent-red">spyware</span>, it sends a clear message: <em>"We do not <span className="text-green-400">trust</span> you."</em></p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;
