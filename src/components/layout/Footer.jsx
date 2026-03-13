import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

const Footer = () => {
    const { t } = useAccessibility();
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socials = [
        { Icon: Linkedin, href: "#" },
        { Icon: Twitter, href: "#" },
        { Icon: Instagram, href: "#" },
        { Icon: Facebook, href: "#" },
    ];

    return (
        <footer className="bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-white/10 py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden transition-colors duration-500">
            {/* Fine-grained industrial texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] pointer-events-none grayscale">
                <img src="https://plus.unsplash.com/premium_photo-1682147377676-f33fa2cc20eb?auto=format&fit=crop&q=80&w=2000" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24 mb-20 text-center lg:text-left">
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-center lg:justify-start gap-5 mb-10 group">
                            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-2xl shadow-primary/40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                                M
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter font-heading text-slate-900 dark:text-white uppercase transition-colors">
                                Mumbadevi <span className="text-primary italic">Ind.</span>
                            </h2>
                        </div>
                        <p className="text-slate-600 dark:text-white/70 font-medium max-w-md mx-auto lg:mx-0 mb-12 leading-relaxed text-lg lg:text-xl italic">
                            {t('footer.description')} <br className="hidden lg:block" />
                            <span className="text-slate-400 dark:text-white/40 not-italic font-normal text-base block mt-2">{t('footer.subDescription')}</span>
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            {socials.map((social, idx) => (
                                <a key={idx} href={social.href} className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl flex items-center justify-center text-slate-600 dark:text-white hover:bg-primary hover:border-primary hover:text-white hover:scale-110 shadow-lg transition-all duration-300">
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-8 font-heading">{t('footer.nav')}</h4>
                        <ul className="space-y-4 text-base font-semibold text-slate-500 dark:text-white/60">
                            <li><a href="#home" className="hover:text-primary dark:hover:text-white transition-all hover:translate-x-2 inline-block duration-300">{t('nav.home')}</a></li>
                            <li><a href="#about" className="hover:text-primary dark:hover:text-white transition-all hover:translate-x-2 inline-block duration-300">{t('nav.about')}</a></li>
                            <li><a href="#products" className="hover:text-primary dark:hover:text-white transition-all hover:translate-x-2 inline-block duration-300">{t('nav.products')}</a></li>
                            <li><a href="#infrastructure" className="hover:text-primary dark:hover:text-white transition-all hover:translate-x-2 inline-block duration-300">{t('nav.infrastructure')}</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-8 font-heading">{t('footer.address')}</h4>
                        <div className="text-base font-medium leading-relaxed text-slate-500 dark:text-white/60 mb-10">
                            D-219, Bonanza industrial estate,<br />
                            <span className="text-slate-800 dark:text-white/80 font-bold">Kandivali (East), Mumbai 400 101</span><br />
                            Maharashtra, India
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-slate-900 dark:hover:text-white transition-all duration-300"
                        >
                            {t('footer.backToTop')} <ArrowUp size={20} strokeWidth={3} className="group-hover:-translate-y-2 transition-transform duration-500" />
                        </button>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-white/20">
                    <div>© {new Date().getFullYear()} Mumbadevi Industries. {t('footer.copy')}</div>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-primary dark:hover:text-white/60 transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-primary dark:hover:text-white/60 transition-colors">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
