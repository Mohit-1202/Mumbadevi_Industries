import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { useAccessibility } from '../../context/AccessibilityContext';

const AboutUs = () => {
    const { t } = useAccessibility();
    
    return (
        <Section className="bg-white dark:bg-dark-bg transition-colors duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4 text-primary font-bold text-sm uppercase tracking-widest w-full lg:w-auto">
                        <span className="hidden lg:block w-8 h-[2px] bg-primary" />
                        {t('about.tagline')}
                        <span className="hidden lg:block w-8 h-[2px] bg-primary opacity-0" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 lg:mb-6 text-slate-900 dark:text-white leading-tight font-heading uppercase">
                        {t('about.title')} <br />
                        <span className="text-primary/70">{t('about.titleHighlight')}</span>
                    </h2>
                    <div className="space-y-3 lg:space-y-4">
                        <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors hover:text-slate-900 dark:hover:text-slate-200">
                            {t('about.description1')}
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium hidden lg:block">
                            {t('about.description2')}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 justify-center lg:justify-start">
                        <div className="group">
                            <div className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">25+</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-primary/60">{t('about.years')}</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">5000+</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-primary/60">{t('about.units')}</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] lg:aspect-square lg:max-h-[60vh] rounded-2xl lg:rounded-2xl overflow-hidden shadow-2xl relative group border-4 lg:border-8 border-white dark:border-slate-800 mx-auto">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1682145497679-e9340895df09?auto=format&fit=crop&q=80&w=1200"
                            alt="Typographer checking printing quality near the old press machine"
                            className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 lg:p-8 rounded-2xl hidden xl:block shadow-2xl shadow-primary/30 max-w-[200px] transform group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-2xl font-black mb-1 font-heading">Precision.</div>
                        <div className="text-xs font-bold opacity-80 uppercase tracking-widest">In Every Single Detail.</div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default AboutUs;
