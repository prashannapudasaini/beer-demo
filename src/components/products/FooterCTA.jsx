import React from 'react';
import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-transparent flex items-center justify-center">
      
      {/* Giant floating bottle in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] opacity-20 pointer-events-none flex justify-center mix-blend-screen">
        <motion.img 
          src="/beer_bottle_seven.png" 
          alt="Frosted Bottle" 
          animate={{ y: [0, -30, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-auto object-contain blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Ready for Your Next Refreshing Experience?
          </h2>
          <p className="text-xl text-white/70 mb-12 font-light">
            Experience the taste of mountain-crafted perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 hover:shadow-gold/40 font-bold text-sm uppercase tracking-widest hover:bg-surface/30 backdrop-blur-md border border-glass-border hover:text-text-primary transition-colors duration-300 rounded-sm">
              Explore More Products
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-glass-border text-white font-bold text-sm uppercase tracking-widest hover:border-white hover:bg-surface/30 transition-colors duration-300 rounded-sm">
              Find a Retailer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
