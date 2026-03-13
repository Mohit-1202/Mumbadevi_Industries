import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../ui/Section';
import { useAccessibility } from '../../context/AccessibilityContext';

const Hero = () => {
    const { t } = useAccessibility();
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
        <Section className="lg:h-screen h-fit min-h-screen flex items-center justify-center p-0 pt-32 lg:pt-0 overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-500" showBackdrop={true}>
            <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10 w-full">
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
                            {t('hero.tagline')}
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] lg:leading-[0.9] text-slate-900 dark:text-white mb-4 lg:mb-6 font-heading uppercase tracking-tighter"
                        >
                            {t('hero.title')}<br />
                            <span className="text-primary">{t('hero.titleHighlight')}</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed lg:border-l-4 border-primary lg:pl-8"
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 lg:gap-6"
                        >
                            <Button 
                                href="#products" 
                                onClick={(e) => scrollToSection(e, '#products', 3)}
                                className="h-14 lg:h-16 px-8 lg:px-10 rounded-xl text-base lg:text-lg shadow-2xl shadow-primary/20"
                            >
                                {t('hero.cta')}
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={imageVariants}
                        className="relative mt-8 lg:mt-0"
                    >
                        <div className="aspect-[4/5] lg:aspect-square lg:max-h-[60vh] rounded-2xl lg:rounded-2xl overflow-hidden shadow-2xl relative group border-4 lg:border-8 border-white dark:border-slate-800 mx-auto w-full">
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
