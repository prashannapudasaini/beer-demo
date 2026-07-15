import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SustainCommitment() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Stacked Cards Effect
    const cards = gsap.utils.toArray('.sustain-card');
    
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        id: `sustain-card-${i}`
      });
      
      if (i < cards.length - 1) {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.4,
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
      cards.forEach((_, i) => ScrollTrigger.getById(`sustain-card-${i}`)?.kill());
    };
  }, []);

  const commitments = [
    { title: "Responsible Sourcing", desc: "Every grain, every drop of water is ethically harvested to preserve the natural ecosystem of our region.", bg: "bg-bgPrimary", img: "/video_frames_30fps/frame_0120.jpg" },
    { title: "Efficient Production", desc: "Our facilities operate on 100% renewable solar and wind energy. We leave nothing but a legacy behind.", bg: "bg-[#080d19]", img: "/video_frames_30fps/frame_0180.jpg" },
    { title: "Reduced Impact", desc: "Proprietary recycling loops ensure that waste is entirely eradicated from our brewing process.", bg: "bg-[#040812]", img: "/video_frames_30fps/frame_0200.jpg" },
    { title: "Community Focus", desc: "We reinvest directly into local conservation efforts, ensuring the wilderness remains untamed.", bg: "bg-[#010308]", img: "/video_frames_30fps/frame_0100.jpg" }
  ];

  return (
    <section className="relative z-30 pb-screen">
      {/* Title Section */}
      <div className="h-screen flex flex-col items-center justify-center bg-bgSecondary text-center px-6">
         <span className="font-heading text-xl text-electricBlue tracking-widest uppercase mb-4 block">The Core Pillars</span>
         <h2 className="font-heading text-5xl md:text-9xl text-textMain uppercase leading-[0.9] max-w-4xl">Our Absolute Commitment</h2>
      </div>

      {/* The Cards */}
      <div className="relative">
        {commitments.map((com, i) => (
          <div key={i} className={`sustain-card h-screen w-full ${com.bg} flex items-center justify-center relative overflow-hidden border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}>
             <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen">
               <img src={com.img} alt={com.title} className="w-full h-full object-cover filter contrast-125" />
             </div>
             
             <div className="relative z-10 max-w-5xl px-6 text-center">
                <span className="font-heading text-[12rem] md:text-[20rem] text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">0{i+1}</span>
                <h3 className="font-heading text-6xl md:text-[8rem] text-white uppercase mb-8 relative z-10 drop-shadow-2xl">{com.title}</h3>
                <p className="font-body text-2xl md:text-4xl text-premiumSilver font-light leading-relaxed relative z-10 drop-shadow-lg max-w-3xl mx-auto">
                  {com.desc}
                </p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
