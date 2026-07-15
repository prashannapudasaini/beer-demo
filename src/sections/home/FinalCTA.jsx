import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../../components/MagneticButton.jsx';

export default function FinalCTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 60%"
      }
    });

    tl.fromTo('.cta-title', { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" })
      .fromTo('.cta-btn', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5");
  }, []);

  return (
    <section ref={ctaRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-20 bg-bgPrimary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme('colors.orangeFlame')_0%,transparent_60%)] opacity-20 pointer-events-none"></div>
      
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/video_frames_30fps/frame_0180.jpg')] bg-cover bg-center opacity-5 mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="cta-title font-heading text-7xl md:text-[12rem] lg:text-[14rem] text-white uppercase leading-[0.8] mb-12 text-glow-orange drop-shadow-2xl">
          Unleash<br/>The Wolf
        </h2>
        <div className="cta-btn">
          <MagneticButton className="px-16 py-6 bg-white text-bgPrimary font-body text-xl font-bold uppercase tracking-[0.2em] rounded-full hover:bg-orangeFlame hover:text-white transition-all duration-300 shadow-glow-orange">
            Pre-Order Now
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
