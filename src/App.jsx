import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Scene from './components/canvas/Scene';

// Pages
import Home from './pages/Home';
import Story from './pages/Story';
import Products from './pages/Products';
import BlogPage from './pages/Blog';
import SustainabilityPage from './pages/Sustainability';
import ContactPage from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Basic setup for smooth scrolling or general GSAP context
    let ctx = gsap.context(() => {
      // We can add global scroll triggers here if needed
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div ref={containerRef} className="relative w-full bg-primary text-accent overflow-hidden">
        {/* 3D Canvas Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Scene />
        </div>

        {/* Foreground UI Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
