import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../../components/MagneticButton.jsx';

export default function BehindBrand() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.brand-img',
      { scale: 1.2 },
      { scale: 1, duration: 2, ease: "power3.out", scrollTrigger: { trigger: ".brand-section", start: "top 70%" } }
    );

    gsap.fromTo('.brand-text > *',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: ".brand-section", start: "top 60%" } }
    );
  }, []);

  return (
    <section className="brand-section py-40 px-6 md:px-20 bg-bgPrimary relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2 brand-text">
          <span className="font-heading text-xl text-orangeFlame tracking-widest uppercase mb-4 block">The Culture</span>
          <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9] mb-8">The Pack</h2>
          <p className="font-body text-xl text-textSecondary font-light leading-relaxed mb-6">
            We are a collective of master brewers, engineers, and creatives bound by a singular obsession: perfection.
          </p>
          <p className="font-body text-lg text-textSecondary/70 font-light leading-relaxed mb-10">
            Behind every hermetically sealed cap is a team that refuses to compromise on quality, continuously pushing the boundaries of what a premium beverage can be.
          </p>
          <MagneticButton className="px-10 py-4 bg-transparent border border-white/20 text-white font-body text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-bgPrimary transition-colors">
            Meet The Masters
          </MagneticButton>
        </div>
        
        <div className="w-full md:w-1/2 h-[80vh] rounded-[3rem] overflow-hidden relative glass-panel group">
          <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-50 transition-opacity duration-700 z-10 pointer-events-none"></div>
          <img src="/video_frames_30fps/frame_0290.jpg" alt="The Team" className="brand-img w-full h-full object-cover opacity-60 filter contrast-125 mix-blend-screen" />
        </div>
      </div>
    </section>
  );
}
