import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollQuote() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="relative overflow-hidden py-8 px-4 sm:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="relative overflow-hidden">
                <motion.div
                    className="text-center"
                    style={{
                        x: scrollY * 0.2,
                    }}
                >
                    <span className="italic block text-red-400 font-orbitron text-sm sm:text-lg tracking-wide max-w-full break-words">
                        "Only those who abandon everything can achieve freedom" — Scout Regiment ⚔️
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
}
