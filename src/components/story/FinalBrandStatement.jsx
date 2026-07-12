import React from 'react';
import { motion } from 'framer-motion';

export default function FinalBrandStatement() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-surface/30 backdrop-blur-md border border-glass-border">
      
      {/* Minimal Mountain Silhouette Background */}
      <div className="absolute bottom-0 w-full h-[80%] opacity-10 pointer-events-none flex justify-center">
        <img 
          src="/snowy_mountains.png" 
          alt="Minimal Mountains" 
          className="w-full h-full object-cover grayscale contrast-200 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-text-primary mb-12">
            Every Bottle<br/>Tells a Story.
          </h2>
          
          <div className="text-xl md:text-3xl font-light text-text-primary/70 space-y-4 mb-16 italic">
            <p>A story of craftsmanship.</p>
            <p>A story of purity.</p>
            <p>A story of adventure.</p>
          </div>
          
          <div className="text-sm font-bold tracking-[0.3em] uppercase text-gold drop-shadow-sm">
            And we're only getting started.
          </div>
        </motion.div>
      </div>

    </section>
  );
}
