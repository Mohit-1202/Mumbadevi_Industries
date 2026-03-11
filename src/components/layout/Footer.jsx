import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0B1220] border-t border-white/10 py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
            {/* Fine-grained industrial texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale invert dark:invert-0">
                <img src="https://plus.unsplash.com/premium_photo-1682147377676-f33fa2cc20eb?auto=format&fit=crop&q=80&w=2000" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24 mb-20 text-center lg:text-left">
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-center lg:justify-start gap-5 mb-10 group">
                            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-2xl shadow-primary/40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                                M
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter font-heading text-white uppercase">
                                Mumbadevi <span className="text-primary italic">Ind.</span>
                            </h2>
                        </div>
                        <p className="text-white/70 font-medium max-w-md mx-auto lg:mx-0 mb-12 leading-relaxed text-lg lg:text-xl italic">
                            Translating Your Imaginations into Reality since 2004. <br className="hidden lg:block" />
                            <span className="text-white/40 not-italic font-normal text-base block mt-2">Your premium partner in high-precision offset printing.</span>
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            {['LN', 'TW', 'IG', 'FB'].map(social => (
                                <a key={social} href="#" className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[10px] font-black text-white hover:bg-primary hover:border-primary hover:scale-110 shadow-lg transition-all duration-300">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-primary mb-12 font-heading">Navigation</h4>
                        <ul className="space-y-6 text-base font-bold text-white/60">
                            <li><a href="#home" className="hover:text-white transition-all hover:translate-x-2 inline-block duration-300">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-all hover:translate-x-2 inline-block duration-300">About Us</a></li>
                            <li><a href="#products" className="hover:text-white transition-all hover:translate-x-2 inline-block duration-300">Capabilities</a></li>
                            <li><a href="#infrastructure" className="hover:text-white transition-all hover:translate-x-2 inline-block duration-300">Infrastructure</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-primary mb-12 font-heading">Headquarters</h4>
                        <div className="text-base font-bold leading-relaxed text-white/60 mb-12">
                            Mumbadevi Industries,<br />
                            <span className="text-white/80">Mumbai, Maharashtra,</span><br />
                            India.
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-white transition-all duration-300"
                        >
                            Back to Top <ArrowUp size={20} strokeWidth={3} className="group-hover:-translate-y-2 transition-transform duration-500" />
                        </button>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                    <div>© {new Date().getFullYear()} Mumbadevi Industries. Precision in every print.</div>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
