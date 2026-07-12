import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StoryHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bottleY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* Slow-moving mountain landscape */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <img 
          src="/snowy_mountains.png" 
          alt="Snowy Mountains" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-between items-center h-full pt-32 pb-20">
        
        {/* Left: Editorial Text */}
        <motion.div 
          style={{ y: textY }}
          className="max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 border border-gold text-gold drop-shadow-sm text-xs font-bold tracking-[0.2em] uppercase rounded-sm mb-8">
            Our Story
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Born Above <span className="text-gold drop-shadow-sm italic">Ordinary.</span>
          </h1>
          <p className="text-white/80 text-xl font-light leading-relaxed max-w-lg mb-12">
            Crafted in the spirit of the mountains, inspired by adventure, and perfected for those who appreciate exceptional refreshment.
          </p>
          
          <div className="flex items-center gap-4 text-white/50 animate-pulse">
            <span className="text-xs uppercase tracking-[0.3em]">Discover Our Journey</span>
            <div className="w-12 h-[1px] bg-surface/30"></div>
          </div>
        </motion.div>

        {/* Right: Floating Bottle */}
        <motion.div 
          style={{ y: bottleY }}
          className="hidden lg:block absolute right-10 top-1/4 h-[80vh] opacity-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <motion.img 
            src="/beer_bottle_three.png" 
            alt="BeerWiser Bottle" 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="h-full object-contain filter drop-shadow-2xl mix-blend-screen brightness-110"
          />
        </motion.div>

      </div>
    </section>
  );
}
