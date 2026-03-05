import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Section = ({
    children,
    className,
    id
}) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("section-padding max-w-7xl mx-auto", className)}
        >
            {children}
        </motion.section>
    );
};

export default Section;
