import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplet, Sun, Recycle } from 'lucide-react';

const stats = [
  { icon: <Leaf className="text-gold drop-shadow-sm" size={32} />, value: "100%", label: "Carbon Neutral", desc: "Since 2024, our entire operation offsets more carbon than it produces." },
  { icon: <Droplet className="text-gold drop-shadow-sm" size={32} />, value: "0", label: "Water Waste", desc: "Innovative closed-loop systems recycle 100% of distillation water." },
  { icon: <Sun className="text-gold drop-shadow-sm" size={32} />, value: "100%", label: "Renewable Energy", desc: "Powered entirely by solar and wind energy from local grids." },
  { icon: <Recycle className="text-gold drop-shadow-sm" size={32} />, value: "95%", label: "Recyclable Packaging", desc: "Our premium glass and boxes are designed for circularity." }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-32 bg-surface/30 backdrop-blur-md border border-glass-border relative z-10 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold drop-shadow-sm tracking-[0.3em] uppercase text-xs font-bold mb-4"
            >
              Our Promise
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-text-primary leading-tight font-bold"
            >
              Great Beer shouldn't cost the <span className="italic font-black text-gold drop-shadow-sm">Earth.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 md:mt-0 max-w-sm"
          >
            <p className="text-text-primary/80 font-semibold text-sm">
              We believe great beer starts with a great environment. We are committed to preserving the pristine mountains that provide our raw materials, ensuring they remain untouched for generations to come.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="p-8 border-2 border-glass-border bg-transparent/10 hover:bg-transparent/40 hover:border-gold/30 transition-all duration-300 group rounded-md"
            >
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-serif text-text-primary mb-2 font-bold group-hover:text-glow transition-all">
                {stat.value}
              </h3>
              <h4 className="text-sm font-bold tracking-wider text-gold drop-shadow-sm uppercase mb-4">
                {stat.label}
              </h4>
              <div className="w-8 h-[3px] bg-black/10 mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-text-primary/80 text-sm font-semibold">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
