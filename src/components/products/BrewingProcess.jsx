import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Water Collection' },
  { step: '02', title: 'Ingredient Selection' },
  { step: '03', title: 'Cold Fermentation' },
  { step: '04', title: 'Maturation' },
  { step: '05', title: 'Packaging' },
];

export default function BrewingProcess() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary"
          >
            From Mountain Source to Bottle
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-transparent/10 -translate-y-1/2">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-secondary"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="w-16 h-16 rounded-full bg-surface/30 backdrop-blur-md border border-glass-border border-4 border-primary flex items-center justify-center shadow-lg shadow-black/5 mb-6 relative z-10 text-gold drop-shadow-sm font-bold"
                >
                  {item.step}
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index * 0.4) + 0.2 }}
                  className="text-lg font-bold text-text-primary px-4"
                >
                  {item.title}
                </motion.h3>

                {/* Mobile connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-gold drop-shadow-sm">
                    &darr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
