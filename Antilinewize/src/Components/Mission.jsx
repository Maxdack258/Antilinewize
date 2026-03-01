import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lock, Heart, Shield, Users, Megaphone, CheckCircle } from 'lucide-react';

const Mission = () => {
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

    const coreBeliefs = [
        { icon: Lock, title: 'Transparency', description: 'Students have a right to know the extent of monitoring they are under.' },
        { icon: Eye, title: 'Proportionality', description: 'Surveillance measures must be reasonable. Keystroke logging and device seizures are not.' },
        { icon: Heart, title: 'Mental Health', description: 'Constant observation and the fear of "Risk Alerts" create anxiety—not safety.' }
    ];

    const whatWeOppose = [
        { text: 'Breaking HTTPS encryption to spy on private communications', icon: '🔓' },
        { text: 'Unlimited screen capture and archiving of student activity', icon: '📸' },
        { text: 'Algorithmic "risk profiling" that lacks human context', icon: '🤖' },
        { text: 'The commodification of minor data by for-profit entities', icon: '💰' }
    ];

    const whatWeSupport = [
        { text: 'Age-appropriate digital citizenship education', icon: '📚' },
        { text: 'Transparent policies explained directly to students', icon: '📋' },
        { text: 'Hardware solutions over spyware (content filters at the router level)', icon: '🛡️' },
        { text: 'Student participation in policy creation', icon: '🗳️' }
    ];

    return (
        <div className="pt-40 pb-24 px-6 max-w-5xl mx-auto text-gray-300 relative z-10 font-sans leading-relaxed">
            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-16 pb-8 border-b border-white/10 text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                    <Target size={16} className="text-green-400" />
                    <span className="text-sm font-medium text-green-400">Our Purpose</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                    Our Mission
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    To advocate for a digital learning environment that prioritizes <span className="text-green-400 font-semibold">transparency</span>, <span className="text-green-400 font-semibold">trust</span>, and <span className="text-green-400 font-semibold">student dignity</span> over opaque <span className="text-accent-red">surveillance</span> systems.
                </p>
            </motion.div>

            {/* Core Beliefs */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="mb-24"
            >
                <motion.h2 variants={fadeIn} className="text-3xl font-bold text-white mb-10 text-center">
                    Core Beliefs
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {coreBeliefs.map((belief, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-green-500/40 transition-all duration-300 text-center cursor-default"
                        >
                            <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 w-fit mx-auto mb-4 group-hover:from-green-500/30 transition-colors duration-300">
                                <belief.icon size={28} className="text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{belief.title}</h3>
                            <p className="text-sm text-gray-400">{belief.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* What We Oppose / What We Support */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="mb-24 grid md:grid-cols-2 gap-8"
            >
                {/* What We Oppose */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-red-950/30 to-transparent border border-accent-red/20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-accent-red/10 border border-accent-red/20">
                            <Shield size={20} className="text-accent-red" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">What We Oppose</h2>
                    </div>
                    <ul className="space-y-4">
                        {whatWeOppose.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="text-xl flex-shrink-0">{item.icon}</span>
                                <span className="text-gray-300">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* What We Support */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-green-950/30 to-transparent border border-green-500/20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                            <CheckCircle size={20} className="text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">What We Support</h2>
                    </div>
                    <ul className="space-y-4">
                        {whatWeSupport.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="text-xl flex-shrink-0">{item.icon}</span>
                                <span className="text-gray-300">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.section>

            {/* Why This Matters */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="mb-24"
            >
                <h2 className="text-3xl font-bold text-white mb-8">Why This Matters</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300"
                        whileHover={{ y: -2 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Users size={20} className="text-green-400" />
                            <h3 className="text-xl font-bold text-white">For Students</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            You are not suspects. You deserve to <span className="text-green-400 font-medium">learn</span>, make <span className="text-green-400 font-medium">mistakes</span>, and <span className="text-green-400 font-medium">grow</span> without every keystroke being analyzed by a for-profit company. Your <span className="text-green-400 font-medium">privacy</span> is not a threat to <span className="text-green-400 font-medium">safety</span>; it is a <span className="text-white font-bold">prerequisite</span> for it.
                        </p>
                    </motion.div>
                    <motion.div
                        className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300"
                        whileHover={{ y: -2 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Megaphone size={20} className="text-accent-red" />
                            <h3 className="text-xl font-bold text-white">For Parents & Educators</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We urge you to look beyond the "<span className="text-green-400">safety</span>" marketing. The tools deployed by <span className="text-accent-red font-medium">Qoria</span> are industrial-grade <span className="text-accent-red">surveillance</span> mechanisms. We call on you to <span className="text-white font-bold">demand transparency</span> and <span className="text-white font-bold">question</span> the necessity of such invasive measures.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="p-10 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 text-center"
            >
                <h2 className="text-3xl font-bold text-white mb-6">Spread the Word</h2>
                <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-2xl mx-auto">
                    Real change happens when voices unite. <span className="text-white font-semibold">Share this website</span> with your friends, classmates, and companions. Talk to your <span className="text-green-400 font-bold">parents</span> and help them understand what's happening. Let this message reach <span className="text-green-400 font-bold">schools</span> and <span className="text-green-400 font-bold">administrators</span>.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        💬 Share in group chats
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        👨‍👩‍👧 Tell your parents
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        🏫 Reach your school
                    </span>
                </div>
                <p className="text-accent-red font-semibold text-lg">
                    Together, we send a clear message: <span className="text-white">Students deserve privacy.</span>
                </p>
            </motion.section>

            {/* Resistance Message */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="mt-12 text-center"
            >
                <div className="max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4 italic">
                        "One day, we will wake up and find the invader gone."
                    </p>
                    <p className="text-lg text-gray-500 italic mb-8">
                        Questa mattina mi sono alzato... e ho trovato l'invasor.
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-white mb-2">
                        Join the Resistance.
                    </p>
                    <p className="text-xl font-bold text-accent-red">
                        #Antilinewize
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default Mission;
