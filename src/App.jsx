import React from 'react';
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
  <div
    className="sticky top-0 w-full min-h-screen bg-[var(--background)] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-t-[3rem] overflow-hidden border-t border-slate-200/50 dark:border-white/5"
    style={{ zIndex }}
  >
    {children}
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white bg-[var(--background)] transition-colors duration-500">
      <Navbar />
      <main className="relative z-10">
        <div className="relative z-[5]">
          <Hero />
        </div>
        <StackingSection zIndex={10}>
          <AboutUs />
        </StackingSection>
        <StackingSection zIndex={11}>
          <VisionMission />
        </StackingSection>
        <StackingSection zIndex={12}>
          <Products />
        </StackingSection>
        <StackingSection zIndex={13}>
          <Infrastructure />
        </StackingSection>
        <StackingSection zIndex={14}>
          <Clientele />
        </StackingSection>
        <StackingSection zIndex={15}>
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
