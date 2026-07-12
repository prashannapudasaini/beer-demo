import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Philosophy() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section className="py-40 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div style={{ scale }}>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-text-primary mb-12"
          >
            Great Beer Starts with a <span className="text-gold italic">Healthy Planet.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 text-xl md:text-2xl text-text-primary/80 font-medium leading-relaxed"
          >
            <p>
              The purity of our ingredients comes from nature.
            </p>
            <p>
              From mountain water to carefully sourced ingredients, every step of our brewing process is guided by a commitment to sustainability and long-term environmental stewardship.
            </p>
            <p className="text-gold font-serif italic text-2xl md:text-3xl">
              "BeerWiser believes that every bottle enjoyed today should help preserve tomorrow's landscapes."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
