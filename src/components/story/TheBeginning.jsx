import React from 'react';
import { motion } from 'framer-motion';

export default function TheBeginning() {
  return (
    <section className="bg-transparent overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        
        {/* Left: Large Mountain Image */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/snowy_mountains.png" 
            alt="Mountain Peaks" 
            className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/80 lg:to-primary"></div>
        </div>

        {/* Right: Editorial Text */}
        <div className="flex flex-col justify-center px-10 py-24 lg:px-24 xl:px-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary leading-tight mb-12">
              Every Great Journey <br className="hidden lg:block"/>Starts with a Vision.
            </h2>
            
            <div className="space-y-8 text-text-primary/70 text-lg md:text-xl font-light leading-relaxed">
              <p>
                <strong className="font-bold text-text-primary">BeerWiser was born from a simple belief:</strong>
              </p>
              <p>
                The best beer begins with the purest ingredients and a relentless pursuit of quality.
              </p>
              <p>
                Inspired by the crisp mountain air, untouched spring water, and spirit of exploration, we set out to create a beer that feels as refreshing as the landscapes that inspire it.
              </p>
              <p className="text-gold drop-shadow-sm font-medium italic pt-4">
                Today, every bottle continues that promise.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
