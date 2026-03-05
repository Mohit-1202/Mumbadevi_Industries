import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    return (
        <section ref={containerRef} id="home" className="relative h-[250vh] bg-[var(--background)]">
            <motion.div
                style={{ scale, opacity }}
                className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden origin-center bg-[var(--background)] transition-colors duration-500"
            >
                {/* Industrial Backdrop */}
                <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682147377676-f33fa2cc20eb?auto=format&fit=crop&q=80&w=2000"
                        alt="Industrial Printing"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-20 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 mb-8 text-primary font-bold text-sm uppercase tracking-[0.3em] font-heading">
                                <span className="w-12 h-[2px] bg-primary" />
                                Translating Your Imaginations
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-900 dark:text-white mb-10 font-heading uppercase tracking-tighter">
                                Mumbadevi <br />
                                <span className="text-primary">Industries</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-12 max-w-xl leading-relaxed border-l-4 border-primary pl-8">
                                Premier <span className="text-slate-900 dark:text-white font-bold">Multi-Colour Offset Printing</span> & Precision Packaging Solutions since 2004.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <Button href="#products" className="h-16 px-10 rounded-xl text-lg shadow-2xl shadow-primary/20">
                                    View Capabilities
                                </Button>
                                <Button href="#contact" variant="outline" className="h-16 px-10 rounded-xl text-lg">
                                    Contact Experts
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border-[12px] border-white dark:border-slate-800">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1682145481505-80614272c426?auto=format&fit=crop&q=80&w=1500"
                                    alt="Industrial Offset Press"
                                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[3s]"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                            <div className="absolute -top-10 -left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
