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
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold text-sm uppercase tracking-widest">
                        <span className="w-8 h-[2px] bg-primary" />
                        Contact Us
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <div className="space-y-12">
                        <div className="flex items-start gap-8 group">
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

                        <div className="flex items-start gap-8 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Phone size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white font-heading">Call Us</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium">+91 0000 000 000</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-8 group">
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
                    className="bg-white dark:bg-dark-card p-12 md:p-14 rounded-[3rem] border border-slate-100 dark:border-primary/10 shadow-2xl shadow-primary/5"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                rows="5"
                                required
                                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium resize-none"
                                placeholder="How can we help your business?"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-16 rounded-xl text-lg shadow-xl shadow-primary/20"
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
