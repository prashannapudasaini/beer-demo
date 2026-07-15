import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  useEffect(() => {
    // Hero intro animation
    const tl = gsap.timeline();
    tl.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" })
      .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1")
      .fromTo(".hero-cta", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center px-6 md:px-20 z-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-start z-20 mt-16 md:mt-0">
          <h1 className="hero-title font-heading text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] text-textMain uppercase mb-4 md:mb-6 drop-shadow-2xl">
            Unleash<br/>The <span className="text-electricBlue">Wild</span>
          </h1>
          <p className="hero-desc font-body text-lg md:text-2xl text-textSecondary max-w-md mb-8 md:mb-10 leading-relaxed font-light">
            Experience the boldest premium brew. Crafted with relentless perfection and ancient tradition.
          </p>
          <button className="hero-cta px-8 py-3 md:px-10 md:py-4 border border-white/20 rounded-full font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-bgPrimary transition-all duration-500 shadow-glow-blue hover:shadow-glow-blue bg-white/5 backdrop-blur-sm">
            Discover More
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-full flex justify-center items-center opacity-30 md:opacity-100 absolute md:relative inset-0 md:inset-auto z-10 md:z-auto pointer-events-none mt-20 md:mt-0">
           <img src="/video_frames_30fps/frame_0001.jpg" alt="Wolf Premium Bottle" className="h-[60vh] md:h-[80vh] object-cover mix-blend-screen" />
        </div>
      </div>
    </section>
  );
}
