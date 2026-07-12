import React from 'react';
import { motion } from 'framer-motion';

export default function FindCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-primary to-white">
      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 w-full h-1/2 opacity-10 pointer-events-none flex justify-center">
        <img 
          src="/snowy_mountains.png" 
          alt="Mountains" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface/30 backdrop-blur-2xl border border-white p-12 md:p-20 rounded-3xl shadow-2xl shadow-gold/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
            Refreshment Is Closer Than You Think
          </h2>
          <p className="text-lg text-text-primary/70 mb-12">
            Find BeerWiser at restaurants, bars, and retailers near you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 hover:shadow-gold/40 font-bold text-xs uppercase tracking-widest hover:bg-transparent transition-colors duration-300 rounded-sm">
              Find Near You
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gold text-text-primary font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors duration-300 rounded-sm">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
