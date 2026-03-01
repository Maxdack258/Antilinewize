import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu } from 'lucide-react';
import { useReducedAnimations } from '../hooks/useIsMobile';

const Navbar = () => {
    const location = useLocation();
    const reduceAnimations = useReducedAnimations();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { to: '/about', label: 'About Us' },
        { to: '/investigation', label: 'The Tech' },
        { to: '/how-it-works', label: 'How it Works' },
        { to: '/mission', label: 'Our Mission' },
    ];

    // Simplified mobile navbar
    if (reduceAnimations) {
        return (
            <>
                <nav className="fixed top-2 left-2 right-2 z-50 bg-dark-surface/95 border border-white/10 rounded-xl px-4 py-2.5 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-lg font-bold">
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                        <span className="text-accent-red font-extrabold">Anti</span>
                        <span className="text-white font-bold -ml-1">linewize</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} />
                    </button>
                </nav>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="fixed top-16 left-2 right-2 z-50 bg-dark-surface/95 border border-white/10 rounded-xl p-4">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.to;
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-3 px-4 rounded-lg text-base font-medium ${isActive ? 'text-white bg-white/10' : 'text-gray-400'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="mt-3 pt-3 border-t border-white/10">
                            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-red to-red-600 text-white font-semibold py-3 px-5 rounded-full">
                                <Shield size={16} />
                                <span>Save your data</span>
                            </button>
                            <p className="text-center text-[10px] text-gray-500 mt-2">Coming Soon</p>
                        </div>
                    </div>
                )}
            </>
        );
    }

    // Full animated desktop navbar
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-4 left-4 right-4 z-50 glass-nav floating-nav px-6 py-3 flex justify-between items-center"
        >
            {/* Logo */}
            <Link
                to="/"
                className="flex items-center gap-3 text-xl font-bold tracking-tight cursor-pointer group transition-all duration-200"
            >
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <img
                        src="/logo.png"
                        alt="Antilinewize Logo"
                        className="w-9 h-9 object-contain transition-transform duration-200"
                    />
                </motion.div>
                <span className="hidden sm:block">
                    <span className="text-accent-red font-extrabold">Anti</span>
                    <span className="text-white font-bold">linewize</span>
                </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-200
                                ${isActive
                                    ? 'text-white bg-white/10'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }
                            `}
                        >
                            {link.label}
                            {isActive && (
                                <motion.div
                                    layoutId="navIndicator"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent-red rounded-full"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* CTA Button */}
            <div className="relative group">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative flex items-center gap-2 bg-gradient-to-r from-accent-red to-red-600 text-white font-semibold py-2.5 px-5 rounded-full cursor-pointer shadow-[0_4px_20px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_30px_rgba(239,68,68,0.5)] transition-shadow duration-200"
                >
                    <Shield size={16} />
                    <span className="hidden sm:inline">Save your data</span>
                    <span className="sm:hidden">Protect</span>
                </motion.button>

                {/* Coming Soon Tooltip - Below */}
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div className="bg-dark-elevated text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                        COMING SOON
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
