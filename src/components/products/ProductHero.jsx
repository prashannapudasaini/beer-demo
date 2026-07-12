import React from 'react';
import { motion } from 'framer-motion';

export default function ProductHero() {
  return (
    <section className="relative min-h-screen bg-transparent pt-32 pb-20 overflow-hidden flex items-center">
      
      {/* Ambient background particles/glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-surface/30 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Product Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 border border-gold text-gold drop-shadow-sm text-xs font-bold tracking-[0.2em] uppercase rounded-sm mb-8">
            Premium Mountain Brewed
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-text-primary mb-6 leading-none">
            Mountain<br/>Lager
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-text-primary/70 mb-8 italic">
            Cold. Crisp. Exceptionally Refreshing.
          </h2>
          
          <p className="text-text-primary/80 text-lg max-w-lg mb-12 leading-relaxed font-medium">
            Crafted with pure mountain spring water and premium ingredients, Mountain Lager delivers a clean, balanced taste with a smooth finish that keeps you coming back for more.
          </p>
          
          {/* Product Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 border-y border-gold/10 py-6">
            <div>
              <div className="text-xs text-text-primary/70 tracking-widest uppercase mb-1">Alcohol</div>
              <div className="text-lg font-bold text-text-primary">5.0%</div>
            </div>
            <div>
              <div className="text-xs text-text-primary/70 tracking-widest uppercase mb-1">Style</div>
              <div className="text-lg font-bold text-text-primary">Lager</div>
            </div>
            <div>
              <div className="text-xs text-text-primary/70 tracking-widest uppercase mb-1">IBU</div>
              <div className="text-lg font-bold text-text-primary">18</div>
            </div>
            <div>
              <div className="text-xs text-text-primary/70 tracking-widest uppercase mb-1">Volume</div>
              <div className="text-sm font-bold text-text-primary leading-tight">330ml<br/>500ml / 650ml</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 hover:shadow-gold/40 font-bold text-xs uppercase tracking-widest hover:bg-transparent transition-colors duration-300 rounded-sm shadow-xl shadow-secondary/20">
              Explore Ingredients
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gold text-text-primary font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors duration-300 rounded-sm">
              Find Near You
            </button>
          </div>
        </motion.div>

        {/* Right: Floating 3D Bottle Render */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-[60vh] lg:h-[85vh] flex items-center justify-center"
        >
          {/* Soft shadow beneath bottle */}
          <div className="absolute bottom-10 w-48 h-8 bg-black/20 blur-xl rounded-[100%]"></div>
          
          <motion.img 
            src="/beer_bottle_one.png" 
            alt="Mountain Lager Bottle" 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-auto object-contain filter drop-shadow-2xl relative z-10 scale-110"
          />
        </motion.div>

      </div>
    </section>
  );
}
