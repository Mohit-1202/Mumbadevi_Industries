import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Layers, Settings, Boxes, CheckCircle2 } from 'lucide-react';
import Carousel from '../ui/Carousel';

const InfraBlock = ({ title, items, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-white dark:bg-dark-card p-8 lg:p-12 rounded-3xl border border-slate-100 dark:border-primary/10 shadow-sm group hover:shadow-xl transition-all duration-500 flex flex-col items-center lg:items-start text-center lg:text-left"
    >
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-8 lg:mb-10 w-full justify-center lg:justify-start">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Icon size={24} lg:size={28} strokeWidth={1.5} />
            </div>
            <h4 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white font-heading">{title}</h4>
        </div>

        <div className="space-y-5 w-full">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-center lg:items-start justify-center lg:justify-start gap-4 text-slate-600 dark:text-slate-400 font-bold group/item">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0 group-hover/item:scale-125 transition-transform" />
                    <span className="text-base border-b border-transparent group-hover/item:border-primary/20 transition-all">{item}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Infrastructure = () => {
    return (
        <Section id="infrastructure" className="bg-bg-light dark:bg-dark-bg/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 lg:mb-20 px-6">
                    <div className="inline-block px-4 py-1.5 mb-4 lg:mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        State-of-the-Art
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                        Our <span className="text-primary">Infrastructure</span>
                    </h2>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-3 gap-10">
                    <InfraBlock
                        title="Prepress"
                        icon={Layers}
                        delay={0.1}
                        items={[
                            "Direct Multi Platforms (Mac & Windows)",
                            "CTP System with Online Processor",
                            "Advanced Color Profiling Software",
                            "High-Speed Output Hardware"
                        ]}
                    />
                    <InfraBlock
                        title="Pressroom"
                        icon={Settings}
                        delay={0.2}
                        items={[
                            "Komori Enthrone Offset Press",
                            "Komori Lithrone High-Precision Press",
                            "Multi-Color Printing Capability",
                            "Automated Ink Control Systems"
                        ]}
                    />
                    <InfraBlock
                        title="Post Press"
                        icon={Boxes}
                        delay={0.3}
                        items={[
                            "Fully Automatic Binding Line",
                            "Precision Cutting & Die-Punching",
                            "Luxury Finishing Units",
                            "Quality Control Inspection Hub"
                        ]}
                    />
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <Carousel>
                        <InfraBlock
                            title="Prepress"
                            icon={Layers}
                            delay={0.1}
                            items={[
                                "Direct Multi Platforms",
                                "CTP System",
                                "Color Profiling"
                            ]}
                        />
                        <InfraBlock
                            title="Pressroom"
                            icon={Settings}
                            delay={0.2}
                            items={[
                                "Komori Offset Press",
                                "Lithrone Press",
                                "Ink Control"
                            ]}
                        />
                        <InfraBlock
                            title="Post Press"
                            icon={Boxes}
                            delay={0.3}
                            items={[
                                "Binding Line",
                                "Precision Cutting",
                                "Finishing Units"
                            ]}
                        />
                    </Carousel>
                </div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    className="mt-12 lg:mt-24 rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 relative group h-[300px] lg:h-[500px]"
                >
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682144342211-7393282b9921?auto=format&fit=crop&q=80&w=2000"
                        alt="Advanced Printing Infrastructure"
                        className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-[4s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 lg:from-primary/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 lg:bottom-16 left-6 lg:left-16 right-6 lg:right-16 text-center lg:text-left">
                        <div className="text-white text-2xl lg:text-4xl font-black font-heading max-w-xl leading-tight uppercase tracking-tight mx-auto lg:mx-0">
                            Engineering Excellence <br />
                            <span className="text-white/70">At Every Impression</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Infrastructure;
