import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark-bg text-white pt-24 pb-12 px-6 sm:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-20">
                    <div className="md:col-span-6">
                        <div className="flex items-center gap-3 mb-8 group">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
                                M
                            </div>
                            <h2 className="text-3xl font-black tracking-tight font-heading">
                                MUMBADEVI <span className="text-primary">IND.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 font-medium max-w-sm mb-10 leading-relaxed text-lg">
                            Translating Your Imaginations into Reality since 2004. Your precision partner in multi-colour offset printing.
                        </p>
                        <div className="flex gap-4">
                            {['LN', 'TW', 'IG', 'FB'].map(social => (
                                <a key={social} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xs font-black hover:bg-primary hover:border-primary transition-all duration-300">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs uppercase font-black tracking-widest text-primary mb-10 font-heading">Navigation</h4>
                        <ul className="space-y-5 text-base font-bold text-slate-400">
                            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#products" className="hover:text-primary transition-colors">Our Services</a></li>
                            <li><a href="#infrastructure" className="hover:text-primary transition-colors">Infrastructure</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Connect</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs uppercase font-black tracking-widest text-primary mb-10 font-heading">Headquarters</h4>
                        <div className="text-base font-bold leading-loose text-slate-400 mb-10">
                            Mumbadevi Industries,<br />
                            Mumbai, Maharashtra,<br />
                            India.
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors"
                        >
                            Return to top <ArrowUp size={20} strokeWidth={3} className="group-hover:-translate-y-2 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
                    <div>© {new Date().getFullYear()} Mumbadevi Industries. All rights reserved.</div>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
