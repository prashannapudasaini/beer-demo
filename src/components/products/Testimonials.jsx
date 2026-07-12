import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Crisp, smooth, and incredibly refreshing.",
    author: "Beer Enthusiast"
  },
  {
    quote: "Premium quality from the first sip.",
    author: "Craft Magazine"
  },
  {
    quote: "Perfect balance of flavor and drinkability.",
    author: "Mountain Guide"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-[20rem] text-white/20 font-serif leading-none pointer-events-none select-none">"</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary"
          >
            Loved by Beer Enthusiasts
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-surface/30 backdrop-blur-xl border border-glass-border p-10 rounded-2xl flex flex-col items-center text-center shadow-xl shadow-gold/20"
            >
              <div className="text-gold drop-shadow-sm tracking-widest text-lg mb-6">
                ★★★★★
              </div>
              <p className="text-xl font-serif font-bold text-text-primary italic mb-8 flex-grow">
                "{item.quote}"
              </p>
              <div className="text-xs font-bold tracking-widest text-text-primary/70 uppercase">
                {item.author}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
