import React from 'react';
import { motion } from 'framer-motion';

const ingredients = [
  {
    title: 'Mountain Spring Water',
    desc: 'Pure, naturally filtered freshness.',
  },
  {
    title: 'Premium Malt',
    desc: 'Balanced flavor and smooth texture.',
  },
  {
    title: 'Selected Hops',
    desc: 'Light bitterness and refreshing aroma.',
  },
  {
    title: 'Traditional Brewing',
    desc: 'Crafted using time-tested methods.',
  }
];

export default function Ingredients() {
  return (
    <section className="py-32 bg-surface/30 backdrop-blur-md border border-glass-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary"
          >
            Crafted from the Finest Ingredients
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-surface/50 backdrop-blur-3xl border border-gold/20 p-10 rounded-2xl hover:bg-black/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-500 cursor-pointer relative overflow-hidden shadow-2xl"
            >
              {/* Glass reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
              
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 relative z-10">{item.title}</h3>
              <p className="text-text-primary/70 font-medium relative z-10">
                {item.desc}
              </p>
              
              <div className="mt-8 text-gold drop-shadow-sm font-bold tracking-widest text-xs uppercase relative z-10 group-hover:pl-2 transition-all duration-300">
                Discover More &rarr;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
