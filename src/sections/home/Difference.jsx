import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Difference() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    const track = trackRef.current;
    if(!container || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollWidth}`,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const points = [
    { num: '01', title: 'Craftsmanship', desc: 'No shortcuts. Only the slow, meticulous perfection of ancient brewing arts.' },
    { num: '02', title: 'Quality', desc: 'Sourced from altitude-grown hops and untouched glacial springs.' },
    { num: '03', title: 'Innovation', desc: 'Using proprietary hermetic sealing to trap absolute freshness.' },
    { num: '04', title: 'Design', desc: 'A bottle engineered to feel substantial, powerful, and undeniably premium.' },
    { num: '05', title: 'Experience', desc: 'Not meant for casual drinking. Forged for those who demand excellence.' }
  ];

  return (
    <section ref={containerRef} className="h-screen bg-bgSecondary overflow-hidden flex items-center z-20 relative">
      <div className="absolute top-20 left-6 md:left-20 z-30">
        <span className="font-heading text-xl text-electricBlue tracking-widest uppercase mb-4 block">The Distinction</span>
        <h2 className="font-heading text-6xl text-textMain uppercase leading-[0.9]">Why We Stand Apart</h2>
      </div>

      <div ref={trackRef} className="flex gap-40 px-[20vw] h-full items-center pt-20">
        {points.map((pt, i) => (
          <div key={i} className="w-[400px] shrink-0 relative group">
            <span className="font-heading text-[12rem] text-white/5 absolute -top-20 -left-10 pointer-events-none group-hover:text-white/10 transition-colors duration-500">{pt.num}</span>
            <h3 className="font-heading text-6xl text-white uppercase mb-6 relative z-10">{pt.title}</h3>
            <p className="font-body text-textSecondary text-xl font-light leading-relaxed relative z-10">{pt.desc}</p>
            <div className="w-full h-[2px] bg-white/10 mt-10 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-electricBlue w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        ))}
        <div className="w-[10vw] shrink-0"></div>
      </div>
    </section>
  );
}
