import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SustainImpact() {
  const countersRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    countersRef.current.forEach((counter) => {
      if (!counter) return;
      const targetValue = parseInt(counter.getAttribute('data-target'));
      
      ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: targetValue,
            duration: 2.5,
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

    gsap.utils.toArray('.impact-row').forEach((row) => {
      const line = row.querySelector('.impact-line');
      const content = row.querySelector('.impact-content');

      gsap.fromTo(line, 
        { width: "0%" }, 
        { width: "100%", duration: 1.5, ease: "power3.inOut", scrollTrigger: { trigger: row, start: "top 80%" } }
      );

      gsap.fromTo(content,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out", scrollTrigger: { trigger: row, start: "top 80%" } }
      );
    });

  }, []);

  const impacts = [
    { target: 50, suffix: '%', title: 'Reduced Waste', desc: 'Through aggressive closed-loop recycling.' },
    { target: 100, suffix: '%', title: 'Recyclable', desc: 'Every single component of our packaging.' },
    { target: 30, suffix: '%', title: 'Energy Efficiency', desc: 'Improvement in brewing operations over the last decade.' },
    { target: 10, suffix: 'K+', title: 'Community Impact', desc: 'Hours donated to local forest conservation annually.' }
  ];

  return (
    <section className="py-20 md:py-40 px-6 md:px-20 bg-bgPrimary z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <span className="font-heading text-xl text-orangeFlame tracking-widest uppercase mb-4 block">The Metrics</span>
          <h2 className="font-heading text-5xl md:text-8xl text-textMain uppercase leading-[0.9]">Measurable<br/>Impact</h2>
        </div>

        <div className="flex flex-col">
          {impacts.map((imp, i) => (
            <div key={i} className="impact-row relative w-full pt-10 pb-20">
              <div className="impact-line absolute top-0 left-0 h-[2px] bg-white/20 w-0">
                 <div className="absolute top-0 left-0 h-full bg-electricBlue w-1/4"></div>
              </div>
              
              <div className="impact-content flex flex-col md:flex-row items-baseline gap-10 md:gap-20">
                <h3 
                  ref={el => countersRef.current[i] = el}
                  data-target={imp.target}
                  data-suffix={imp.suffix}
                  className="font-heading text-[5rem] md:text-[12rem] text-white leading-none tracking-tighter"
                >
                  0
                </h3>
                <div className="flex flex-col justify-end pb-4">
                  <h4 className="font-heading text-4xl md:text-6xl text-premiumSilver uppercase mb-2">{imp.title}</h4>
                  <p className="font-body text-xl text-textSecondary font-light">{imp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
