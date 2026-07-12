import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Leaf, Snowflake, Recycle } from 'lucide-react';

const steps = [
  {
    icon: <Droplet size={32} className="text-gold drop-shadow-sm" />,
    title: "Mountain Water",
    description: "Naturally filtered through ancient rock formations.",
  },
  {
    icon: <Leaf size={32} className="text-gold drop-shadow-sm" />,
    title: "Premium Ingredients",
    description: "Selected malt and hops sourced for exceptional quality.",
  },
  {
    icon: <Snowflake size={32} className="text-gold drop-shadow-sm" />,
    title: "Cold Fermentation",
    description: "A slower brewing process for a smoother finish.",
  },
  {
    icon: <Recycle size={32} className="text-gold drop-shadow-sm" />,
    title: "Sustainable Brewing",
    description: "Creating great beer while protecting nature.",
  }
];

export default function HomeCraftsmanship() {
  return (
    <section className="py-32 bg-transparent relative">
      {/* Background Texture/Grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif font-bold text-text-primary"
          >
            Crafted With Purpose
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-surface/30 backdrop-blur-md border border-glass-border p-8 rounded-2xl hover:bg-surface/30 transition-colors duration-500 group cursor-pointer"
            >
              <div className="mb-6 p-4 bg-surface/30 backdrop-blur-md border border-glass-border rounded-full inline-block shadow-sm group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-primary/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
