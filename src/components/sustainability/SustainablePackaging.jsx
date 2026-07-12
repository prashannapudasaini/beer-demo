import React from 'react';
import { motion } from 'framer-motion';

export default function SustainablePackaging() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6"
            >
              Packaging with <span className="text-gold italic">Purpose.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-primary/70 text-lg mb-8 font-medium"
            >
              Our commitment extends beyond what's inside the bottle. We continuously explore recyclable, reusable, and environmentally responsible packaging solutions that reduce waste while preserving product quality.
            </motion.p>

            <ul className="space-y-4">
              {['100% Recyclable Bottles', 'Eco-Friendly Packaging', 'Reduced Material Waste', 'Lower Environmental Impact'].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center text-text-primary font-bold tracking-wider uppercase text-xs"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mr-4 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gold/20"
          >
            <img 
              src="/eco_packaging.png" 
              alt="Eco Friendly Packaging" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
