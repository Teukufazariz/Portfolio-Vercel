import { useState } from "react";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications"; 
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [isCustomBackground, setIsCustomBackground] = useState(false);

  const toggleBackground = () => {
    setIsCustomBackground((prev) => !prev);
  };

  return ( 
    <div className={`font-helvetica overflow-x-hidden antialiased selection:bg-cream selection:text-cyan-900 relative transition-colors duration-500 ${isCustomBackground ? 'text-black' : 'text-neutral-300'}`}>
      <AnimatePresence>
        {!isCustomBackground && (
          <motion.div
            key="default-bg"
            className="fixed top-0 -z-10 h-full w-full bg-slate-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        {isCustomBackground && (
          <motion.div
            key="custom-bg"
            className="fixed top-0 -z-10 h-full w-full bg-custom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-8 relative z-10">
        {/* <Navbar /> */}
        <Greeting toggleBackground={toggleBackground} isCustomBackground={isCustomBackground} />
        <Hero isCustomBackground={isCustomBackground} />
        <About isCustomBackground={isCustomBackground} />
        <Projects isCustomBackground={isCustomBackground} />
        <Experience isCustomBackground={isCustomBackground} />
        <Certifications isCustomBackground={isCustomBackground} />
        <Contact isCustomBackground={isCustomBackground} />
      </div>
    </div>
  );
};

export default App;