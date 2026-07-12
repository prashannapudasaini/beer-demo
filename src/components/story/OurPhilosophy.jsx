import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Compass, Hammer } from 'lucide-react';

const philosophies = [
  {
    title: 'Purity',
    desc: 'Only carefully selected ingredients.',
    icon: <Droplet size={40} strokeWidth={1.5} />
  },
  {
    title: 'Craftsmanship',
    desc: 'Attention to detail in every batch.',
    icon: <Hammer size={40} strokeWidth={1.5} />
  },
  {
    title: 'Adventure',
    desc: 'Created for moments worth remembering.',
    icon: <Compass size={40} strokeWidth={1.5} />
  }
];

export default function OurPhilosophy() {
  return (
    <section className="py-40 bg-surface/30 backdrop-blur-md border border-glass-border relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-24 tracking-wide"
        >
          What We Stand For
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-surface/50 backdrop-blur-3xl border border-gold/20 p-16 rounded-2xl flex flex-col items-center hover:bg-black/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              {/* Glass reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
              {/* Subtle glass effect orb in background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="text-gold drop-shadow-sm mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold text-text-primary mb-6 relative z-10">{item.title}</h3>
              <p className="text-text-primary/70 text-lg font-light relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
