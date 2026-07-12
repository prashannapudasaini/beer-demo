import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CommunityEnvironment() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.5, 1], [-100, 100]);

  return (
    <section className="py-32 relative z-10 overflow-hidden bg-surface/20 border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6"
          >
            Beyond <span className="text-gold">Brewing.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-primary/70 text-lg space-y-6 font-medium"
          >
            <p>Sustainability is about more than production.</p>
            <p>We actively support environmental awareness, local initiatives, and programs that help protect the landscapes and communities that make our brand possible.</p>
          </motion.div>
        </div>

        {/* Right Parallax Image */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gold/10">
          <motion.img 
            style={{ y }}
            src="/snowy_mountains.png" 
            alt="Environmental Community" 
            className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
