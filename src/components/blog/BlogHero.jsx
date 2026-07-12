import React from 'react';
import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden border-b border-glass-border">
      <div className="absolute inset-0 z-0">
        <img 
          src="/himalayan_landscape.png" 
          alt="Blog Background" 
          className="w-full h-full object-cover opacity-20 filter grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 border border-gold text-gold font-bold text-xs tracking-[0.2em] uppercase bg-surface/30 backdrop-blur-md rounded-sm mb-6 shadow-xl shadow-gold/10">
            The Journal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-text-primary font-bold leading-tight mb-6"
        >
          Stories from the <br className="hidden md:block"/>
          <span className="text-gold italic font-black">Mountains.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-text-primary/70 text-lg max-w-2xl mx-auto font-medium"
        >
          Explore our latest thoughts on brewing, sustainability, and the outdoor lifestyle that fuels every bottle of BeerWiser.
        </motion.p>
      </div>
    </section>
  );
}
