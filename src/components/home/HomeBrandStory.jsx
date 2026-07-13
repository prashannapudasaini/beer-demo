import React from 'react';
import { motion } from 'framer-motion';

export default function HomeBrandStory() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[90vh] bg-transparent overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 w-full h-full lg:w-1/2 z-0">
        {/* Left side is solid accent color */}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 relative z-10">
        
        {/* Left: Typography */}
        <div className="flex flex-col justify-center py-24 lg:py-0 pr-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Born Above <br/><span className="text-gold drop-shadow-sm italic">Ordinary.</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg max-w-lg">
              <p>
                BeerWiser is inspired by the purity of mountain air and the thrill of adventure.
              </p>
              <p>
                Using carefully selected ingredients and crystal-clear spring water, we craft beers that deliver exceptional refreshment and unforgettable experiences.
              </p>
              <p className="font-bold text-white">
                Every bottle captures the spirit of exploration, freedom, and craftsmanship.
              </p>
            </div>
            
            <button className="mt-12 px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 hover:shadow-gold/40 font-bold text-xs uppercase tracking-widest hover:bg-surface/30 backdrop-blur-md border border-glass-border hover:text-text-primary transition-colors duration-300 rounded-sm">
              Discover Our Story
            </button>
          </motion.div>
        </div>

        {/* Right: Parallax Imagery */}
        <div className="relative h-[600px] lg:h-[800px] w-full hidden lg:block overflow-hidden rounded-l-3xl shadow-2xl">
          <div className="absolute -inset-10">
            <img 
              src="/beer_action.png" 
              alt="Beer Pouring"
              className="w-full h-full object-cover filter brightness-75"
            />
          </div>

        </div>

      </div>
    </motion.section>
  );
}
