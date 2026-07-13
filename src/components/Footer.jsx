import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface/50 backdrop-blur-3xl border-t border-glass-border shadow-[0_-10px_30px_rgba(212,175,55,0.05)] text-text-primary pt-10 overflow-hidden relative z-10">
      
      {/* Top subtle reflection */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8">
          
          {/* Left: Brand Description */}
          <div className="md:col-span-4 flex flex-col">
            <h2 className="text-3xl font-serif tracking-widest text-gold drop-shadow-sm font-bold mb-6">BEERWISER</h2>
            <p className="text-text-primary/70 text-sm leading-relaxed max-w-xs font-medium">
              Every bottle captures the spirit of exploration and freedom. Cold. Crisp. Mountain Crafted. 
              Brewed for those who appreciate the journey as much as the destination.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="md:col-span-4 flex flex-col md:items-center">
            <h3 className="text-gold font-bold text-xs tracking-widest uppercase mb-6">Explore</h3>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:translate-x-2 transition-all duration-300">Home</Link>
              <Link to="/products" className="text-sm font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:translate-x-2 transition-all duration-300">Products</Link>
              <Link to="/story" className="text-sm font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:translate-x-2 transition-all duration-300">Story</Link>
              <Link to="/blog" className="text-sm font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:translate-x-2 transition-all duration-300">Blog</Link>
              <Link to="/sustainability" className="text-sm font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:translate-x-2 transition-all duration-300">Sustainability</Link>
              <Link to="/contact" className="text-sm font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:translate-x-2 transition-all duration-300">Contact</Link>
            </div>
          </div>

          {/* Right: Socials & Newsletter */}
          <div className="md:col-span-4 flex flex-col md:items-end">
            <h3 className="text-gold font-bold text-xs tracking-widest uppercase mb-6">Connect With Us</h3>
            <div className="flex gap-6 mb-10">
              <a href="#" className="text-xs font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:-translate-y-1 transition-all duration-300">Instagram</a>
              <a href="#" className="text-xs font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:-translate-y-1 transition-all duration-300">Facebook</a>
              <a href="#" className="text-xs font-bold tracking-widest uppercase text-text-primary/80 hover:text-gold hover:-translate-y-1 transition-all duration-300">YouTube</a>
            </div>
            
            <p className="text-text-primary/50 text-xs text-right max-w-[200px] mb-4">Subscribe to our newsletter for exclusive updates.</p>
            <div className="flex w-full md:w-auto">
              <input type="email" placeholder="Email Address" className="bg-black/30 border-y border-l border-glass-border px-4 py-2 text-sm w-full focus:outline-none focus:border-gold/50 rounded-l-sm placeholder:text-text-primary/30" />
              <button className="bg-gold text-black px-4 py-2 text-xs font-bold uppercase tracking-widest hover:brightness-110 rounded-r-sm transition-all">Join</button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom: Copyright */}
      <div className="w-full text-center z-20 mt-8 pt-8 pb-6 border-t border-glass-border/10">
        <p className="text-text-primary/40 text-[10px] tracking-widest font-bold uppercase">
          © 2026 BeerWiser. All Rights Reserved. Drink Responsibly.
        </p>
      </div>
    </footer>
  );
}
