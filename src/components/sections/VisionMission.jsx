import React from 'react';
import Section from '../ui/Section';
import Carousel from '../ui/Carousel';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

const VisionCard = ({ title, content, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-dark-card p-6 lg:p-8 rounded-2xl border border-slate-100 dark:border-primary/10 shadow-sm card-hover relative group overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-left h-full"
    >
        <div className="absolute top-0 left-0 lg:w-2 lg:h-0 w-0 h-2 bg-primary transition-all duration-500 lg:group-hover:h-full lg:group-hover:w-2 group-hover:w-full group-hover:h-2" />
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
            <Icon size={24} lg:size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl lg:text-2xl font-black mb-3 lg:mb-4 text-slate-900 dark:text-white font-heading uppercase">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 font-medium text-base lg:text-lg leading-relaxed">
            {content}
        </p>
    </motion.div>
);

const VisionMission = () => {
    return (
        <Section id="vision" className="bg-bg-light dark:bg-dark-bg/50 px-0">
            <div className="text-center mb-10 lg:mb-12 px-6">
                <div className="inline-block px-4 py-1.5 mb-3 lg:mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                    Purpose & Goals
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                    Vision <span className="text-primary">&</span> Mission
                </h2>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-8 lg:gap-12 px-6 lg:px-0">
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

            {/* Mobile Carousel */}
            <div className="md:hidden">
                <Carousel>
                    <VisionCard
                        title="The Vision"
                        content="To become a global benchmark in the printing industry, known for innovation, sustainability, and unmatched quality."
                        icon={Target}
                    />
                    <VisionCard
                        title="The Mission"
                        content="Adopting cutting-edge technology for precision, maintaining strong ethical values, and exceeding customer expectations."
                        icon={Compass}
                    />
                </Carousel>
            </div>
        </Section>
    );
};

export default VisionMission;
