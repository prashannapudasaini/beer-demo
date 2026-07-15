import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import MagneticButton from '../../components/MagneticButton.jsx';
import ParticleOverlay from '../../components/ParticleOverlay.jsx';

export default function StoryVision() {
  const visionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top 60%"
      }
    });

    tl.fromTo('.vision-title', { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" })
      .fromTo('.vision-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1")
      .fromTo('.vision-btn', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5");
      
    // Deep parallax on background
    gsap.fromTo('.vision-bg', 
      { scale: 1.2, y: -50 },
      { scale: 1, y: 50, ease: "none", scrollTrigger: { trigger: visionRef.current, scrub: true } }
    );
  }, []);

  return (
    <section ref={visionRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-20 bg-bgPrimary border-t border-white/5">
      
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="vision-bg absolute inset-0 w-full h-[120%] bg-[url('/video_frames_30fps/frame_0290.jpg')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none -top-[10%]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme('colors.electricBlue')_0%,transparent_70%)] opacity-20 pointer-events-none mix-blend-screen"></div>
      </div>

      <ParticleOverlay />

      <div className="relative z-10 flex flex-col items-center max-w-4xl px-6">
        <h2 className="vision-title font-heading text-6xl md:text-[8rem] lg:text-[10rem] text-white uppercase leading-[0.85] mb-8 text-glow-blue drop-shadow-2xl">
          The Story<br/>Continues
        </h2>
        <p className="vision-desc font-body text-xl md:text-2xl text-premiumSilver font-light leading-relaxed mb-12">
          We have conquered the past. We are engineering the future. Join us as we continue to push the absolute boundaries of what is possible in premium brewing.
        </p>
        <div className="vision-btn">
          <Link to="/collection">
            <MagneticButton className="px-16 py-6 bg-white text-bgPrimary font-body text-xl font-bold uppercase tracking-[0.2em] rounded-full hover:bg-electricBlue hover:text-white transition-all duration-300 shadow-glow-blue">
              Discover What's Next
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
