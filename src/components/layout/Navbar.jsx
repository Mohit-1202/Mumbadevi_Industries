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
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Infrastructure', href: '#infrastructure' },
        { name: 'Clients', href: '#clients' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 sm:px-12",
            isScrolled ? "glass-nav py-4 shadow-sm" : "py-8"
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2 group">
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
                            className="bg-primary text-white px-7 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary-dark transition-all hover:scale-105 active:scale-95"
                        >
                            Start Project
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 dark:text-white">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0B1220] border-t border-slate-100 dark:border-slate-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-slate-800 dark:text-slate-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-[#0B74B8] text-white p-3 rounded-md text-center font-bold"
                            >
                                Inquire Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
