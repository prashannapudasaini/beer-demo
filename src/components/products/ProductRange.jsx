import React from 'react';
import { motion } from 'framer-motion';

const catalog = [
  {
    name: 'Mountain Lager',
    volume: '330ml',
    desc: 'Clean and refreshing.',
    image: '/beer_bottle_one.png'
  },
  {
    name: 'Alpine Wheat',
    volume: '500ml',
    desc: 'Smooth and citrus-forward.',
    image: '/beer_bottle_two.png'
  },
  {
    name: 'Summit Reserve',
    volume: '650ml',
    desc: 'Bold and rich character.',
    image: '/beer_bottle_three.png'
  },
  {
    name: 'Amber Ale',
    volume: '330ml',
    desc: 'Toasted caramel and malty finish.',
    image: '/beer_bottle_four.png'
  },
  {
    name: 'Dark Stout',
    volume: '500ml',
    desc: 'Deep roasted espresso notes.',
    image: '/beer_bottle_five.png'
  },
  {
    name: 'Golden Pilsner',
    volume: '330ml',
    desc: 'Light, crisp, and brilliantly clear.',
    image: '/beer_bottle_six.png'
  }
];

export default function ProductRange() {
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
            Choose Your Perfect Pour
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {catalog.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col items-center bg-surface/80 backdrop-blur-3xl rounded-2xl p-10 shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:bg-black/60 transition-all duration-500 border border-gold/20 relative overflow-hidden"
            >
              {/* Glass reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
              <div className="h-[400px] mb-8 relative w-full flex justify-center">
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="text-center w-full">
                <h3 className="text-3xl font-serif font-bold text-text-primary mb-2">{item.name}</h3>
                <div className="text-gold drop-shadow-sm font-bold text-xs tracking-[0.2em] uppercase mb-4">{item.volume}</div>
                <p className="text-text-primary/70 font-medium mb-8">
                  {item.desc}
                </p>
                <button className="w-full py-4 bg-gradient-to-r from-gold-dark/10 to-gold/10 border border-gold/50 text-gold font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  Quick View
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
