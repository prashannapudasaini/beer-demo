import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, Lightbulb } from 'lucide-react';

const commitments = [
  {
    title: 'Sustainability',
    desc: 'Reducing our environmental footprint.',
    icon: <Leaf size={24} />
  },
  {
    title: 'Quality',
    desc: 'Never compromising on ingredients.',
    icon: <Award size={24} />
  },
  {
    title: 'Community',
    desc: 'Supporting local connections and experiences.',
    icon: <Users size={24} />
  },
  {
    title: 'Innovation',
    desc: 'Always exploring better ways to brew.',
    icon: <Lightbulb size={24} />
  }
];

export default function OurCommitment() {
  return (
    <section className="py-40 bg-surface/30 backdrop-blur-md border border-glass-border relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24">
          <div className="w-12 h-[2px] bg-secondary mb-6"></div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary"
          >
            More Than Great Beer
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-start gap-8 group cursor-default"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full border border-glass-border flex items-center justify-center text-text-primary group-hover:bg-secondary group-hover:text-white group-hover:border-gold transition-colors duration-500">
                {item.icon}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-primary/70 text-lg font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
