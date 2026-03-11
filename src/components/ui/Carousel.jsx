import React from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ children, className }) => {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <motion.div
                drag="x"
                dragConstraints={{ left: -1200, right: 0 }} // Increased for 3 cards
                dragElastic={0.1}
                className="flex gap-4 sm:gap-6 px-6 cursor-grab active:cursor-grabbing"
                style={{ width: 'max-content' }}
            >
                {React.Children.map(children, (child) => (
                    <div className="w-[75vw] sm:w-[45vw] shrink-0">
                        {child}
                    </div>
                ))}
            </motion.div>
            <div className="flex justify-center gap-2 mt-8">
                {React.Children.map(children, (_, idx) => (
                    <div key={idx} className="w-2 h-2 rounded-full bg-primary/20" />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
