import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedArticle() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-surface/50 backdrop-blur-3xl border border-gold/20 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] transition-all duration-700 cursor-pointer"
        >
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <motion.img 
              src="/mountain_spring.png" 
              alt="Featured Article" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/90 lg:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent lg:hidden block"></div>
          </div>

          {/* Content Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center relative">
            {/* Top highlight line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/50 via-transparent to-transparent opacity-50 hidden lg:block"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-bold text-xs tracking-widest uppercase">Brewing</span>
              <span className="text-text-primary/40 text-xs font-medium">October 12, 2026</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6 group-hover:text-gold transition-colors duration-500">
              The Secret Behind Our Mountain Spring Water Sourcing
            </h2>
            
            <p className="text-text-primary/70 font-medium mb-10 text-lg leading-relaxed">
              Water is the single most important ingredient in any beer. Discover how we sustainably harvest and filter our water directly from the Rockies to ensure the crisp, clean finish you expect in every bottle.
            </p>

            <button className="self-start px-8 py-4 border border-gold/40 text-text-primary font-bold text-xs uppercase tracking-widest group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-500 rounded-sm">
              Read Full Article &rarr;
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
