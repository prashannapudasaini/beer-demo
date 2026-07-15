import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import MagneticButton from '../../components/MagneticButton.jsx';

export default function SustainabilityPreview() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.sus-prev-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: ".sus-prev-section", start: "top 60%" } }
    );
  }, []);

  return (
    <section className="sus-prev-section relative py-40 px-6 md:px-20 bg-bgSecondary overflow-hidden z-20">
      <div className="absolute inset-0 bg-[url('/video_frames_30fps/frame_0100.jpg')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10 sus-prev-content">
        <div className="w-full md:w-1/2">
          <span className="font-heading text-xl text-accentBlue tracking-widest uppercase mb-4 block">Our Commitment</span>
          <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9] mb-8">Return To<br/>The Wild</h2>
          <p className="font-body text-xl text-textSecondary font-light leading-relaxed mb-10 max-w-lg">
            We draw our power from nature, and we ensure that power is returned. 100% renewable energy, infinite glass recycling, and active forest conservation.
          </p>
          <Link to="/sustainability">
            <MagneticButton className="px-10 py-4 bg-transparent border border-white/20 text-white font-body text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-bgPrimary transition-colors">
              Read Our Report
            </MagneticButton>
          </Link>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
           <div className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center aspect-square mt-10 hover:bg-white/5 transition-colors">
             <h4 className="font-heading text-5xl text-electricBlue mb-2">100%</h4>
             <span className="font-body text-sm uppercase tracking-widest text-textSecondary">Solar Powered</span>
           </div>
           <div className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center aspect-square hover:bg-white/5 transition-colors">
             <h4 className="font-heading text-5xl text-orangeFlame mb-2">0</h4>
             <span className="font-body text-sm uppercase tracking-widest text-textSecondary">Carbon Footprint</span>
           </div>
        </div>
      </div>
    </section>
  );
}
