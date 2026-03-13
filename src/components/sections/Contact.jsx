import React, { useState } from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('loading');
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <Section id="contact" className="bg-bg-light dark:bg-dark-bg/50">
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
                        Contact Us
                        <span className="hidden lg:block w-8 h-[2px] bg-primary opacity-0" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 lg:mb-8 text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <div className="space-y-8 flex flex-col items-center lg:items-start max-w-sm mx-auto lg:mx-0">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-6 group text-center lg:text-left w-full">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <MapPin size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white font-heading">Physical Hub</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    Mumbadevi Industries,<br />
                                    Mumbai, Maharashtra, India.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 group text-center lg:text-left w-full">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Phone size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white font-heading">Call Us</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium">+91 0000 000 000</p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 group text-center lg:text-left w-full">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Mail size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white font-heading">Email Enquiries</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium">info@mumbadevi.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white dark:bg-dark-card p-6 lg:p-10 rounded-2xl lg:rounded-[3rem] border border-slate-100 dark:border-primary/10 shadow-2xl shadow-primary/5"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                                    placeholder="email@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                            <textarea
                                rows="3"
                                required
                                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-3 lg:p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium resize-none"
                                placeholder="How can we help your business?"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-14 lg:h-16 rounded-xl text-lg shadow-xl shadow-primary/20"
                            disabled={formState !== 'idle'}
                        >
                            {formState === 'idle' && "Send Proposal"}
                            {formState === 'loading' && "Processing..."}
                            {formState === 'success' && "Sent Successfully!"}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
