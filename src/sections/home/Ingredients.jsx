import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Ingredients() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.ing-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".ing-section", start: "top 70%" } }
    );

    gsap.utils.toArray('.ing-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, delay: i * 0.15, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%" } }
      );
    });
  }, []);

  const items = [
    { metric: '100%', title: 'Natural', desc: 'No additives, no shortcuts. Just pure ingredients from the earth.', color: 'text-white' },
    { metric: '0%', title: 'Preservatives', desc: 'Absolute freshness ensured through our sealing technology.', color: 'text-electricBlue' },
    { metric: '3x', title: 'Filtered', desc: 'Glacial water pushed through carbon filters for absolute clarity.', color: 'text-orangeFlame' },
    { metric: '42°', title: 'Serve Temp', desc: 'The exact temperature where the aromatics are perfectly unleashed.', color: 'text-white' }
  ];

  return (
    <section className="ing-section py-40 px-6 md:px-20 bg-bgPrimary relative z-20 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,theme('colors.electricBlue')_0%,transparent_50%)] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 relative">
          {items.map((item, i) => (
            <div key={i} className={`ing-card glass-panel p-10 rounded-[2rem] flex flex-col justify-center items-center text-center aspect-square group hover:bg-white/10 transition-colors ${i === 1 || i === 3 ? 'mt-10' : ''}`}>
              <h4 className={`font-heading text-6xl mb-4 ${item.color} group-hover:scale-110 transition-transform duration-500`}>{item.metric}</h4>
              <span className="font-body text-sm uppercase tracking-widest text-textSecondary font-bold mb-2">{item.title}</span>
              <p className="font-body text-xs text-textSecondary/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-6 px-4">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 ing-title pl-0 md:pl-10">
          <span className="font-heading text-xl text-goldHighlight tracking-widest uppercase mb-4 block">Pure Elements</span>
          <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9] mb-8">Uncompromised Quality</h2>
          <p className="font-body text-xl text-textSecondary leading-relaxed font-light mb-8">
            We believe that the final product is only as good as its raw ingredients. There are absolutely no shortcuts in our brewery.
          </p>
          <p className="font-body text-lg text-textSecondary leading-relaxed font-light">
            Each batch begins with glacial spring water, drawn from aquifers deep beneath the surface, ensuring a crispness that city water can never replicate.
          </p>
        </div>

      </div>
    </section>
  );
}
