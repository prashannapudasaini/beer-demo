import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleOverlay from '../../components/ParticleOverlay.jsx';

export default function SustainHero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Character-by-character text reveal
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      gsap.fromTo(chars,
        { opacity: 0, y: 50, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.05, ease: "back.out(1.5)" }
      );
    }

    gsap.fromTo('.sus-desc', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" }
    );

    // Nature-inspired background movement
    gsap.to('.sus-bg', {
      scale: 1.1,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true,
        start: "top top",
        end: "bottom top"
      }
    });

    // Dissolve out on scroll
    gsap.to('.sus-content', {
      opacity: 0,
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true,
        start: "top top",
        end: "bottom top"
      }
    });

  }, []);

  const headline = "Built For Today. Committed To Tomorrow.";

  return (
    <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden z-20 bg-bgPrimary">
      {/* Immersive Nature Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="sus-bg absolute inset-0 w-full h-[120%] bg-[url('/video_frames_30fps/frame_0100.jpg')] bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none -top-[10%] filter contrast-125"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme('colors.electricBlue')_0%,transparent_70%)] opacity-20 mix-blend-screen"></div>
      </div>

      <ParticleOverlay />

      <div className="sus-content relative z-10 flex flex-col items-center max-w-5xl px-6 mt-20">
        <h1 ref={titleRef} className="font-heading text-6xl md:text-[8rem] lg:text-[10rem] font-bold text-white uppercase leading-[0.85] mb-8 drop-shadow-2xl flex flex-wrap justify-center gap-x-6">
          {headline.split(' ').map((word, wI) => (
            <span key={wI} className="inline-block whitespace-nowrap overflow-hidden">
              {word.split('').map((char, cI) => (
                <span key={cI} className={`char inline-block origin-bottom ${wI > 2 ? 'text-electricBlue' : ''}`}>
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="sus-desc font-body text-xl md:text-3xl text-premiumSilver max-w-3xl leading-relaxed font-light drop-shadow-lg">
          We take from the wild, so we fiercely protect it. Innovation driven by absolute responsibility for the next century of brewing.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20 opacity-50">
        <span className="font-body text-xs uppercase tracking-widest text-white mb-2">Our Responsibility</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
