import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Menu, X, Phone, MessageCircle, ChevronDown, 
    Accessibility, Sun, Moon 
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { cn } from '../../utils/cn';

const Navbar = () => {
    const { 
        theme, toggleTheme, 
        language, switchLanguage, t 
    } = useAccessibility();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setIsContactDropdownOpen(false);
        if (isContactDropdownOpen) {
            window.addEventListener('click', handleClickOutside);
        }
        return () => window.removeEventListener('click', handleClickOutside);
    }, [isContactDropdownOpen]);

    const navLinks = [
        { name: t('nav.home'), href: '#home', index: 0 },
        { name: t('nav.about'), href: '#about', index: 1 },
        { name: t('nav.products'), href: '#products', index: 3 },
        { name: t('nav.infrastructure'), href: '#infrastructure', index: 4 },
        { name: t('nav.impact'), href: '#impact', index: 5 },
    ];

    const contactOptions = [
        { 
            name: t('nav.call'), 
            icon: <Phone size={18} />, 
            href: 'tel:+918169017209',
            color: 'bg-blue-500'
        },
        { 
            name: t('nav.whatsapp'), 
            icon: <MessageCircle size={18} />, 
            href: 'https://wa.me/918169017209?text=Hello!%20I%27m%20interested%20in%20Mumbadevi%20Industries%27%20printing%20and%20packaging%20services.%20I%27d%20like%20to%20discuss%20a%20project.',
            color: 'bg-green-500'
        },
    ];

    const scrollToSection = (e, href, index) => {
        e.preventDefault();

        // Desktop Sticky Flow
        if (window.innerWidth >= 1024) {
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

                {/* Main Navigation */}
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

                    {/* Contact Dropdown Trigger (Styled as link) */}
                    <div 
                        className="relative group/contact"
                        onMouseEnter={() => setIsContactDropdownOpen(true)}
                        onMouseLeave={() => setIsContactDropdownOpen(false)}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsContactDropdownOpen(!isContactDropdownOpen);
                            }}
                            className={cn(
                                "flex items-center gap-1.5 text-sm font-semibold transition-colors relative py-2",
                                isContactDropdownOpen ? "text-primary" : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light"
                            )}
                        >
                            {t('nav.contact')}
                            <ChevronDown size={14} className={cn("transition-transform duration-300", isContactDropdownOpen && "rotate-180")} />
                            <span className={cn("absolute -bottom-1 left-0 h-0.5 bg-primary transition-all", isContactDropdownOpen ? "w-full" : "w-0 group-hover/contact:w-full")} />
                        </button>

                        <AnimatePresence>
                            {isContactDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95, rotateX: -10 }}
                                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95, rotateX: -10 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute right-0 mt-2 w-56 bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/50 dark:border-white/10 overflow-hidden perspective-1000"
                                >
                                    <div className="p-2 space-y-1">
                                        {contactOptions.map((option, idx) => (
                                            <motion.a
                                                key={option.name}
                                                href={option.href}
                                                target={option.name === t('nav.whatsapp') ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all group active:scale-95"
                                            >
                                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg", option.color)}>
                                                    {option.icon}
                                                </div>
                                                <div className="flex flex-col text-left">
                                                    <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{option.name}</span>
                                                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter transition-colors group-hover:text-slate-500 dark:group-hover:text-slate-300">+91-8169017209</span>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-6 pl-6 border-l border-slate-200 dark:border-slate-800">
                        <button 
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-primary transition-all"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Only Theme Toggle (Minimal) */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
