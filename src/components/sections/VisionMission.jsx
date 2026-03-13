import React from 'react';
import Section from '../ui/Section';
import Carousel from '../ui/Carousel';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

const VisionCard = ({ title, content, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-dark-card p-6 lg:p-8 rounded-xl border border-slate-100 dark:border-primary/10 shadow-sm card-hover relative group overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-left h-full"
    >
        <div className="absolute top-0 left-0 lg:w-2 lg:h-0 w-0 h-2 bg-primary transition-all duration-500 lg:group-hover:h-full lg:group-hover:w-2 group-hover:w-full group-hover:h-2" />
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
            <Icon size={24} lg:size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl lg:text-2xl font-black mb-3 lg:mb-4 text-slate-900 dark:text-white font-heading uppercase">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 font-medium text-base lg:text-lg leading-relaxed">
            {content}
        </p>
    </motion.div>
);

const VisionMission = () => {
    const { t } = useAccessibility();
    
    return (
        <Section className="bg-bg-light dark:bg-dark-bg/50 px-0 transition-colors duration-500">
            <div className="text-center mb-10 lg:mb-12 px-6">
                <div className="inline-block px-4 py-1.5 mb-3 lg:mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                    {t('vision.tagline')}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                    {t('vision.title')} <span className="text-primary">&</span> {t('vision.titleHighlight')}
                </h2>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-8 lg:gap-12 px-6 lg:px-0">
                <VisionCard
                    title={t('vision.visionTitle')}
                    content={t('vision.visionDesc')}
                    icon={Target}
                />
                <VisionCard
                    title={t('vision.missionTitle')}
                    content={t('vision.missionDesc')}
                    icon={Compass}
                />
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
                <Carousel>
                    <VisionCard
                        title={t('vision.visionTitle')}
                        content={t('vision.visionDesc')}
                        icon={Target}
                    />
                    <VisionCard
                        title={t('vision.missionTitle')}
                        content={t('vision.missionDesc')}
                        icon={Compass}
                    />
                </Carousel>
            </div>
        </Section>
    );
};

export default VisionMission;
