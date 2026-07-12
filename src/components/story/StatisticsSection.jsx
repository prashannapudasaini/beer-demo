import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10M+', label: 'Bottles Enjoyed' },
  { value: '50+', label: 'Cities Served' },
  { value: '15+', label: 'Awards Won' },
  { value: '100%', label: 'Premium Ingredients' },
];

export default function StatisticsSection() {
  return (
    <section className="py-40 bg-transparent relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-transparent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide"
          >
            Built on Passion
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-5xl md:text-7xl font-serif font-bold text-gold drop-shadow-sm mb-4 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
