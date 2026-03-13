import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Section = ({
    children,
    className,
    id,
    showBackdrop = true
}) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("relative lg:h-screen h-fit flex items-center justify-center overflow-hidden scroll-mt-20 lg:scroll-mt-0", className)}
        >
            {showBackdrop && (
                <div className="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.03] pointer-events-none">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682147377676-f33fa2cc20eb?auto=format&fit=crop&q=80&w=2000"
                        alt=""
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
            )}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-16">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
