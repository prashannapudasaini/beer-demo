import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Awards() {
  const trackRef = useRef(null);

  useEffect(() => {
    // Endless marquee animation
    const track = trackRef.current;
    if (!track) return;

    gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    });
  }, []);

  const awards = [
    "Awwwards Site of the Day",
    "FWA of the Day",
    "The Lovie Awards - Gold",
    "Webby Nominee",
    "CSS Design Awards",
    "Global Brewing Excellence",
    "Awwwards Site of the Day", // Duplicated for seamless loop
    "FWA of the Day",
    "The Lovie Awards - Gold",
    "Webby Nominee",
    "CSS Design Awards",
    "Global Brewing Excellence"
  ];

  return (
    <section className="py-20 bg-bgPrimary border-y border-white/5 overflow-hidden z-20 relative flex items-center">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-bgPrimary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-bgPrimary to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex gap-20 items-center whitespace-nowrap" ref={trackRef}>
        {awards.map((award, i) => (
          <div key={i} className="flex items-center gap-6">
             <div className="w-2 h-2 bg-premiumSilver rounded-full"></div>
             <span className="font-heading text-2xl md:text-4xl text-premiumSilver uppercase tracking-widest opacity-50">{award}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
