import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import MagneticButton from '../../components/MagneticButton.jsx';
import ParticleOverlay from '../../components/ParticleOverlay.jsx';

export default function SustainVision() {
  const visionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top 60%"
      }
    });

    tl.fromTo('.sus-vision-title', { opacity: 0, y: 100, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" })
      .fromTo('.sus-vision-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1")
      .fromTo('.sus-vision-btn', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5");
      
    // Parallax on background
    gsap.fromTo('.sus-vision-bg', 
      { scale: 1.2, y: -50 },
      { scale: 1, y: 50, ease: "none", scrollTrigger: { trigger: visionRef.current, scrub: true } }
    );
  }, []);

  return (
    <section ref={visionRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-20 bg-bgPrimary border-t border-white/5">
      
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="sus-vision-bg absolute inset-0 w-full h-[120%] bg-[url('/video_frames_30fps/frame_0290.jpg')] bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none -top-[10%] filter contrast-125"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/50 to-transparent pointer-events-none"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme('colors.electricBlue')_0%,transparent_60%)] opacity-20 mix-blend-screen pointer-events-none"></div>
      </div>

      <ParticleOverlay />

      <div className="relative z-10 flex flex-col items-center max-w-5xl px-6">
        <h2 className="sus-vision-title font-heading text-6xl md:text-[8rem] lg:text-[9rem] text-white uppercase leading-[0.85] mb-8 text-glow-blue drop-shadow-2xl">
          The Future Starts<br/>With Every Choice
        </h2>
        <p className="sus-vision-desc font-body text-xl md:text-2xl text-premiumSilver font-light leading-relaxed mb-12 max-w-3xl">
          Our commitment to the environment is absolute. We will continue to pioneer sustainable brewing innovations to ensure the wild remains untamed.
        </p>
        <div className="sus-vision-btn">
          <Link to="/story">
            <MagneticButton className="px-16 py-6 bg-transparent border border-white/20 text-white font-body text-xl font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-bgPrimary transition-all duration-300">
              Explore Our Story
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
