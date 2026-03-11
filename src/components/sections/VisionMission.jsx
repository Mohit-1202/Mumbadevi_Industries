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
        className="bg-white dark:bg-dark-card p-8 lg:p-12 rounded-3xl border border-slate-100 dark:border-primary/10 shadow-sm card-hover relative group overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-left"
    >
        <div className="absolute top-0 left-0 lg:w-2 lg:h-0 w-0 h-2 bg-primary transition-all duration-500 lg:group-hover:h-full lg:group-hover:w-2 group-hover:w-full group-hover:h-2" />
        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center mb-8 lg:mb-10 group-hover:scale-110 transition-transform duration-500">
            <Icon size={28} lg:size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl lg:text-3xl font-black mb-4 lg:mb-6 text-slate-900 dark:text-white font-heading uppercase">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">
            {content}
        </p>
    </motion.div>
);

const VisionMission = () => {
    return (
        <Section id="vision" className="bg-bg-light dark:bg-dark-bg/50">
            <div className="text-center mb-12 lg:mb-20">
                <div className="inline-block px-4 py-1.5 mb-4 lg:mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                    Purpose & Goals
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
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
