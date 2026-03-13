import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import VisionMission from './components/sections/VisionMission';
import Products from './components/sections/Products';
import Infrastructure from './components/sections/Infrastructure';
import Clientele from './components/sections/Clientele';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const StackingSection = ({ children, zIndex }) => (
  <motion.div
    style={{ zIndex }}
    className="relative lg:sticky lg:top-0 w-full lg:h-screen bg-[var(--background)] lg:shadow-[0_-20px_50px_rgba(0,0,0,0.15)] lg:dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] lg:rounded-t-[3rem] lg:overflow-hidden lg:border-t lg:border-slate-200/50 lg:dark:border-white/5"
  >
    <div className="w-full h-full">
      {children}
    </div>
  </motion.div>
);

function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white bg-[var(--background)] transition-colors duration-500">
      <Navbar />
      <main className="relative z-10">
        <StackingSection zIndex={1}>
          <Hero />
        </StackingSection>
        <StackingSection zIndex={2}>
          <AboutUs />
        </StackingSection>
        <StackingSection zIndex={3}>
          <VisionMission />
        </StackingSection>
        <StackingSection zIndex={4}>
          <Products />
        </StackingSection>
        <StackingSection zIndex={5}>
          <Infrastructure />
        </StackingSection>
        <StackingSection zIndex={6}>
          <Clientele />
        </StackingSection>
        <StackingSection zIndex={7}>
          <Contact />
        </StackingSection>
      </main>
      <div className="relative z-[20] bg-[var(--background)]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
