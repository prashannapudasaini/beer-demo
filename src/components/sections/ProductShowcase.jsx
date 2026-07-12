import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Beerwiser Light",
    year: "Extra Cold",
    notes: "Crisp, Clean, Refreshing",
    color: "from-primary to-transparent",
    image: "/beer_bottle_one.png"
  },
  {
    id: 2,
    name: "Beerwiser Original",
    year: "Classic Taste",
    notes: "Smooth, Balanced, Golden",
    color: "from-secondary/20 to-transparent",
    image: "/beer_bottle_two.png"
  },
  {
    id: 3,
    name: "Beerwiser Frost",
    year: "Sub-Zero Filtered",
    notes: "Ultra-Crisp, Light, Icy",
    color: "from-white/80 to-transparent",
    image: "/beer_bottle_three.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function ProductShowcase() {
  return (
    <section id="products" className="py-32 bg-supporting relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold drop-shadow-sm tracking-[0.3em] uppercase text-xs font-bold mb-4"
          >
            The Lineup
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-text-primary font-bold"
          >
            Cold <span className="italic font-black text-gold drop-shadow-sm">Refreshment</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] bg-transparent/20 border-2 border-glass-border p-8 flex flex-col justify-end overflow-hidden cursor-pointer transition-colors hover:border-gold/30 rounded-md"
            >
              {/* Background Glow Effect */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Product Image */}
              <div className="absolute top-0 left-0 w-full h-full p-12 transition-transform duration-700 group-hover:scale-105 pointer-events-none z-0">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover rounded-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 shadow-xl"
                 />
              </div>

              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold drop-shadow-sm text-xs tracking-widest uppercase mb-2 block font-bold">
                  {product.year}
                </span>
                <h3 className="text-2xl font-serif text-text-primary font-bold mb-2">
                  {product.name}
                </h3>
                <div className="w-0 h-[3px] bg-secondary mb-4 group-hover:w-full transition-all duration-700 ease-out"></div>
                <p className="text-text-primary/80 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {product.notes}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <button className="px-8 py-4 border-2 border-gold text-gold drop-shadow-sm font-bold tracking-widest text-sm uppercase hover:bg-secondary hover:text-white transition-all duration-500 rounded-sm">
            View All Beers
          </button>
        </div>

      </div>
    </section>
  );
}
