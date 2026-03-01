import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Unlock, Camera, Search, AlertTriangle } from 'lucide-react';

const HowItWorks = () => {
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

    const steps = [
        {
            number: '1',
            icon: Unlock,
            title: 'The "Man-in-the-Middle" Attack (SSL Decryption)',
            description: 'Modern internet security relies on encryption to keep your data safe between your device and websites like Google or YouTube. Linewize bypasses this protection using a technique known in cybersecurity as a Man-in-the-Middle (MITM) interception.',
            details: [
                {
                    title: 'The Root Certificate',
                    content: 'Schools install a specific file called a "Root Certificate" on your device. This tricks your computer into trusting Linewize as if it were the website you are visiting.',
                    accent: 'red'
                },
                {
                    title: 'Breaking the Seal',
                    content: 'When you search for something private (e.g., "mental health help"), Linewize intercepts the data before it reaches Google. It decrypts the traffic, reads your search query, logs it, and then re-encrypts it to send it along.',
                    accent: 'red'
                }
            ],
            warning: 'You see a secure connection, but the school sees the plain text of your searches, banking sites, and private forms.',
            color: 'red'
        },
        {
            number: '2',
            icon: Camera,
            title: 'Classwize: The 10-Second Screenshot',
            description: 'Classwize is not just about blocking games; it is a visual recording tool. Documentation confirms that the system captures images of student screens at a high frequency.',
            details: [
                {
                    title: 'Continuous Capture',
                    content: 'The software takes a screenshot of your active screen every 10 seconds, or immediately whenever you open a new tab.'
                },
                {
                    title: 'Live View',
                    content: 'Teachers can activate "Live View" to watch your screen update in real-time. Crucially, there is no indicator to tell you which teacher is watching or when.'
                }
            ],
            note: 'These screenshots can be generated into PDF reports and stored indefinitely, creating a permanent visual history of your activity.',
            color: 'gray'
        },
        {
            number: '3',
            icon: Search,
            title: 'Deep Packet Inspection (DPI)',
            description: 'While basic filters just block a website address (like gaming.com), Linewize uses Deep Packet Inspection. This is the difference between reading the address on an envelope and steaming the envelope open to read the letter inside.',
            details: [
                {
                    title: 'Beyond the URL',
                    content: 'DPI analyzes the full content of data packets as they move across the network.'
                },
                {
                    title: 'Keyword Logging',
                    content: 'This allows the system to flag specific keywords inside documents, chat messages, or search bars. It enables the creation of detailed "behavioral profiles" based on everything you type.'
                }
            ],
            color: 'gray'
        },
        {
            number: '4',
            icon: AlertTriangle,
            title: 'The "Context-Blind" Algorithm',
            description: 'The data collected by these methods is fed into algorithms that lack human understanding, leading to False Positives.',
            details: [
                {
                    title: 'No Context',
                    content: 'The algorithm sees keywords, not intent. A student researching "breast cancer" for Biology can be flagged for pornography. A student writing a creative story about war can be flagged for violence.'
                },
                {
                    title: 'The Consequence',
                    content: 'Harmless academic curiosity triggers "Risk Alerts," sending notifications to administrators and parents, often causing trauma and disciplinary action for innocent behavior.'
                }
            ],
            color: 'gray'
        }
    ];

    return (
        <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-gray-300 relative z-10 font-sans leading-relaxed">
            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-16 pb-8 border-b border-white/10"
            >
                <div className="flex items-center gap-2 text-accent-red font-mono uppercase tracking-widest text-sm mb-6">
                    <Shield size={16} />
                    <span>Technical Breakdown</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                    How It Works: The Anatomy of <span className="text-accent-red">School Surveillance</span>
                </h1>
                <p className="text-xl text-gray-400">
                    They call it "Filtering." The technical term is "<strong className="text-white">Man-in-the-Middle</strong>."
                </p>
            </motion.div>

            {/* Intro */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="mb-16 text-lg p-6 rounded-2xl bg-white/[0.03] border border-white/10"
            >
                <p>
                    Most students assume that if a website has a padlock icon (HTTPS) in the address bar, their connection is <span className="text-green-400 font-semibold">private</span>. When <span className="text-accent-red font-bold">Linewize</span> is installed, that security is an <span className="text-accent-red">illusion</span>.
                </p>
            </motion.div>

            {/* Steps */}
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <motion.section
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeIn}
                        className="relative"
                    >
                        {/* Vertical Timeline Line */}
                        <div className={`absolute left-7 top-14 bottom-0 w-0.5 hidden md:block ${step.color === 'red' ? 'bg-gradient-to-b from-accent-red/50 to-transparent' : 'bg-gradient-to-b from-gray-600/50 to-transparent'
                            }`} />

                        {/* Step Header */}
                        <div className="flex items-start gap-6 mb-6">
                            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg relative z-10 ${step.color === 'red'
                                ? 'bg-gradient-to-br from-accent-red to-red-700 shadow-accent-red/20'
                                : 'bg-gradient-to-br from-gray-600 to-gray-700'
                                }`}>
                                {step.number}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="ml-0 md:ml-20 grid md:grid-cols-2 gap-4">
                            {step.details.map((detail, detailIndex) => (
                                <motion.div
                                    key={detailIndex}
                                    whileHover={{ y: -2 }}
                                    className={`p-5 rounded-xl bg-white/[0.03] border transition-all duration-300 cursor-default ${detail.accent === 'red'
                                        ? 'border-accent-red/20 hover:border-accent-red/40'
                                        : 'border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    <strong className="text-white block mb-2">{detail.title}</strong>
                                    <p className="text-sm text-gray-400">{detail.content}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Warning/Note */}
                        {(step.warning || step.note) && (
                            <div className="ml-0 md:ml-20 mt-4">
                                <div className={`p-4 rounded-xl text-sm flex items-start gap-3 ${step.warning
                                    ? 'bg-red-950/20 border border-accent-red/20 text-gray-300'
                                    : 'bg-white/[0.02] border border-white/10 text-gray-400'
                                    }`}>
                                    {step.warning && (
                                        <>
                                            <span className="text-lg flex-shrink-0">⚠️</span>
                                            <span><strong className="text-accent-red">The Result: </strong>{step.warning}</span>
                                        </>
                                    )}
                                    {step.note && (
                                        <>
                                            <span className="text-lg flex-shrink-0">📁</span>
                                            <span><strong className="text-white">The Archive: </strong>{step.note}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.section>
                ))}
            </div>

            {/* Conclusion */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="mt-20 p-10 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 text-center"
            >
                <h3 className="text-2xl font-bold text-white mb-4">The Bottom Line</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    This is not just about keeping students off distractions. It is a complex infrastructure of <span className="text-accent-red font-bold">decryption</span>, <span className="text-accent-red font-bold">screen recording</span>, and <span className="text-accent-red font-bold">packet analysis</span> designed to <span className="text-accent-red">strip away the privacy layers</span> that the rest of the internet relies on for <span className="text-green-400 font-bold">security</span>.
                </p>
            </motion.section>
        </div>
    );
};

export default HowItWorks;
