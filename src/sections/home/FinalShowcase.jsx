import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FinalShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax floating effect for the product
    gsap.fromTo('.showcase-bottle',
      { y: 100, scale: 0.9 },
      { y: -50, scale: 1.1, ease: "none", scrollTrigger: { trigger: containerRef.current, scrub: true } }
    );

    // Fade in lighting
    gsap.fromTo('.showcase-light',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, scrollTrigger: { trigger: containerRef.current, start: "top 50%" } }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-bgPrimary flex items-center justify-center overflow-hidden z-20 border-t border-white/5">
      {/* Background Lighting & Smoke simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme('colors.surface')_0%,theme('colors.bgPrimary')_70%)] opacity-50 pointer-events-none"></div>
      <div className="showcase-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-electricBlue opacity-10 blur-[200px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Dynamic Text Behind */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[12rem] md:text-[20rem] text-white/5 uppercase whitespace-nowrap pointer-events-none tracking-widest z-0">
        Perfection
      </h2>

      {/* Floating Product */}
      <div className="relative z-10 h-[80vh] flex items-center justify-center showcase-bottle mask-image-bottom">
        <img src="/video_frames_30fps/frame_0290.jpg" alt="Final Showcase" className="h-full object-cover mix-blend-screen filter contrast-125 drop-shadow-[0_0_50px_rgba(0,168,255,0.3)]" />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <span className="font-body text-xs uppercase tracking-widest text-premiumSilver animate-pulse">The Apex Of Craft</span>
      </div>
    </section>
  );
}
