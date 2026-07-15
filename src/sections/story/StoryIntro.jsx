import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleOverlay from '../../components/ParticleOverlay.jsx';

export default function StoryIntro() {
  const introRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Background Zoom
    gsap.to(bgRef.current, {
      scale: 1.15,
      duration: 10,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Fade out on scroll (Dissolve into next section)
    gsap.to(introRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: introRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Character Animation (Line by Line)
    const tl = gsap.timeline();
    tl.fromTo(".story-title-line span", 
      { y: 100, opacity: 0, rotateX: -30 }, 
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.1, ease: "power4.out", delay: 0.5 }
    ).fromTo(".story-desc", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=1"
    );

    // Mouse Responsive Depth Effect
    const intro = introRef.current;
    const content = document.querySelector('.story-intro-content');
    
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(content, { x, y, duration: 1, ease: "power2.out" });
      gsap.to(bgRef.current, { x: -x/2, y: -y/2, duration: 1, ease: "power2.out" }); // Parallax opposite
    };
    
    intro.addEventListener('mousemove', onMouseMove);
    return () => intro.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section ref={introRef} className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden z-20 bg-bgPrimary">
      <div className="absolute inset-0 z-0 overflow-hidden">
         <img ref={bgRef} src="/video_frames_30fps/frame_0180.jpg" alt="Story Intro" className="w-full h-full object-cover filter contrast-125 opacity-30 mix-blend-screen scale-105 transform origin-center" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bgPrimary/50 to-bgPrimary"></div>
      </div>

      <ParticleOverlay />

      <div className="story-intro-content relative z-10 max-w-5xl px-6 flex flex-col items-center mt-20 md:mt-0">
        <h1 className="font-heading text-5xl md:text-[8rem] lg:text-[10rem] font-bold text-textMain uppercase leading-[0.85] mb-6 md:mb-8 drop-shadow-2xl perspective-1000">
          <div className="story-title-line overflow-hidden pb-2 md:pb-4"><span className="block origin-bottom text-white/50">Every Great</span></div>
          <div className="story-title-line overflow-hidden pb-2 md:pb-4"><span className="block origin-bottom">Story Begins</span></div>
          <div className="story-title-line overflow-hidden"><span className="block origin-bottom text-electricBlue">With A Vision</span></div>
        </h1>
        <p className="story-desc font-body text-lg md:text-3xl text-premiumSilver max-w-3xl leading-relaxed font-light drop-shadow-lg">
          We didn't set out to make another beverage. We set out to create a legacy. Born from the untamed wild, engineered for absolute perfection.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="font-body text-xs uppercase tracking-widest text-premiumSilver mb-2">Discover Our Journey</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-premiumSilver to-transparent"></div>
      </div>
    </section>
  );
}
