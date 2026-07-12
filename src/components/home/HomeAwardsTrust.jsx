import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10M+', label: 'Bottles Enjoyed' },
  { value: '50+', label: 'Cities Served' },
  { value: '15+', label: 'Industry Awards' },
  { value: '100%', label: 'Premium Ingredients' },
];

export default function HomeAwardsTrust() {
  return (
    <section className="py-32 bg-surface/30 backdrop-blur-md border border-glass-border relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-20"
        >
          Crafted to Be Remembered
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-b border-glass-border py-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-6xl font-serif font-bold text-gold drop-shadow-sm mb-4">
                {stat.value}
              </div>
              <div className="text-sm font-bold tracking-widest text-text-primary/70 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
