import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
            Experience BeerWiser
          </h2>
          <p className="text-xl text-white/70 font-light mb-12">
            Discover our collection and find your perfect pour.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 hover:shadow-gold/40 font-bold text-xs uppercase tracking-[0.2em] hover:bg-surface/30 backdrop-blur-md border border-glass-border hover:text-text-primary transition-colors duration-300 rounded-sm">
              Explore Products
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-glass-border text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-surface/30 transition-colors duration-300 rounded-sm">
              Find Near You
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
