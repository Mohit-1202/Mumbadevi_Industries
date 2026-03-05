import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

const VisionCard = ({ title, content, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-dark-card p-12 rounded-3xl border border-slate-100 dark:border-primary/10 shadow-sm card-hover relative group overflow-hidden"
    >
        <div className="absolute top-0 left-0 w-2 h-0 bg-primary transition-all duration-500 group-hover:h-full" />
        <div className="w-16 h-16 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-white font-heading">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">
            {content}
        </p>
    </motion.div>
);

const VisionMission = () => {
    return (
        <Section id="vision" className="bg-bg-light dark:bg-dark-bg/50">
            <div className="text-center mb-20">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                    Purpose & Goals
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                    Vision <span className="text-primary">&</span> Mission
                </h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <VisionCard
                    title="The Vision"
                    content="To become a global benchmark in the printing industry, known for innovation, sustainability, and unmatched quality. We aspire to empower businesses with print solutions that leave a lasting impact on their brands."
                    icon={Target}
                />
                <VisionCard
                    title="The Mission"
                    content="Adopting cutting-edge technology for precision, maintaining strong ethical values in all dealings, and exceeding customer expectations through timely delivery and constant improvement in our craft."
                    icon={Compass}
                />
            </div>
        </Section>
    );
};

export default VisionMission;
