import React from 'react';
import { motion } from 'framer-motion';

export default function BeerwiserExperience() {
  return (
    <section className="bg-transparent py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Large Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[800px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="/beer_action.png" 
            alt="BeerWiser Experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-700"></div>
        </motion.div>

        {/* Right: Editorial Text */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary leading-tight mb-10">
              Crafted for <br/>Every Occasion
            </h2>
            
            <div className="space-y-6 text-text-primary/70 text-xl font-light leading-relaxed">
              <p>
                Whether it's a celebration with friends, an outdoor adventure, or a quiet evening of relaxation, BeerWiser is designed to elevate every moment.
              </p>
              <p className="font-bold text-text-primary text-2xl font-serif italic pt-8">
                Because great memories deserve great beer.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
