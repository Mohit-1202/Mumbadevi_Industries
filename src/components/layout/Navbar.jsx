import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', index: 0 },
        { name: 'About', href: '#about', index: 1 },
        { name: 'Products', href: '#products', index: 3 }, // Fixed alignment (index 2 is Vision)
        { name: 'Infrastructure', href: '#infrastructure', index: 4 },
        { name: 'Clients', href: '#clients', index: 5 },
    ];

    const scrollToSection = (e, href, index) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        
        if (window.innerWidth >= 1024) {
            // Desktop Sticky Flow
            window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
            });
        } else {
            // Mobile standard flow
            const element = document.querySelector(href);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-[10001] transition-all duration-500 px-6 sm:px-12",
                isScrolled ? "glass-nav py-4 shadow-sm" : "py-8"
            )}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="#home" onClick={(e) => scrollToSection(e, '#home', 0)} className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
                            M
                        </div>
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
                            MUMBADEVI <span className="text-primary">IND.</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href, link.index)}
                                className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}

                        <div className="flex items-center gap-6 pl-6 border-l border-slate-200 dark:border-slate-800">
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                            </button>
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact', 6)}
                                className="bg-primary text-white px-7 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary-dark transition-all hover:scale-105 active:scale-95"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4 relative z-[10010]">
                        <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 dark:text-white">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="md:hidden fixed inset-0 z-[10005] bg-white/98 dark:bg-dark-bg/98 backdrop-blur-3xl flex flex-col justify-center items-center"
                    >
                        {/* Explicit Close Button for Mobile Menu */}
                        <div className="absolute top-10 right-6 z-[10015]">
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                },
                                closed: {
                                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                }
                            }}
                            className="flex flex-col items-center justify-center space-y-8 w-full relative z-10"
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href, link.index)}
                                    variants={{
                                        open: { opacity: 1, y: 0, scale: 1 },
                                        closed: { opacity: 0, y: 40, scale: 0.95 }
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-slate-200 font-heading uppercase tracking-widest hover:text-primary transition-colors text-center"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact', 6)}
                                variants={{
                                    open: { opacity: 1, scale: 1, y: 0 },
                                    closed: { opacity: 0, scale: 0.9, y: 20 }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-primary text-white px-12 py-4 rounded-xl text-lg font-bold mt-4 shadow-xl shadow-primary/20 text-center uppercase tracking-widest"
                            >
                                Inquire Now
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
