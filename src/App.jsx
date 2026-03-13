import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from './utils/cn';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import VisionMission from './components/sections/VisionMission';
import Products from './components/sections/Products';
import Infrastructure from './components/sections/Infrastructure';
import Clientele from './components/sections/Clientele';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const StackingSection = ({ children, zIndex, id }) => (
  <motion.div
    id={id}
    className={cn(
        "relative w-full h-fit flex flex-col bg-white dark:bg-dark-bg transition-colors duration-500",
        // Only apply sticky stacking on desktop
        "lg:sticky lg:top-0 lg:h-screen lg:rounded-t-[3rem] lg:overflow-hidden lg:border-t lg:border-slate-200/50 lg:dark:border-white/5 lg:shadow-[0_-20px_50px_rgba(0,0,0,0.15)] lg:dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] scroll-mt-20 lg:scroll-mt-0"
    )}
    style={{ zIndex: window.innerWidth >= 1024 ? zIndex : 1 }}
  >
    <div className="w-full h-full">
      {children}
    </div>
  </motion.div>
);

function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white bg-[var(--background)] transition-colors duration-500">
      <main className="relative z-10">
        <StackingSection zIndex={1} id="home">
          <Hero />
        </StackingSection>
        <StackingSection zIndex={2} id="about">
          <AboutUs />
        </StackingSection>
        <StackingSection zIndex={3} id="vision">
          <VisionMission />
        </StackingSection>
        <StackingSection zIndex={4} id="products">
          <Products />
        </StackingSection>
        <StackingSection zIndex={5} id="infrastructure">
          <Infrastructure />
        </StackingSection>
        <StackingSection zIndex={6} id="clients">
          <Clientele />
        </StackingSection>
        <StackingSection zIndex={7} id="contact">
          <Contact />
        </StackingSection>
      </main>
      <div className="relative z-[20] bg-[var(--background)]">
        <Footer />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
