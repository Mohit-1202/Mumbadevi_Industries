import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

const Carousel = ({ children, className, autoPlayInterval = 4000 }) => {
    const containerRef = useRef(null);
    const innerRef = useRef(null);
    const [constraints, setConstraints] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const x = useMotionValue(0);

    const scrollToIndex = useCallback((index) => {
        if (!innerRef.current || !containerRef.current) return;
        const cards = innerRef.current.children;
        if (cards[index]) {
            const containerWidth = containerRef.current.offsetWidth;
            const cardWidth = cards[index].offsetWidth;
            const offsetLeft = cards[index].offsetLeft;
            
            // With px-[7.5vw] padding, card is centered when targetX = (containerWidth - cardWidth) / 2 - offsetLeft
            // For card 0: offset = (100vw - 85vw) / 2 = 7.5vw. targetX = 7.5vw - 7.5vw = 0.
            const targetX = (containerWidth - cardWidth) / 2 - offsetLeft;
            
            animate(x, Math.max(constraints, Math.min(0, targetX)), {
                type: "spring",
                stiffness: 300,
                damping: 30
            });
        }
    }, [constraints, x]);

    useEffect(() => {
        const updateConstraints = () => {
            if (containerRef.current && innerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const innerWidth = innerRef.current.scrollWidth;
                // Add some buffer to constraints
                setConstraints(containerWidth - innerWidth);
            }
        };

        updateConstraints();
        const timer = setTimeout(updateConstraints, 500); // Wait for content render
        window.addEventListener('resize', updateConstraints);
        return () => {
            window.removeEventListener('resize', updateConstraints);
            clearTimeout(timer);
        };
    }, [children]);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % React.Children.count(children);
            setActiveIndex(nextIndex);
            scrollToIndex(nextIndex);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [activeIndex, children, autoPlayInterval, isPaused, scrollToIndex]);

    const handleDragEnd = (event, info) => {
        setIsPaused(true);
        const threshold = 50;
        const velocity = info.velocity.x;
        const offset = info.offset.x;

        if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
            const direction = velocity > 0 || offset > 0 ? -1 : 1;
            const newIndex = Math.max(0, Math.min(React.Children.count(children) - 1, activeIndex + direction));
            setActiveIndex(newIndex);
            scrollToIndex(newIndex);
        } else {
            scrollToIndex(activeIndex);
        }
        
        setTimeout(() => setIsPaused(false), 10000);
    };

    return (
        <div className={`w-full overflow-hidden ${className}`} ref={containerRef}>
            <motion.div
                drag="x"
                dragConstraints={{ left: constraints, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={handleDragEnd}
                style={{ x }}
                className="flex gap-6 px-[7.5vw] cursor-grab active:cursor-grabbing"
                ref={innerRef}
            >
                {React.Children.map(children, (child) => (
                    <div className="w-[85vw] shrink-0">
                        {child}
                    </div>
                ))}
            </motion.div>
            <div className="flex justify-center items-center gap-2 mt-8">
                {React.Children.map(children, (_, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => {
                            setIsPaused(true);
                            setActiveIndex(idx);
                            scrollToIndex(idx);
                            setTimeout(() => setIsPaused(false), 10000);
                        }}
                        initial={false}
                        animate={{
                            width: activeIndex === idx ? 24 : 6,
                            height: 6,
                            backgroundColor: activeIndex === idx 
                                ? "var(--primary)" 
                                : "rgba(var(--primary-rgb), 0.2)",
                            opacity: activeIndex === idx ? 1 : 0.4
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        className="rounded-full cursor-pointer hover:bg-primary/40 transition-colors"
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
