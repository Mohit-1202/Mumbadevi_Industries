import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Printer, Layout, Package, Check } from 'lucide-react';
import Carousel from '../ui/Carousel';

const Ticker = ({ items }) => {
    return (
        <div className="overflow-hidden relative w-full py-3 bg-slate-50 dark:bg-primary/5 rounded-xl border border-slate-100 dark:border-primary/10">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity
                }}
                className="flex whitespace-nowrap gap-8 w-fit px-4"
            >
                {[...items, ...items, ...items, ...items].map((item, idx) => (
                    <span key={idx} className="text-xs lg:text-sm font-black uppercase tracking-widest text-primary flex items-center gap-3">
                        <Check size={14} strokeWidth={3} />
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const ProductCard = ({ title, description, details, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-card rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-primary/10 shadow-sm card-hover flex flex-col h-full group"
        >
            <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-8 lg:p-12 flex flex-col flex-grow text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-black mb-4 text-slate-900 dark:text-white font-heading uppercase">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed italic text-base lg:text-lg">
                    {description}
                </p>
                <div className="mt-auto">
                    <Ticker items={details} />
                </div>
            </div>
        </motion.div>
    );
};

const Products = () => {
    return (
        <Section id="products">
            <div className="text-center mb-12 lg:mb-24 px-6">
                <div className="inline-block px-4 py-1.5 mb-4 lg:mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                    Industrial Capabilities
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-heading uppercase tracking-tight">
                    Precision <span className="text-primary">Print Units</span>
                </h2>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-3 gap-10">
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

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <Carousel>
                        <ProductCard
                            index={0}
                            title="Commercial Printing"
                            description="High-fidelity bulk printing."
                            details={["Books", "Brochures", "Catalogues"]}
                            image="https://plus.unsplash.com/premium_photo-1682145481505-80614272c426?auto=format&fit=crop&q=80&w=1000"
                        />
                        <ProductCard
                            index={1}
                            title="Digital Printing"
                            description="Variable data excellence."
                            details={["Manuals", "Certificates", "Vinyl"]}
                            image="https://plus.unsplash.com/premium_photo-1663047874619-f4c0272910a4?auto=format&fit=crop&q=80&w=1000"
                        />
                        <ProductCard
                            index={2}
                            title="Packaging"
                            description="Structural engineering."
                            details={["Cartons", "Labels", "Blister"]}
                            image="https://plus.unsplash.com/premium_photo-1764703497365-936ad6b594f1?auto=format&fit=crop&q=80&w=1000"
                        />
                    </Carousel>
                </div>
            </div>
        </Section>
    );
};

export default Products;
