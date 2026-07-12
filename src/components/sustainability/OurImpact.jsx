import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '100%', label: 'Recyclable Glass Packaging' },
  { value: '40%', label: 'Reduction in Production Waste' },
  { value: '25%', label: 'Lower Energy Consumption' },
  { value: '10K+', label: 'Trees Supported Through Programs' }
];

export default function OurImpact() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-text-primary"
          >
            Making a <span className="text-gold italic">Difference.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', bounce: 0.4 }}
              className="flex flex-col items-center justify-center text-center p-8 bg-surface/40 backdrop-blur-3xl rounded-full aspect-square border border-gold/10 hover:border-gold/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-gold mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                {stat.value}
              </div>
              <div className="text-text-primary font-bold tracking-widest uppercase text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
