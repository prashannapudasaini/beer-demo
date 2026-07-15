import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../../components/MagneticButton.jsx';
import { Link } from 'react-router-dom';

export default function SignatureCollection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo('.sig-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".sig-section", start: "top 70%" } }
    );

    gsap.utils.toArray('.sig-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, delay: i * 0.2, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%" } }
      );
    });
  }, []);

  const beers = [
    { title: 'Midnight Stout', desc: 'Roasted coffee and dark chocolate notes.', color: 'from-orangeFlame to-red-900', img: '/video_frames_30fps/frame_0180.jpg' },
    { title: 'Arctic Pilsner', desc: 'Glacial water and noble hops.', color: 'from-electricBlue to-blue-900', img: '/video_frames_30fps/frame_0290.jpg' }
  ];

  return (
    <section className="sig-section py-40 px-6 md:px-20 bg-bgPrimary z-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="sig-title flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <span className="font-heading text-xl text-goldHighlight tracking-widest uppercase mb-4 block">The Portfolio</span>
            <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9]">Signature Brews</h2>
          </div>
          <Link to="/collection" className="font-body text-electricBlue uppercase tracking-widest text-sm font-bold hover:text-white transition-colors mt-6 md:mt-0">
            View All Series →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {beers.map((beer, i) => (
            <div key={i} className="sig-card group relative cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-tr ${beer.color} opacity-0 group-hover:opacity-20 blur-[80px] rounded-[3rem] transition-opacity duration-700 pointer-events-none`}></div>
              
              <div className="glass-panel p-10 rounded-[3rem] overflow-hidden flex flex-col aspect-[4/5] relative">
                <div className="absolute inset-0 z-0">
                  <img src={beer.img} alt={beer.title} className="w-full h-full object-cover filter contrast-125 mix-blend-screen opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-heading text-7xl text-white/20 group-hover:text-electricBlue transition-colors duration-500">0{i+1}</span>
                    <MagneticButton className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-bgPrimary transition-colors">
                      <span className="transform -rotate-45 font-bold">→</span>
                    </MagneticButton>
                  </div>
                  <div>
                    <h3 className="font-heading text-5xl text-white uppercase mb-4">{beer.title}</h3>
                    <p className="font-body text-textSecondary text-lg font-light">{beer.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
