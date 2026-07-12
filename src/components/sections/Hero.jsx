import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24" id="hero">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center z-10 pointer-events-auto">
          <div className="bg-surface/30 backdrop-blur-2xl border border-glass-border rounded-3xl p-10 md:p-14 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden">
            {/* Subtle inner reflection */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-highlight/30 to-transparent"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 border-2 border-gold text-gold drop-shadow-sm font-bold text-xs tracking-[0.2em] uppercase bg-surface/30 backdrop-blur-sm rounded-sm">
              Premium Quality
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary drop-shadow-sm font-bold leading-[1.1] mb-6 uppercase"
          >
            Crafted <br/>
            To Refresh.<br/>
            <span className="text-gold">Made To<br/>Be Remembered.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-primary/80 text-lg md:text-xl max-w-md font-semibold leading-relaxed mb-10"
          >
            Brewed with the finest ingredients and a passion for quality. Experience the taste of true craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 hover:shadow-gold/40 font-bold tracking-widest text-sm uppercase transition-all duration-500 rounded-sm shadow-xl flex items-center gap-2">
              Discover Our Beers <span className="text-lg">&rarr;</span>
            </button>
            <button className="px-8 py-4 border border-gold/50 text-gold drop-shadow-sm font-bold tracking-widest text-sm uppercase hover:bg-gold hover:text-black transition-all duration-500 rounded-sm flex items-center gap-2">
              <span className="text-lg">&#9654;</span> Watch Video
            </button>
          </motion.div>
          </div>
        </div>

        {/* Right Side - Empty space for 3D Canvas which sits behind */}
        <div className="hidden lg:block"></div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase text-text-primary/80 mb-4">Scroll</span>
        <div className="w-[2px] h-12 bg-black/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-secondary absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
