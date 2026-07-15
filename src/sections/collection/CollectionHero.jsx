import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleOverlay from '../../components/ParticleOverlay.jsx';

export default function CollectionHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline();
    tl.fromTo('.coll-title', { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" })
      .fromTo('.coll-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1")
      .fromTo('.hero-bottle', 
        { opacity: 0, y: (i) => i === 3 ? 100 : gsap.utils.random(50, 150) }, 
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "power3.out" }, 
        "-=0.5"
      );

    // Mouse movement parallax for bottles
    const hero = heroRef.current;
    const bottles = gsap.utils.toArray('.hero-bottle');
    const light = document.querySelector('.hero-light');
    
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to(light, { x: x * 5, y: y * 5, duration: 2, ease: "power2.out" });
      
      bottles.forEach((bottle, i) => {
         const depth = (i - 3) * 2; // Central is 0, outer are +/-
         gsap.to(bottle, { x: x * depth, y: y * depth, duration: 1, ease: "power2.out" });
      });
    };
    
    hero.addEventListener('mousemove', onMouseMove);

    // Scroll Transition - separate products
    gsap.to('.hero-bottle', {
      y: (i) => i === 3 ? -100 : (i < 3 ? -200 : -200),
      x: (i) => i === 3 ? 0 : (i < 3 ? -200 : 200),
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      hero.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden z-20 bg-bgPrimary">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme('colors.surface')_0%,theme('colors.bgPrimary')_70%)] opacity-30 pointer-events-none"></div>
      <div className="hero-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-electricBlue opacity-10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

      <ParticleOverlay />

      <div className="relative z-10 flex flex-col items-center mt-[-10vh]">
        <h1 className="coll-title font-heading text-5xl md:text-[10rem] font-bold text-white uppercase leading-[0.8] mb-4 md:mb-6 drop-shadow-2xl">
          The <span className="text-electricBlue">Collection</span>
        </h1>
        <p className="coll-desc font-body text-lg md:text-2xl text-premiumSilver max-w-2xl leading-relaxed font-light drop-shadow-lg mb-10">
          Seven masterpieces. One standard of absolute excellence. Discover the ultimate expression of our craftsmanship.
        </p>
      </div>

      {/* 7 Bottles Artistic Arrangement */}
      <div className="absolute bottom-[-10vh] left-0 w-full h-[60vh] flex items-end justify-center pointer-events-none z-20 mask-image-bottom">
         {/* Bottles 0 to 6. Bottle 3 is center. */}
         {[0, 1, 2, 3, 4, 5, 6].map((i) => {
           const isCenter = i === 3;
           const offset = Math.abs(i - 3); // 0 for center, 1, 2, 3 for outer
           
           let scale = isCenter ? 1.2 : 1 - (offset * 0.15);
           let zIndex = 30 - offset;
           let opacity = isCenter ? 1 : 1 - (offset * 0.2);
           let margin = isCenter ? 'mx-[-20px]' : 'mx-[-40px]';
           let blur = isCenter ? 'blur-0' : `blur-[${offset}px]`;
           
           return (
             <div key={i} className={`hero-bottle relative ${margin} flex items-end justify-center transition-transform`} style={{ zIndex, transform: `scale(${scale})`, opacity }}>
                <img src={`/video_frames_30fps/frame_0${200 + (i*10)}.jpg`} alt={`Product ${i+1}`} className={`h-[50vh] object-cover mix-blend-screen filter contrast-125 ${blur}`} />
             </div>
           );
         })}
      </div>
    </section>
  );
}
