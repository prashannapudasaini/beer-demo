import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WaterPreservation() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gold/20 group"
        >
          <motion.img 
            src="/mountain_spring.png" 
            alt="Mountain Spring Water" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </motion.div>

        {/* Right Content */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6"
          >
            Every Drop <span className="text-gold italic">Matters.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-primary/70 text-lg mb-12 font-medium"
          >
            Water is the heart of every BeerWiser brew. Through efficient brewing processes and responsible water management practices, we strive to minimize waste while maintaining the highest standards of quality.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { stat: "30%", text: "Less Water Usage" },
              { stat: "100%", text: "Source Monitoring" },
              { stat: "24/7", text: "Sustainable Management" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="bg-surface/50 backdrop-blur-3xl border border-gold/20 p-6 rounded-xl hover:bg-black/50 transition-colors shadow-xl"
              >
                <div className="text-3xl font-serif font-bold text-gold mb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">{item.stat}</div>
                <div className="text-text-primary/80 font-bold text-xs uppercase tracking-widest">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
