import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Mountain Lager',
    description: 'Clean, crisp, and refreshing with a smooth finish.',
    abv: '4.2%',
    image: '/beer_bottle_one.png',
  },
  {
    id: 2,
    name: 'Alpine Wheat',
    description: 'Bright citrus notes with a light, refreshing character.',
    abv: '5.0%',
    image: '/beer_bottle_two.png',
  },
  {
    id: 3,
    name: 'Summit Reserve',
    description: 'Bold, rich, and crafted for those who appreciate premium taste.',
    abv: '6.5%',
    image: '/beer_bottle_three.png',
  }
];

export default function HomeFeaturedCollection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-32 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-gold drop-shadow-sm uppercase mb-4">Signature Collection</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">Crafted in the mountains.<br/>Perfected for every occasion.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative flex flex-col items-center"
            >
              {/* Image Container with Glow & Float */}
              <div className="relative w-full h-[500px] mb-8 flex items-center justify-center">
                {/* Glow behind bottle */}
                <div className="absolute inset-0 bg-surface/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-75"></div>
                
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="relative z-10 h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h4 className="text-3xl font-serif font-bold text-text-primary mb-3">{product.name}</h4>
                <p className="text-text-primary/70 text-sm mb-4 max-w-[250px] mx-auto">{product.description}</p>
                <div className="text-gold drop-shadow-sm font-bold text-sm tracking-widest mb-6">{product.abv} ABV</div>
                
                <button className="px-8 py-3 border border-gold/20 text-text-primary font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300 rounded-sm group-hover:border-gold">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
