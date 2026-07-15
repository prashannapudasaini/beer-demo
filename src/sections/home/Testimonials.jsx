import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Testimonials() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.test-header',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".test-section", start: "top 70%" } }
    );

    gsap.utils.toArray('.test-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 80%" } }
      );
    });
  }, []);

  const reviews = [
    { text: "A revelation in modern brewing. It commands the palate with an authority rarely seen in the industry.", author: "The Beverage Chronicle", role: "Editorial Review" },
    { text: "Uncompromising from the first pour to the last drop. It redefines what a premium experience should be.", author: "Alexander Sterling", role: "Master Sommelier" }
  ];

  return (
    <section className="test-section py-40 px-6 md:px-20 bg-bgPrimary z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="test-header text-center mb-24">
          <span className="font-heading text-xl text-premiumSilver tracking-widest uppercase mb-4 block">The Verdict</span>
          <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9]">Voices Of<br/>Authority</h2>
        </div>

        <div className="space-y-20">
          {reviews.map((rev, i) => (
            <div key={i} className={`test-card flex flex-col md:flex-row gap-10 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-2/3 glass-panel p-16 rounded-[3rem] relative group hover:bg-white/5 transition-colors">
                <span className="absolute top-10 left-10 font-heading text-[8rem] text-white/10 leading-none pointer-events-none group-hover:-translate-y-4 transition-transform duration-500">"</span>
                <p className="font-heading text-4xl md:text-5xl text-white leading-tight relative z-10">{rev.text}</p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left px-10">
                <h4 className="font-heading text-3xl text-orangeFlame uppercase mb-2">{rev.author}</h4>
                <span className="font-body text-sm uppercase tracking-widest text-textSecondary">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
