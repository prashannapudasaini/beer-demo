import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import MagneticButton from '../../components/MagneticButton.jsx';
import ParticleOverlay from '../../components/ParticleOverlay.jsx';

export default function CollectionFinale() {
  const finaleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: finaleRef.current,
        start: "top 50%"
      }
    });

    tl.fromTo('.finale-title', { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" })
      .fromTo('.finale-btn', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5");
      
    // Bottle convergence animation
    gsap.fromTo('.finale-bottle', 
      { opacity: 0, x: (i) => (i - 3) * 100, y: 100 },
      { opacity: 1, x: 0, y: 0, duration: 1.5, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: finaleRef.current, start: "top 60%" } }
    );
  }, []);

  return (
    <section ref={finaleRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-20 bg-bgPrimary border-t border-white/5">
      
      {/* Background Lighting & Smoke simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme('colors.surface')_0%,theme('colors.bgPrimary')_70%)] opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-electricBlue opacity-10 blur-[200px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Atmospheric Smoke overlay */}
      <div className="absolute inset-0 bg-[url('/video_frames_30fps/frame_0180.jpg')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none filter blur-sm"></div>

      <ParticleOverlay />

      <div className="relative z-20 flex flex-col items-center mt-[-15vh]">
        <h2 className="finale-title font-heading text-6xl md:text-[8rem] lg:text-[10rem] text-white uppercase leading-[0.8] mb-12 drop-shadow-2xl">
          Crafted For<br/>Every Taste
        </h2>
        <div className="finale-btn">
          <Link to="/story">
            <MagneticButton className="px-16 py-6 bg-white text-bgPrimary font-body text-xl font-bold uppercase tracking-[0.2em] rounded-full hover:bg-electricBlue hover:text-white transition-all duration-300 shadow-glow-blue">
              Explore Our Story
            </MagneticButton>
          </Link>
        </div>
      </div>

      {/* Group Shot Convergence */}
      <div className="absolute bottom-[-5vh] left-0 w-full h-[50vh] flex items-end justify-center pointer-events-none z-10 mask-image-bottom">
         {[0, 1, 2, 3, 4, 5, 6].map((i) => {
           const isCenter = i === 3;
           const offset = Math.abs(i - 3);
           
           let scale = isCenter ? 1.1 : 0.9 - (offset * 0.1);
           let zIndex = 30 - offset;
           let opacity = isCenter ? 1 : 1 - (offset * 0.2);
           let margin = isCenter ? 'mx-[-10px]' : 'mx-[-30px]';
           let blur = isCenter ? 'blur-0' : `blur-[${offset/2}px]`;
           
           return (
             <div key={i} className={`finale-bottle relative ${margin} flex items-end justify-center`} style={{ zIndex, transform: `scale(${scale})`, opacity }}>
                <img src={`/video_frames_30fps/frame_0${290 - (i*10)}.jpg`} alt={`Product ${i+1}`} className={`h-[45vh] object-cover mix-blend-screen filter contrast-125 ${blur}`} />
             </div>
           );
         })}
      </div>
    </section>
  );
}
