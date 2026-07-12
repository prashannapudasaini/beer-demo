import React from 'react';
import { motion } from 'framer-motion';

export default function NewsletterCTA() {
  return (
    <section className="py-32 relative z-10 border-t border-glass-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-3xl border border-gold/30 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden"
        >
          {/* Subtle reflection line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary mb-4">
            Never Miss a <span className="text-gold italic">Drop.</span>
          </h2>
          
          <p className="text-text-primary/70 font-medium text-lg mb-10 max-w-xl mx-auto">
            Subscribe to the BeerWiser Journal to receive our latest stories, event invitations, and exclusive releases directly to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-surface/30 backdrop-blur-md border border-glass-border text-text-primary px-6 py-4 rounded-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-primary/40 font-medium"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-gold/20 transition-all duration-300 rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-text-primary/40 text-xs mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
