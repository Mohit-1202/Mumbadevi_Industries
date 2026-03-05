import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Printer, Layout, Package, Check } from 'lucide-react';

const ProductCard = ({ title, description, details, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-card rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-primary/10 shadow-sm card-hover flex flex-col h-full group"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white font-heading">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed italic text-base">
                    {description}
                </p>
                <div className="mt-auto space-y-3">
                    {details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {detail}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Products = () => {
    return (
        <Section id="products">
            <div className="text-center mb-24 px-6">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                    Industrial Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                    Precision <span className="text-primary">Print Units</span>
                </h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <ProductCard
                    index={0}
                    title="Commercial Printing"
                    description="High-fidelity bulk printing for corporate and marketing excellence."
                    details={["Books", "Brochures", "Catalogues", "Calendars", "Posters", "POP Material", "Stationery"]}
                    image="https://plus.unsplash.com/premium_photo-1682145481505-80614272c426?auto=format&fit=crop&q=80&w=1000"
                />
                <ProductCard
                    index={1}
                    title="Digital Printing"
                    description="Variable data and short-run excellence with high speed."
                    details={["Manuals", "Certificates", "Custom Calendars", "Invitation Cards", "Vinyl Displays"]}
                    image="https://plus.unsplash.com/premium_photo-1663047874619-f4c0272910a4?auto=format&fit=crop&q=80&w=1000"
                />
                <ProductCard
                    index={2}
                    title="Packaging"
                    description="Structural engineering and luxurious finishing for product shelf appeal."
                    details={["Folding Cartons", "Self Adhesive Labels", "Gift Packs", "Blister Packaging"]}
                    image="https://plus.unsplash.com/premium_photo-1764703497365-936ad6b594f1?auto=format&fit=crop&q=80&w=1000"
                />
            </div>
        </Section>
    );
};

export default Products;
