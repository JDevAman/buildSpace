import React from 'react';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollQuote from './components/ScrollQuote';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoadingProgress } from './hooks/useLoadingProgress';

function App() {
    const { progress, isLoaded, onModelReady } = useLoadingProgress();

    return (
        <div className="min-h-screen bg-black overflow-hidden relative">
            <Hero onReady={onModelReady} isVisible={isLoaded} />

            <AnimatePresence mode="wait">
                {!isLoaded && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-50"
                    >
                        <Loader progress={progress} />
                    </motion.div>
                )}
            </AnimatePresence>

            {isLoaded && (
                <motion.div
                    key="everything"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <Navbar />
                    <ScrollQuote />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
                </motion.div>
            )}
        </div>
    );
}

export default App;
