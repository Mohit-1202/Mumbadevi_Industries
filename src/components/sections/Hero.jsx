import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <Section className="lg:h-screen h-fit min-h-screen flex items-center justify-center p-0 pt-32 lg:pt-0 overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-500" showBackdrop={true}>
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    <div className="text-center lg:text-left">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 mb-6 lg:mb-8 text-primary font-bold text-xs lg:text-sm uppercase tracking-[0.3em] font-heading"
                        >
                            <span className="w-8 lg:w-12 h-[2px] bg-primary hidden md:block" />
                            Translating Your Imaginations
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] lg:leading-[0.9] text-slate-900 dark:text-white mb-4 lg:mb-6 font-heading uppercase tracking-tighter"
                        >
                            Mumbadevi <br />
                            <span className="text-primary">Industries</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed lg:border-l-4 border-primary lg:pl-8"
                        >
                            Premier <span className="text-slate-900 dark:text-white font-bold">Multi-Colour Offset Printing</span> & Precision Packaging Solutions since 2004.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 lg:gap-6"
                        >
                            <Button href="#products" className="h-14 lg:h-16 px-8 lg:px-10 rounded-xl text-base lg:text-lg shadow-2xl shadow-primary/20">
                                View Capabilities
                            </Button>
                            <Button href="#contact" variant="outline" className="h-14 lg:h-16 px-8 lg:px-10 rounded-xl text-base lg:text-lg">
                                Contact Experts
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={imageVariants}
                        className="relative mt-12 lg:mt-0"
                    >
                        <div className="relative z-10 rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border-4 lg:border-[12px] border-white dark:border-slate-800 aspect-[4/3] lg:aspect-[4/5]">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1682145481505-80614272c426?auto=format&fit=crop&q=80&w=1500"
                                alt="Industrial Offset Press"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s]"
                            />
                        </div>
                        <div className="absolute -bottom-6 lg:-bottom-10 -right-6 lg:-right-10 w-32 lg:w-64 h-32 lg:h-64 bg-primary/10 rounded-full blur-2xl lg:blur-3xl" />
                        <div className="absolute -top-6 lg:-top-10 -left-6 lg:-left-10 w-40 lg:w-80 h-40 lg:h-80 bg-primary/20 rounded-full blur-2xl lg:blur-3xl opacity-50" />
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
