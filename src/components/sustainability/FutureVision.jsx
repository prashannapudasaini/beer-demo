import React from 'react';
import { motion } from 'framer-motion';

export default function FutureVision() {
  return (
    <section className="py-40 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-black/40 backdrop-blur-3xl border border-gold/20 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle reflection line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-8"
          >
            Our Journey <span className="text-gold italic">Continues.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-text-primary/80 font-serif leading-relaxed italic"
          >
            "Sustainability isn't a destination. It's an ongoing commitment to innovate, improve, and ensure that future generations can continue to enjoy the beauty of the mountains that inspire every BeerWiser brew."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
