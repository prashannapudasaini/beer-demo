import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Legacy() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.legacy-img', 
      { y: -50 }, 
      { y: 50, ease: "none", scrollTrigger: { trigger: ".legacy-section", scrub: true } }
    );

    gsap.fromTo('.legacy-content > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: ".legacy-section", start: "top 60%" } }
    );
  }, []);

  return (
    <section className="legacy-section relative bg-bgPrimary py-32 px-6 md:px-20 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-20">
        <div className="w-full md:w-1/2 h-[70vh] rounded-3xl overflow-hidden relative glass-panel">
          <img src="/video_frames_30fps/frame_0120.jpg" alt="Legacy" className="legacy-img absolute inset-0 w-full h-[120%] object-cover opacity-70 filter contrast-125 mix-blend-screen -top-[10%]" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center legacy-content">
          <span className="font-heading text-xl text-orangeFlame tracking-widest uppercase mb-4 block">The Heritage</span>
          <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9] mb-10">Forged In Wilderness</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl text-white uppercase mb-2">The Origins</h3>
              <p className="font-body text-textSecondary font-light leading-relaxed">It began decades ago in the dense, untamed forests of the Pacific Northwest. A quest to brew something that captured the raw intensity of nature itself.</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl text-white uppercase mb-2">The Vision</h3>
              <p className="font-body text-textSecondary font-light leading-relaxed">We rejected the mass-produced, diluted formulas of the era. Our vision was uncompromising: a premium brew that demanded respect.</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl text-white uppercase mb-2">The Journey</h3>
              <p className="font-body text-textSecondary font-light leading-relaxed">Every bottle is the culmination of generations of master brewers refining a single, perfect recipe. It is not just beer; it is legacy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
