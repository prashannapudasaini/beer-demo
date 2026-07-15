import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      gsap.to('.mobile-menu', { y: '0%', duration: 0.5, ease: 'power3.out' });
      gsap.fromTo('.mobile-link', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to('.mobile-menu', { y: '-100%', duration: 0.5, ease: 'power3.in' });
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Collection', path: '/collection' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path ? "text-accentBlue" : "text-white hover:text-gray-300";

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bgPrimary/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="font-heading text-3xl md:text-3xl font-bold tracking-widest text-white uppercase flex items-center gap-2 z-50">
             <img src="/logo-white.svg" alt="Beer" className="h-8 w-auto hidden" />
             BEER
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-body text-sm font-semibold tracking-[0.2em] uppercase">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`transition-colors relative group ${isActive(link.path)}`}>
                {link.name}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accentBlue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 z-50">
            <button className="hidden md:block px-8 py-3 border border-white/20 rounded-full font-body text-sm uppercase font-bold tracking-widest hover:bg-white hover:text-bgPrimary transition-all duration-300">
              Pre-Order
            </button>
            
            {/* Mobile Hamburger */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu fixed inset-0 z-40 bg-bgPrimary flex flex-col justify-center items-center -translate-y-full">
         <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`mobile-link font-heading text-4xl uppercase tracking-widest ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            <button className="mobile-link mt-8 px-10 py-4 border border-white/20 rounded-full font-body text-sm uppercase font-bold tracking-widest text-white hover:bg-white hover:text-bgPrimary transition-all duration-300">
              Pre-Order
            </button>
         </div>
      </div>
    </>
  );
}
