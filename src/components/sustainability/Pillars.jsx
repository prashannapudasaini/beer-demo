import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Water Stewardship',
    desc: 'Protecting and responsibly managing natural water resources.',
    icon: '💧'
  },
  {
    title: 'Sustainable Brewing',
    desc: 'Reducing energy consumption throughout production.',
    icon: '⚡'
  },
  {
    title: 'Responsible Packaging',
    desc: 'Using recyclable and environmentally conscious materials.',
    icon: '♻️'
  },
  {
    title: 'Community Impact',
    desc: 'Supporting local communities and environmental initiatives.',
    icon: '🤝'
  }
];

export default function Pillars() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary"
          >
            Four Commitments. <span className="text-gold">One Mission.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-surface/50 backdrop-blur-3xl border border-gold/20 p-10 rounded-2xl flex flex-col items-center hover:bg-black/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              {/* Glass reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
              
              <div className="text-5xl mb-6 relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-serif font-bold text-text-primary text-center mb-4 relative z-10">{item.title}</h3>
              <p className="text-text-primary/70 font-medium text-center relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
