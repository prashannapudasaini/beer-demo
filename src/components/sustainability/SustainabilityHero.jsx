import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SustainabilityHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/himalayan_landscape.png" 
          alt="Himalayan Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 border border-gold text-gold font-bold text-xs tracking-[0.2em] uppercase bg-surface/30 backdrop-blur-md rounded-sm mb-6 shadow-xl shadow-gold/10">
            Sustainability
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-primary font-bold leading-tight mb-6"
        >
          Crafted with <br />
          <span className="text-gold italic font-black">Nature in Mind.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-text-primary/80 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-10"
        >
          Every BeerWiser bottle begins with the mountains that inspire us. That's why protecting nature isn't a responsibility—it's part of who we are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button className="px-10 py-5 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] border border-gold-highlight/50 font-bold tracking-widest text-sm uppercase hover:brightness-110 transition-all duration-500 rounded-sm">
            Explore Our Commitment
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase text-gold/80 mb-4">Discover</span>
        <div className="w-[2px] h-12 bg-gold/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gold absolute top-0 shadow-[0_0_10px_rgba(212,175,55,1)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
