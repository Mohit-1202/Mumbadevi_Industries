import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Button = ({
    children,
    variant = 'primary',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm border border-primary/20',
        secondary: 'bg-white dark:bg-white/5 border border-primary/20 text-primary hover:bg-primary/5',
        outline: 'border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'px-8 py-3.5 rounded-lg font-bold transition-all duration-300 tracking-wide text-sm inline-flex items-center justify-center gap-2',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
