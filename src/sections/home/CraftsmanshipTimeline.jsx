import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CraftsmanshipTimeline() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.craft-step').forEach((step, i) => {
      gsap.fromTo(step, 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: step, start: "top 80%" } }
      );
    });
  }, []);

  const steps = [
    { num: '01', title: 'Selection', desc: 'Hand-picked premium hops from high-altitude valleys. We inspect every harvest for perfection.' },
    { num: '02', title: 'Mashing', desc: 'Slow-roasted malts infused with pure glacial spring water to extract deep, robust flavors.' },
    { num: '03', title: 'Fermentation', desc: 'Aged in specialized cold-fermentation tanks for an extended period, ensuring maximum clarity.' },
    { num: '04', title: 'Bottling', desc: 'Sealed with our signature hermetic metallic spring cap under absolute vacuum.' }
  ];

  return (
    <section className="py-20 md:py-40 px-6 md:px-20 bg-bgSecondary overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        
        <div className="w-full md:w-1/3 static md:sticky top-40 self-start z-30 bg-bgSecondary md:bg-transparent pb-4 md:pb-0">
          <span className="font-heading text-xl text-premiumSilver tracking-widest uppercase mb-4 block">The Process</span>
          <h2 className="font-heading text-5xl md:text-8xl text-textMain uppercase leading-[0.9]">Mastery<br/>In Motion</h2>
        </div>

        <div className="w-full md:w-2/3 border-l border-white/10 ml-4 md:ml-0 pl-10 md:pl-20 space-y-20 md:space-y-32">
          {steps.map((item, i) => (
            <div key={i} className="craft-step relative group">
              <div className="absolute -left-[45px] md:-left-[85px] top-2 w-4 h-4 bg-bgSecondary border-2 border-electricBlue rounded-full shadow-glow-blue group-hover:scale-150 group-hover:bg-electricBlue transition-all duration-500"></div>
              
              <span className="font-heading text-8xl text-white/5 absolute -top-12 -left-4 pointer-events-none">{item.num}</span>
              <h3 className="font-heading text-5xl text-white uppercase mb-6 relative z-10">{item.title}</h3>
              <p className="font-body text-xl text-textSecondary font-light max-w-lg relative z-10 leading-relaxed">{item.desc}</p>
              
              <div className="mt-8 overflow-hidden rounded-2xl h-[250px] max-w-md relative">
                <img src={`/video_frames_30fps/frame_01${i+2}0.jpg`} alt={item.title} className="w-full h-full object-cover filter contrast-125 mix-blend-screen opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
