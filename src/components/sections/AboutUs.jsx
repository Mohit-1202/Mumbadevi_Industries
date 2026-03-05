import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <Section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold text-sm uppercase tracking-widest">
                    <span className="w-8 h-[2px] bg-primary" />
                    About Us
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 dark:text-white leading-tight font-heading">
                    Mumbadevi Industries <br />
                    <span className="text-primary/70">Company Profile</span>
                </h2>
                <div className="space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors hover:text-slate-900 dark:hover:text-slate-200">
                        Mumbadevi Industries is an impeccable name trusted for providing high-end quality print services. Built on a foundation of strong ethical values and modern technology, Mumbadevi Industries has been established as a premier name in the printing industry since 2004.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        Our commitment to excellence is reflected in every project we undertake. We translate imaginations into reality with a balance of advanced industrial craftsmanship and the speed of modern automation.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-12 mt-12 pt-12 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="group">
                        <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Since 2004</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-primary/60">Established Excellence</div>
                    </div>
                    <div className="group">
                        <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">ISO</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-primary/60">Quality Standards</div>
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
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group border-8 border-white dark:border-slate-800">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682145497679-e9340895df09?auto=format&fit=crop&q=80&w=1200"
                        alt="Typographer checking printing quality near the old press machine"
                        className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-[3s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-2xl hidden xl:block shadow-2xl shadow-primary/30 max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-3xl font-black mb-2 font-heading">Precision.</div>
                    <div className="text-sm font-bold opacity-80 uppercase tracking-widest">In Every Single Detail.</div>
                </div>
            </motion.div>
        </Section>
    );
};

export default AboutUs;
