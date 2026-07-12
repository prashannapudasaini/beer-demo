import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Story', href: '/story' },
  { name: 'Blog', href: '/blog' },
  { name: 'Sustainability', href: '/sustainability' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/40 backdrop-blur-2xl border-b border-glass-border shadow-[0_4px_30px_rgba(212,175,55,0.05)]' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link to="/">
            <h1 className="text-3xl font-serif tracking-widest text-gold drop-shadow-sm text-glow font-bold">BEERWISER</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-bold tracking-wide text-text-primary hover:text-gold drop-shadow-sm transition-colors duration-300 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="px-6 py-2 border-2 border-gold text-gold drop-shadow-sm hover:bg-gold hover:text-black transition-all duration-300 font-bold tracking-widest text-xs uppercase rounded-sm">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-text-primary focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/60 backdrop-blur-3xl border-t border-glass-border shadow-2xl"
        >
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-bold tracking-wide text-text-primary hover:text-gold drop-shadow-sm transition-colors duration-300 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="w-full">
              <button 
                className="mt-4 px-6 py-2 border-2 border-gold text-gold drop-shadow-sm hover:bg-gold hover:text-black transition-all duration-300 font-bold tracking-widest text-xs uppercase w-full rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
