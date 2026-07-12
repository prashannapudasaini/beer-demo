import React from 'react';
import { motion } from 'framer-motion';

const related = [
  { name: 'Mountain Lager', image: '/beer_bottle_one.png' },
  { name: 'Alpine Wheat', image: '/beer_bottle_two.png' },
  { name: 'Summit Reserve', image: '/beer_bottle_three.png' }
];

export default function RelatedProducts() {
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
            You May Also Like
          </motion.h2>
        </div>

        <div className="flex justify-center gap-12 overflow-x-auto pb-10 hide-scrollbar">
          {related.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group min-w-[280px] flex flex-col items-center bg-surface/80 backdrop-blur-3xl rounded-2xl p-8 cursor-pointer shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:bg-black/60 transition-all duration-500 border border-gold/20 relative overflow-hidden"
            >
              {/* Glass reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
              <div className="h-64 mb-6 relative w-full flex justify-center">
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-primary">{item.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
