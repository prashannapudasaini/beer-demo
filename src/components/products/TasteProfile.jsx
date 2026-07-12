import React from 'react';
import { motion } from 'framer-motion';

const profiles = [
  { label: 'Crispness', value: 95 },
  { label: 'Smoothness', value: 90 },
  { label: 'Bitterness', value: 35 },
  { label: 'Refreshment', value: 100 },
];

export default function TasteProfile() {
  return (
    <section className="py-32 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Product Bottle */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative h-[600px] flex justify-center"
        >
          {/* Abstract background shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-full bg-gradient-to-t from-secondary/20 to-transparent rounded-t-full pointer-events-none"></div>
          
          <img 
            src="/beer_bottle_one.png" 
            alt="Taste Profile Bottle" 
            className="h-full object-contain filter drop-shadow-2xl relative z-10"
          />
        </motion.div>

        {/* Right: Interactive Flavor Profile */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif font-bold mb-16"
          >
            Taste Profile
          </motion.h2>

          <div className="space-y-10 mb-16">
            {profiles.map((profile, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-bold tracking-widest uppercase mb-3">
                  <span>{profile.label}</span>
                  <span className="text-gold drop-shadow-sm">{profile.value}%</span>
                </div>
                <div className="h-1 bg-surface/30 w-full rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${profile.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    className="h-full bg-secondary"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-glass-border pt-10">
            <div>
              <div className="text-xs text-white/50 tracking-widest uppercase mb-2">Body</div>
              <div className="text-2xl font-serif font-bold">Medium</div>
            </div>
            <div>
              <div className="text-xs text-white/50 tracking-widest uppercase mb-2">Finish</div>
              <div className="text-2xl font-serif font-bold text-gold drop-shadow-sm">Clean</div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
