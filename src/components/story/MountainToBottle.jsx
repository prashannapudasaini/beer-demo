import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Mountain Spring Water',
    desc: 'Crystal-clear water sourced from pristine environments.'
  },
  {
    num: '02',
    title: 'Ingredient Selection',
    desc: 'Only premium malt and carefully selected hops.'
  },
  {
    num: '03',
    title: 'Cold Brewing',
    desc: 'Slow-crafted for exceptional smoothness.'
  },
  {
    num: '04',
    title: 'Quality Assurance',
    desc: 'Every batch meets the highest standards.'
  },
  {
    num: '05',
    title: 'Enjoyment',
    desc: 'Shared among friends, families, and adventurers.'
  }
];

export default function MountainToBottle() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-40 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            The Journey Behind Every Sip
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Horizontal Line */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-surface/30">
            <motion.div 
              style={{ width: lineWidth }}
              className="h-full bg-secondary"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-transparent border border-gold flex items-center justify-center text-gold drop-shadow-sm font-bold text-sm tracking-widest mb-8 relative z-10">
                  {item.num}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>

                {/* Mobile connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-10 text-gold drop-shadow-sm/50">
                    &darr;
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
