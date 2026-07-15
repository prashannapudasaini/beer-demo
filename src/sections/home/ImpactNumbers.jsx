import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ImpactNumbers() {
  const countersRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    countersRef.current.forEach((counter) => {
      if (!counter) return;
      const targetValue = parseInt(counter.getAttribute('data-target'));
      
      ScrollTrigger.create({
        trigger: counter,
        start: "top 80%",
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: targetValue,
            duration: 3,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function() {
              const val = Math.round(this.targets()[0].innerHTML);
              counter.innerHTML = val.toLocaleString() + (counter.getAttribute('data-suffix') || '');
            }
          });
        },
        once: true
      });
    });

    gsap.utils.toArray('.impact-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: "power3.out", scrollTrigger: { trigger: ".impact-grid", start: "top 75%" } }
      );
    });
  }, []);

  const stats = [
    { target: 48, suffix: '', title: 'Years of Experience', desc: 'Brewing perfection since 1978.' },
    { target: 2000000, suffix: '+', title: 'Bottles Crafted', desc: 'Delivered to those who demand the best.' },
    { target: 15, suffix: 'x', title: 'Global Awards', desc: 'Recognized for absolute excellence.' },
    { target: 100, suffix: '%', title: 'Quality Guarantee', desc: 'No compromises, ever.' }
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-bgSecondary z-20 relative">
      <div className="max-w-7xl mx-auto text-center impact-grid">
        <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9] mb-20">The Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="impact-card glass-panel p-10 rounded-[2rem] flex flex-col items-center justify-center group hover:bg-white/5 transition-colors">
              <h3 
                ref={el => countersRef.current[i] = el}
                data-target={stat.target}
                data-suffix={stat.suffix}
                className="font-heading text-7xl text-electricBlue mb-4 group-hover:scale-110 transition-transform duration-500"
              >
                0
              </h3>
              <span className="font-body text-sm uppercase tracking-widest text-white font-bold mb-2">{stat.title}</span>
              <p className="font-body text-xs text-textSecondary/60 font-light px-4">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
