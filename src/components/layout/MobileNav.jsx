import React, { useState, useEffect } from 'react';
import { 
    LayoutDashboard, Info, Printer, 
    Factory, BarChart3, Phone, MessageCircle 
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = () => {
    const { t } = useAccessibility();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 20) {
                setIsVisible(false);
                setIsContactMenuOpen(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'products', 'infrastructure', 'clients', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        
        if (id === 'contact') {
            setIsContactMenuOpen(!isContactMenuOpen);
            return;
        }

        setIsContactMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 20;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    const menuItems = [
        { id: 'home', label: t('nav.home'), icon: LayoutDashboard },
        { id: 'about', label: t('nav.about'), icon: Info },
        { id: 'products', label: t('nav.products'), icon: Printer },
        { id: 'infrastructure', label: 'Infra', icon: Factory },
        { id: 'clients', label: t('nav.impact'), icon: BarChart3 },
        { id: 'contact', label: t('nav.contact'), icon: Phone },
    ];

    return (
        <div
            className={cn(
                "lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-lg z-[10001] transition-all duration-500 ease-in-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"
            )}
        >
            {/* Contact Sub-menu */}
            <AnimatePresence>
                {isContactMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-0 right-0 mb-4 px-2"
                    >
                        <div className="bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-2xl shadow-xl p-2 flex gap-2">
                            <a 
                                href="tel:+918169017209" 
                                className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
                            >
                                <Phone size={16} /> Call
                            </a>
                            <a 
                                href="https://wa.me/918169017209?text=Hello!%20I%27m%20interested%20in%20Mumbadevi%20Industries%27%20printing%20and%20packaging%20services.%20I%27d%20like%20to%20discuss%20a%20project." 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl bg-green-500 text-white font-bold text-sm shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
                            >
                                <MessageCircle size={16} /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className="bg-white/80 dark:bg-dark-bg/80 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] rounded-2xl flex items-stretch justify-between p-1.5 ring-1 ring-black/5 dark:ring-white/5 overflow-hidden">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className={cn(
                                "flex flex-1 flex-col items-center justify-center py-2.5 px-0.5 rounded-xl transition-all duration-300 group relative",
                                isActive ? "text-primary dark:text-primary-light" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                            )}
                        >
                            <div className={cn(
                                "mb-1 transition-transform duration-300",
                                isActive ? "scale-110" : "group-hover:scale-110"
                            )}>
                                <Icon
                                    size={18}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                            </div>

                            <span className={cn(
                                "text-[8px] font-bold tracking-tight uppercase transition-colors duration-300 whitespace-nowrap",
                                isActive ? "text-primary dark:text-primary-light" : "text-slate-500 dark:text-slate-400"
                            )}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default MobileNav;
