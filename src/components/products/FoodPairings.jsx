import React from 'react';
import { motion } from 'framer-motion';

const pairings = [
  { name: 'The Perfect Pour', image: '/beer_action.png' },
  { name: 'Mountain Lager', image: '/beer_bottle_one.png' },
  { name: 'Alpine Wheat', image: '/beer_bottle_two.png' },
  { name: 'Summit Reserve', image: '/beer_bottle_three.png' },
  { name: 'Pure Refreshment', image: '/eco_packaging.png' },
];

export default function FoodPairings() {
  return (
    <section className="py-32 bg-surface/30 backdrop-blur-md border border-glass-border relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary"
          >
            The Art of the <span className="text-gold italic">Pour.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pairings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group h-80 ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-surface/30 backdrop-blur-md border border-glass-border p-4 rounded-xl text-center inline-block">
                  <h3 className="text-xl font-bold text-white tracking-wide">{item.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
