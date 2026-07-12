import React from 'react';
import { motion } from 'framer-motion';

export default function SustainabilityCTA() {
  return (
    <section className="relative py-40 z-10 overflow-hidden flex items-center justify-center border-t border-glass-border">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/snowy_mountains.png" 
          alt="Sunset Silhouette" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay filter sepia-[0.3] hue-rotate-[-30deg]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif font-bold text-text-primary mb-6"
        >
          Brewing a <br/>
          <span className="text-gold italic">Better Tomorrow.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-primary/80 max-w-2xl mx-auto mb-12 font-medium"
        >
          Every bottle represents our commitment to quality, responsibility, and the future of our planet.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-background shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 font-bold tracking-widest text-xs uppercase rounded-sm transition-all duration-300">
            Explore Our Beers
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-surface/30 backdrop-blur-md border border-gold text-gold hover:bg-gold hover:text-background font-bold tracking-widest text-xs uppercase rounded-sm transition-all duration-300 shadow-xl">
            Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
