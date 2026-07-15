import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Experience() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax on the background image
    gsap.fromTo(imgRef.current, 
      { y: -100 }, 
      { y: 100, ease: "none", scrollTrigger: { trigger: ".exp-section", scrub: true } }
    );

    gsap.fromTo('.exp-content', 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: ".exp-section", start: "top 60%" } }
    );
  }, []);

  return (
    <section className="exp-section relative py-[30vh] px-6 md:px-20 text-center overflow-hidden z-20 flex items-center justify-center border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img ref={imgRef} src="/video_frames_30fps/frame_0150.jpg" alt="Experience" className="w-full h-[130%] object-cover opacity-20 filter contrast-125 mix-blend-screen scale-110" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-bgPrimary z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-20 exp-content">
         <h2 className="font-heading text-7xl md:text-[8rem] lg:text-[10rem] text-white uppercase leading-[0.8] mb-12 text-glow-blue drop-shadow-2xl mix-blend-screen">
           A Taste That<br/>Ignites The Senses
         </h2>
         <p className="font-body text-2xl md:text-4xl text-premiumSilver font-light leading-relaxed drop-shadow-lg">
           Forged for those who lead the pack, conquer the night, and demand absolute excellence in every fleeting moment.
         </p>
      </div>
    </section>
  );
}
