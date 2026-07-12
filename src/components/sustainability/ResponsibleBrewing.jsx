import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Energy Efficiency',
    desc: 'Reducing production energy consumption.',
  },
  {
    title: 'Low Carbon Operations',
    desc: 'Working toward cleaner brewing processes.',
  },
  {
    title: 'Efficient Logistics',
    desc: 'Reducing transportation emissions.',
  },
  {
    title: 'Waste Reduction',
    desc: 'Maximizing reuse and recycling opportunities.',
  }
];

export default function ResponsibleBrewing() {
  return (
    <section className="py-24 relative z-10 bg-surface/30 backdrop-blur-md border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6"
          >
            Brewing <span className="text-gold">Smarter.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-primary/70 text-lg max-w-2xl mx-auto font-medium"
          >
            Innovation helps us reduce our environmental footprint without compromising taste.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-2xl border border-gold/10 p-8 rounded-2xl hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all flex flex-col justify-center"
            >
              <h3 className="text-xl font-serif font-bold text-text-primary mb-2 text-gold">{item.title}</h3>
              <p className="text-text-primary/70 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
