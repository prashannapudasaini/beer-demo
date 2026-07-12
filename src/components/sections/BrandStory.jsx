import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="story" className="relative py-32 bg-transparent overflow-hidden border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            style={{ y, opacity }}
            className="relative h-[600px] w-full overflow-hidden rounded-md shadow-2xl"
          >
            <div className="absolute inset-0 border-2 border-glass-border z-20 m-6 rounded-sm"></div>
            
            {/* Image placeholder with actual URL */}
            <img 
              src="/beer_action.png" 
              alt="Beerwiser"
              className="w-full h-full object-cover"
            />

            {/* Decorative Elements */}
            <div className="absolute top-12 left-12 z-30">
              <span className="text-gold drop-shadow-sm font-serif text-5xl">"</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-gold drop-shadow-sm tracking-[0.3em] uppercase text-xs font-bold mb-6">The Legacy</h4>
              
              <h2 className="text-4xl md:text-5xl font-serif text-text-primary leading-tight mb-8 font-bold">
                Brewed for the <br/>
                <span className="italic font-black text-gold drop-shadow-sm">Bold.</span>
              </h2>
              
              <div className="w-12 h-[3px] bg-secondary mb-8"></div>

              <p className="text-text-primary/90 text-lg font-semibold leading-relaxed mb-6">
                Born high in the mountains, Beerwiser is a testament to the uncompromising spirit of the great outdoors. Crisp, clean, and always refreshing.
              </p>
              
              <p className="text-text-primary/80 text-base font-medium leading-relaxed mb-10">
                Sourced from the finest highland springs and brewed at the edge of freezing, the result is a taste that instantly transports you to the peaks. We don't just make a beer; we craft an expedition.
              </p>

              <button className="flex items-center space-x-3 text-gold drop-shadow-sm group hover:text-text-primary transition-colors duration-300">
                <span className="font-bold tracking-widest uppercase text-xs">Discover the Rockies</span>
                <span className="block w-8 h-[2px] bg-secondary group-hover:bg-transparent group-hover:w-12 transition-all duration-300"></span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
