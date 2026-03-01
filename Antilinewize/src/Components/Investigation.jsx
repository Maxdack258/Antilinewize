import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Eye, Database, Users, Scale } from 'lucide-react';

const Investigation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const sections = [
        {
            number: '01',
            icon: Eye,
            title: 'The Technology of Surveillance',
            intro: 'Schools often describe Linewize as a simple "filter." Technically, it is closer to spyware. To function, the software must bypass the standard security protocols designed to protect internet users.',
            subsections: [
                {
                    title: '1.1 "Man-in-the-Middle" Attacks (SSL Decryption)',
                    content: 'Modern internet security relies on SSL/TLS encryption (the "padlock" icon in your browser) to keep data private between you and the website you visit.',
                    points: [
                        { label: 'The Break', text: 'Linewize forces schools to install a "root certificate" on student devices. This allows Linewize to perform a Man-in-the-Middle (MITM) inspection.' },
                        { label: 'The Interception', text: 'When a student searches for something private (e.g., "depression symptoms") on a secure site like Google, Linewize intercepts the connection, decrypts and reads the data, logs it, and then re-encrypts it to send it to Google.' },
                        { label: 'The Reality', text: 'From the student\'s perspective, the connection looks secure. In reality, the encryption has been stripped away, and every search, chat message, and form entry is visible to the school\'s administrators.' }
                    ]
                },
                {
                    title: '1.2 The "Classwize" Panopticon',
                    content: 'The "Classwize" feature turns every student device into a broadcasting camera.',
                    points: [
                        { label: '10-Second Screen Grabs', text: 'Documentation confirms that Classwize takes screenshots of student screens every 10 seconds, or whenever a new tab is opened.' },
                        { label: 'Live View', text: 'Teachers can activate a real-time feed, watching students type and browse without the student ever knowing which specific teacher is watching or when.' },
                        { label: 'The Archive', text: 'These screenshots aren\'t just viewed; they are often generated into time-stamped PDF reports that can be stored indefinitely, creating a permanent visual record of a student\'s digital life.' }
                    ]
                },
                {
                    title: '1.3 Deep Packet Inspection (DPI)',
                    content: 'While some filters just block website addresses (DNS Filtering), Linewize offers Deep Packet Inspection. This technology doesn\'t just look at where you are going; it looks at what you are doing. It analyzes the full content of data packets, allowing the system to log specific keywords within private chats, documents, and search queries—enabling granular "behavioral profiling" rather than just blocking adult sites.'
                }
            ]
        },
        {
            number: '02',
            icon: Database,
            title: 'The Data Economy: You Are the Product',
            intro: 'It is critical to understand that Linewize is not just a tool; it is a subsidiary of Qoria, a for-profit data giant generating over $112 million annually.',
            subsections: [
                {
                    title: '2.1 The "Student Journey" & Risk Scoring',
                    content: 'Qoria does not just delete data after a student graduates. They utilize "product stacking" to build comprehensive "Risk Profiles."',
                    points: [
                        { label: 'Algorithmic Judgment', text: 'The system aggregates data on searches, location, and behavior to assign students a "risk score." This creates a digital narrative about a student—labeling them "at-risk" or "problematic"—based entirely on algorithms.' },
                        { label: 'Longitudinal Tracking', text: 'Qoria markets a "Student Journey" capability, implying the tracking of behavioral patterns over years. This data creates a digital fingerprint that follows a student through their entire educational career.' }
                    ]
                },
                {
                    title: '2.2 The "Right to Be Forgotten" Loophole',
                    content: 'While European laws (GDPR) theoretically offer a "right to be forgotten," schools often exploit exemptions for "educational records."',
                    points: [
                        { label: 'Indefinite Retention', text: 'Data is often retained for "legal or administrative purposes" for years after a student leaves.' },
                        { label: 'Corporate Transfers', text: 'Qoria\'s privacy policy reserves the right to transfer student data during mergers or acquisitions. As Qoria aggressively acquires other companies, student data is moved and consolidated without renewed consent.' }
                    ]
                }
            ]
        },
        {
            number: '03',
            icon: Users,
            title: 'The Human Cost: Why Surveillance Fails',
            intro: 'The argument for this technology is always "safety." However, the evidence suggests that surveillance actually harms the very students it claims to protect.',
            subsections: [
                {
                    title: '3.1 The "Chilling Effect"',
                    content: 'Research from the Center for Democracy and Technology confirms that surveillance forces students to self-censor.',
                    points: [
                        { label: '60% of students', text: 'report feeling uncomfortable expressing their true thoughts when they know they are being monitored.', highlight: true },
                        { label: 'Health Hazards', text: 'Students explicitly avoid researching critical topics—mental health, LGBTQ+ identity, or political dissonance—because they fear being "flagged" or outed to administration.' }
                    ]
                },
                {
                    title: '3.2 False Positives & Context Blindness',
                    content: 'Algorithms are terrible at understanding context, leading to harmful accusations against innocent students.',
                    points: [
                        { label: 'The "Context Gap"', text: 'A student researching "breast cancer" for Biology is flagged for pornography. A student writing a creative story about war is flagged for violence.' },
                        { label: 'Bias', text: 'AI systems disproportionately flag LGBTQ+ content as "explicit." Words like "gay" or "lesbian" have historically triggered alerts, effectively "outing" students to staff.' },
                        { label: 'Consequences', text: 'These false flags lead to real-world trauma—disciplinary meetings, parental calls, and even police involvement—for purely academic or harmless behavior.' }
                    ]
                },
                {
                    title: '3.3 Erosion of Trust',
                    content: 'Effective education requires psychological safety. When a school installs spyware, it signals a fundamental lack of trust. The teacher-student relationship becomes one of Guard and Inmate. Tools like closing tabs remotely are not safety measures; they are control mechanisms used to enforce compliance.'
                }
            ]
        }
    ];

    return (
        <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-gray-300 font-sans leading-relaxed relative z-10">
            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="mb-16 pb-8 border-b border-white/10"
            >
                <div className="flex items-center gap-2 text-accent-red font-mono uppercase tracking-widest text-sm mb-6">
                    <AlertCircle size={16} />
                    <span>Investigative Report</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                    The Audit: Inside the Invisible Classroom
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-400 font-light">
                    How Linewize and Qoria Monetize Student Data and Normalize Surveillance
                </h2>
            </motion.div>

            {/* Executive Summary */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="mb-20 p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10"
            >
                <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide flex items-center gap-3">
                    <Scale size={20} className="text-accent-red" />
                    Executive Summary
                </h3>
                <p className="text-gray-300 leading-relaxed">
                    <span className="text-accent-red font-bold">Linewize</span> and its parent company, <span className="text-accent-red font-bold">Qoria</span>, have quietly become the global leaders in student <span className="text-accent-red">surveillance</span>, tracking over <span className="text-white font-bold">23 million children</span> across 27,000 schools. While marketed as "<span className="text-green-400">safety</span>" tools, our investigation reveals a different reality: a massive infrastructure of <span className="text-accent-red">invasive monitoring</span> that captures keystrokes, <span className="text-accent-red">decrypts private data</span>, and builds permanent <span className="text-accent-red">behavioral risk profiles</span>.
                </p>
            </motion.div>

            {/* Main Sections */}
            <div className="space-y-20">
                {sections.map((section, sectionIndex) => (
                    <motion.section
                        key={sectionIndex}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        {/* Section Header */}
                        <div className="flex items-start gap-6 mb-8">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-red to-red-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-accent-red/20">
                                {section.number}
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{section.title}</h2>
                                <p className="text-gray-400">{section.intro}</p>
                            </div>
                        </div>

                        {/* Subsections */}
                        <div className="pl-0 md:pl-20 space-y-8">
                            {section.subsections.map((sub, subIndex) => (
                                <div key={subIndex} className="border-l-2 border-white/10 pl-6 hover:border-accent-red/50 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-white mb-3">{sub.title}</h3>
                                    <p className="text-gray-400 mb-4">{sub.content}</p>
                                    {sub.points && (
                                        <ul className="space-y-4">
                                            {sub.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex gap-4">
                                                    <span className={`font-bold flex-shrink-0 ${point.highlight ? 'text-accent-red' : 'text-white'}`}>
                                                        {point.label}:
                                                    </span>
                                                    <span className="text-gray-400">{point.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* Verdict */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="mt-20 bg-gradient-to-br from-red-950/30 to-transparent border border-accent-red/20 p-10 rounded-2xl"
            >
                <h2 className="text-3xl font-bold text-white mb-6">The Verdict</h2>
                <p className="text-lg mb-6 text-gray-300">
                    The scale of surveillance deployed by <span className="text-accent-red font-bold">Linewize</span> and <span className="text-accent-red font-bold">Qoria</span> is <strong className="text-white">disproportionate to the risk.</strong>
                </p>
                <p className="mb-8 text-gray-400">
                    There is <strong className="text-white">no peer-reviewed evidence</strong> that this level of algorithmic monitoring prevents school violence or suicide. Instead, it creates a "surveillance theater" that violates privacy, commodifies student data, and trains young people to accept constant monitoring as normal.
                </p>
                <p className="text-2xl font-bold text-white text-center">
                    We believe students deserve <span className="text-green-400">safety</span> <em>and</em> <span className="text-green-400">privacy</span>. One should not cost the other.
                </p>
            </motion.section>
        </div>
    );
};

export default Investigation;
