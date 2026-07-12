import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    category: 'Sustainability',
    date: 'September 28, 2026',
    title: 'Our Path to 100% Recyclable Packaging',
    desc: 'How we partnered with global innovators to redesign our bottles without compromising on quality or aesthetics.',
    image: '/eco_packaging.png'
  },
  {
    category: 'Lifestyle',
    date: 'September 15, 2026',
    title: '5 Best Mountain Trails to Pair with a Cold Pilsner',
    desc: 'From the Rockies to the Alps, discover the most breathtaking hikes that end with the perfect view and a crisp BeerWiser.',
    image: '/snowy_mountains.png'
  },
  {
    category: 'Craftsmanship',
    date: 'August 30, 2026',
    title: 'The Art of the Perfect Pour',
    desc: 'There is a science to getting the perfect head on your beer. Master the technique to unlock the full flavor profile.',
    image: '/mountain_spring.png'
  },
  {
    category: 'Community',
    date: 'August 12, 2026',
    title: 'Protecting the Alpine Ecosystems',
    desc: 'A look into our latest community initiative where we planted over 10,000 trees to preserve mountain habitats.',
    image: '/himalayan_landscape.png'
  },
  {
    category: 'Brewing',
    date: 'July 22, 2026',
    title: 'Why We Dry-Hop the Alpine Wheat',
    desc: 'An inside look at the brewing floor and why introducing hops post-fermentation creates our signature citrus aroma.',
    image: '/eco_packaging.png'
  },
  {
    category: 'Events',
    date: 'July 05, 2026',
    title: 'BeerWiser Winter Festival 2026',
    desc: 'Join us this December for our annual winter festival featuring live music, exclusive winter brews, and snowboarding.',
    image: '/snowy_mountains.png'
  }
];

export default function ArticleGrid() {
  return (
    <section className="py-24 relative z-10 border-t border-glass-border/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-text-primary"
            >
              Latest <span className="text-gold italic">Stories</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar"
          >
            {['All', 'Brewing', 'Sustainability', 'Lifestyle', 'Community'].map((filter, idx) => (
              <button 
                key={idx}
                className={`px-4 py-2 rounded-full border text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  idx === 0 
                    ? 'bg-gold border-gold text-background' 
                    : 'bg-surface/30 backdrop-blur-md border-glass-border text-text-primary hover:border-gold hover:text-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              className="group bg-surface/40 backdrop-blur-3xl border border-gold/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:border-gold/30 hover:bg-black/40 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-gold/30 px-3 py-1 rounded-sm text-gold font-bold text-[10px] uppercase tracking-widest">
                  {article.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Reflection highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-text-primary/40 text-xs font-medium mb-3">{article.date}</div>
                <h3 className="text-xl font-serif font-bold text-text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-text-primary/70 font-medium text-sm leading-relaxed mb-6 flex-grow">
                  {article.desc}
                </p>
                
                <div className="text-gold font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Read More <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-transparent border border-gold/40 text-text-primary font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 rounded-sm">
            Load More Stories
          </button>
        </div>

      </div>
    </section>
  );
}
