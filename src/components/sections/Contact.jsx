import React, { useState } from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

const Contact = () => {
    const { t } = useAccessibility();

    return (
        <Section className="bg-bg-light dark:bg-dark-bg/50 transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4 text-primary font-bold text-sm uppercase tracking-widest w-full lg:w-auto">
                        <span className="hidden lg:block w-8 h-[2px] bg-primary" />
                        {t('contact.tagline')}
                        <span className="hidden lg:block w-8 h-[2px] bg-primary opacity-0" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 lg:mb-8 text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                        {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
                    </h2>

                    <div className="space-y-8 flex flex-col items-center lg:items-start max-w-sm mx-auto lg:mx-0">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-6 group text-center lg:text-left w-full">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <MapPin size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white font-heading">{t('contact.address')}</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    D-219, Bonanza industrial estate,<br />
                                    Kandivali (East), Mumbai 400 101
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 group text-center lg:text-left w-full">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Phone size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white font-heading">{t('contact.callUs')}</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium">+91-8169017209</p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 group text-center lg:text-left w-full">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Mail size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white font-heading">{t('contact.email')}</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium">mumbadeviind@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-[400px] lg:h-[550px] rounded-2xl lg:rounded-2xl overflow-hidden bg-white dark:bg-dark-card border-4 border-primary/20 shadow-2xl shadow-primary/10 hover:border-primary/40 transition-all duration-700 relative p-1 lg:p-2"
                >
                    <div className="w-full h-full rounded-2xl lg:rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2292.663713700389!2d72.85832861639466!3d19.20304516347058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b723e96ac631%3A0x8ea103f9f7248309!2sAkurli%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1773395707837!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                            title={t('contact.title')}
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
