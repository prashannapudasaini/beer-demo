import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-surface/50 backdrop-blur-3xl border border-gold/20 rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
    >
      {/* Top Reflection Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

      <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-gold font-bold text-[10px] tracking-widest uppercase ml-2">First Name</label>
            <input 
              type="text" 
              placeholder="John" 
              className="w-full bg-black/30 border border-glass-border text-text-primary px-5 py-4 rounded-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-primary/20 font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-gold font-bold text-[10px] tracking-widest uppercase ml-2">Last Name</label>
            <input 
              type="text" 
              placeholder="Doe" 
              className="w-full bg-black/30 border border-glass-border text-text-primary px-5 py-4 rounded-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-primary/20 font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gold font-bold text-[10px] tracking-widest uppercase ml-2">Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            className="w-full bg-black/30 border border-glass-border text-text-primary px-5 py-4 rounded-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-primary/20 font-medium"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gold font-bold text-[10px] tracking-widest uppercase ml-2">Inquiry Type</label>
          <select className="w-full bg-black/30 border border-glass-border text-text-primary/70 px-5 py-4 rounded-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none font-medium">
            <option>General Question</option>
            <option>Wholesale & Distribution</option>
            <option>Press & Media</option>
            <option>Event Partnership</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gold font-bold text-[10px] tracking-widest uppercase ml-2">Message</label>
          <textarea 
            placeholder="How can we help you?" 
            rows="5"
            className="w-full bg-black/30 border border-glass-border text-text-primary px-5 py-4 rounded-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-primary/20 resize-none font-medium"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full py-5 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 rounded-sm mt-4"
        >
          Send Message
        </button>

      </form>
    </motion.div>
  );
}
