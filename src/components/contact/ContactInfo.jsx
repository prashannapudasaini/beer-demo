import React from 'react';
import { motion } from 'framer-motion';

export default function ContactInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-12">
        We're Here for <br/> <span className="text-gold italic">You.</span>
      </h2>

      <div className="space-y-12">
        {/* HQ Info */}
        <div className="group">
          <h3 className="text-gold font-bold text-xs tracking-widest uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">Global Headquarters</h3>
          <p className="text-text-primary/80 font-medium text-lg leading-relaxed">
            1200 Alpine Ridge Drive,<br/>
            Suite 400<br/>
            Denver, CO 80202<br/>
            United States
          </p>
        </div>

        {/* Contact Details */}
        <div className="group">
          <h3 className="text-gold font-bold text-xs tracking-widest uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">Direct Lines</h3>
          <div className="text-text-primary/80 font-medium text-lg space-y-2">
            <p className="hover:text-gold transition-colors cursor-pointer">hello@beerwiser.com</p>
            <p className="hover:text-gold transition-colors cursor-pointer">press@beerwiser.com</p>
            <p className="hover:text-gold transition-colors cursor-pointer">+1 (800) 555-BREW</p>
          </div>
        </div>

        {/* Socials */}
        <div className="group">
          <h3 className="text-gold font-bold text-xs tracking-widest uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">Connect</h3>
          <div className="flex gap-6">
            <a href="#" className="text-text-primary/80 hover:text-gold transition-colors font-bold tracking-widest uppercase text-xs">Instagram</a>
            <a href="#" className="text-text-primary/80 hover:text-gold transition-colors font-bold tracking-widest uppercase text-xs">Twitter</a>
            <a href="#" className="text-text-primary/80 hover:text-gold transition-colors font-bold tracking-widest uppercase text-xs">LinkedIn</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
