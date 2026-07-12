import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MountainsInspireUs() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[120vh] w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* Massive Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[150%]"
      >
        <img 
          src="/snowy_mountains.png" 
          alt="Mountains Inspire Us" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </motion.div>

      {/* Cinematic Typography Overlay */}
      <motion.div 
        style={{ scale: textScale, opacity: textOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white mb-10 leading-tight">
          Inspired by Nature.
        </h2>
        
        <div className="text-xl md:text-3xl text-white/80 font-light space-y-6 leading-relaxed max-w-4xl mx-auto italic">
          <p>
            The mountains remind us that greatness takes time.
          </p>
          <p>
            They inspire the purity of our ingredients, the patience of our brewing process, and the adventurous spirit found in every BeerWiser experience.
          </p>
        </div>
      </motion.div>

    </section>
  );
}
