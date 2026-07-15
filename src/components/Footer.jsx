import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-bgPrimary/90 backdrop-blur-xl mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-heading text-5xl tracking-[0.2em] text-textMain">
            BEER
          </span>
          <p className="text-textSecondary font-body text-sm text-center md:text-left tracking-wide">© 2026 Beer Premium Brewery. All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 font-body text-sm font-semibold uppercase tracking-widest text-textSecondary">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Home</Link>
          <Link to="/story" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Story</Link>
          <Link to="/collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Collection</Link>
          <Link to="/sustainability" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Sustainability</Link>
          <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Blog</Link>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
