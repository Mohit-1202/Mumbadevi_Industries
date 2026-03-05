import React, { useRef } from 'react';
import Section from '../ui/Section';
import { motion, useInView } from 'framer-motion';

const StatBar = ({ label, value, color, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-card p-10 rounded-[2.5rem] border border-slate-100 dark:border-primary/10 shadow-sm flex flex-col items-center text-center group card-hover"
        >
            <div className="relative w-32 h-32 mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r="54"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-50 dark:text-slate-800/50"
                    />
                    <motion.circle
                        cx="64"
                        cy="64"
                        r="54"
                        stroke="#0B74B8"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray="339.29"
                        initial={{ strokeDashoffset: 339.29 }}
                        animate={isInView ? { strokeDashoffset: 339.29 - (339.29 * value) / 100 } : {}}
                        transition={{ duration: 2, ease: "circOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-black text-2xl text-slate-900 dark:text-white font-heading">
                    {value}%
                </div>
            </div>
            <h4 className="text-sm font-black uppercase tracking-widest text-primary/60 font-heading mb-2">{label}</h4>
            <div className="w-8 h-1 bg-primary/20 rounded-full group-hover:w-16 transition-all duration-500" />
        </motion.div>
    );
};

const Clientele = () => {
    const sectors = [
        { label: "Hospitality", value: 30 },
        { label: "Infrastructure", value: 26 },
        { label: "FMCG", value: 20 },
        { label: "Pharmaceutical", value: 14 },
        { label: "Others", value: 10 }
    ];

    return (
        <Section id="clients">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 px-6">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        Market Presence
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                        Sector Wise <span className="text-primary">Impact</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {sectors.map((sector, idx) => (
                        <StatBar key={idx} {...sector} index={idx} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Clientele;
