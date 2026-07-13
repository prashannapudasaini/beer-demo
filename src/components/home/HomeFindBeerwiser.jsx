import React from 'react';
import { motion } from 'framer-motion';

export default function HomeFindBeerwiser() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-40 relative overflow-hidden border-y border-glass-border"
    >
      {/* Water Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          src="/mountain_spring.png" 
          alt="Water Background" 
          className="w-full h-full object-cover filter brightness-50"
        />
        {/* Strong Watery Blur Overlay */}
        <div className="absolute inset-0 bg-surface/20 backdrop-blur-[40px] mix-blend-hard-light"></div>
        {/* Seamless Blend Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>


      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface/10 backdrop-blur-2xl border border-glass-border/50 rounded-3xl p-12 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Inner glass reflection */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Find <span className="text-gold italic">Refreshment</span> <br/>Near You
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto font-medium drop-shadow-sm">
            Whether you're at a local bar, restaurant, or retailer, BeerWiser is never far away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 hover:brightness-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm">
              Find a Store
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-gold text-gold font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 rounded-sm">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
