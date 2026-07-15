import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StoryBeliefs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Stacked Cards Effect
    const cards = gsap.utils.toArray('.belief-card');
    
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        id: `belief-card-${i}`
      });
      
      // Optional: Add a slight scale down or darken effect to the card underneath
      if (i < cards.length - 1) {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        });
      }
    });

    return () => {
      cards.forEach((_, i) => ScrollTrigger.getById(`belief-card-${i}`)?.kill());
    };
  }, []);

  const beliefs = [
    { title: "Craftsmanship", desc: "True luxury is born in the agonizing details. We reject automation in favor of human intuition.", bg: "bg-bgPrimary", img: "/video_frames_30fps/frame_0180.jpg" },
    { title: "Innovation", desc: "Tradition is our foundation, not our anchor. We engineer the future of brewing.", bg: "bg-[#0a0d18]", img: "/video_frames_30fps/frame_0200.jpg" },
    { title: "Quality", desc: "No compromises. If a batch is not absolutely perfect, it never sees the light of day.", bg: "bg-[#050811]", img: "/video_frames_30fps/frame_0250.jpg" },
    { title: "Sustainability", desc: "We take from the wild, and we protect it fiercely. 100% renewable brewing.", bg: "bg-[#02040a]", img: "/video_frames_30fps/frame_0100.jpg" }
  ];

  return (
    <section className="relative z-30 pb-screen">
      {/* Title Section */}
      <div className="h-screen flex items-center justify-center bg-bgSecondary">
         <div className="text-center">
            <span className="font-heading text-xl text-electricBlue tracking-widest uppercase mb-4 block">The Philosophy</span>
            <h2 className="font-heading text-7xl md:text-9xl text-textMain uppercase leading-[0.9]">What We<br/>Believe</h2>
         </div>
      </div>

      {/* The Cards */}
      <div className="relative">
        {beliefs.map((belief, i) => (
          <div key={i} className={`belief-card h-screen w-full ${belief.bg} flex items-center justify-center relative overflow-hidden border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}>
             <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
               <img src={belief.img} alt={belief.title} className="w-full h-full object-cover filter contrast-150" />
             </div>
             
             <div className="relative z-10 max-w-5xl px-6 text-center">
                <span className="font-heading text-[12rem] md:text-[20rem] text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">0{i+1}</span>
                <h3 className="font-heading text-6xl md:text-[8rem] text-white uppercase mb-8 relative z-10 drop-shadow-2xl">{belief.title}</h3>
                <p className="font-body text-2xl md:text-4xl text-premiumSilver font-light leading-relaxed relative z-10 drop-shadow-lg">
                  {belief.desc}
                </p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
