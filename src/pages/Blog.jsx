import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Blog() {
  useEffect(() => {
    // Simple editorial fade in
    gsap.fromTo('.blog-fade', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-bgPrimary min-h-screen pt-32 pb-20 px-6 font-body">
      
      {/* SECTION 1 - BLOG HERO (Featured Article) */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="blog-fade mb-16 text-center md:text-left">
          <span className="font-heading text-xl text-electricBlue tracking-widest uppercase mb-4 block">Editorial</span>
          <h1 className="font-heading text-6xl md:text-8xl text-textMain uppercase drop-shadow-md">
            Stories & Insights
          </h1>
        </div>

        <div className="blog-fade relative group cursor-pointer rounded-[2rem] overflow-hidden glass-panel">
           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
           <img 
             src="/video_frames_30fps/frame_0180.jpg" 
             alt="Featured Article" 
             className="w-full h-[60vh] object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out" 
           />
           <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
              <span className="bg-electricBlue text-white px-4 py-1 text-xs uppercase font-bold tracking-widest rounded-full mb-6 inline-block">Innovation</span>
              <h2 className="font-heading text-4xl md:text-6xl text-white uppercase mb-4 group-hover:text-goldHighlight transition-colors duration-300">
                The Science of Absolute Perfection
              </h2>
              <p className="text-lg md:text-xl text-premiumSilver font-light max-w-3xl mb-6">
                An exclusive look into our proprietary cold-fermentation process and how we spent a decade refining a methodology that the industry said was impossible.
              </p>
              <div className="flex gap-6 text-sm text-textSecondary uppercase tracking-widest font-semibold">
                <span>By The Master Brewer</span>
                <span>•</span>
                <span>Oct 12, 2026</span>
                <span>•</span>
                <span>8 Min Read</span>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2 - FEATURED ARTICLES (Editorial Masonry) */}
      <section className="max-w-7xl mx-auto mb-32">
        <h3 className="blog-fade font-heading text-4xl text-white uppercase mb-12 border-b border-white/10 pb-4">Latest Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Large Card (Left) */}
          <div className="blog-fade md:col-span-7 group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-6 h-[400px]">
              <img src="/video_frames_30fps/frame_0100.jpg" alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-125" />
            </div>
            <span className="text-orangeFlame text-xs uppercase tracking-widest font-bold block mb-3">Sustainability</span>
            <h4 className="font-heading text-4xl text-white uppercase mb-3 group-hover:text-electricBlue transition-colors">100% Renewable Brewing</h4>
            <p className="text-premiumSilver font-light mb-4">How we transitioned our entire facility to run on wind and solar without compromising a single drop.</p>
            <span className="text-sm text-textSecondary uppercase tracking-widest">Oct 05, 2026</span>
          </div>

          {/* Medium Stack (Right) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
             <div className="blog-fade group cursor-pointer flex gap-6 items-center">
                <div className="w-1/2 h-[200px] overflow-hidden rounded-2xl shrink-0">
                   <img src="/video_frames_30fps/frame_0200.jpg" alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-125" />
                </div>
                <div>
                   <span className="text-goldHighlight text-xs uppercase tracking-widest font-bold block mb-2">Heritage</span>
                   <h4 className="font-heading text-2xl text-white uppercase mb-2 group-hover:text-electricBlue transition-colors">The Hermetic Seal</h4>
                   <span className="text-xs text-textSecondary uppercase tracking-widest block mt-4">Sep 28, 2026</span>
                </div>
             </div>

             <div className="blog-fade group cursor-pointer flex gap-6 items-center border-t border-white/10 pt-8">
                <div className="w-1/2 h-[200px] overflow-hidden rounded-2xl shrink-0">
                   <img src="/video_frames_30fps/frame_0280.jpg" alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-125" />
                </div>
                <div>
                   <span className="text-white text-xs uppercase tracking-widest font-bold block mb-2">Culture</span>
                   <h4 className="font-heading text-2xl text-white uppercase mb-2 group-hover:text-electricBlue transition-colors">Winter Solstice Release</h4>
                   <span className="text-xs text-textSecondary uppercase tracking-widest block mt-4">Sep 15, 2026</span>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 - INSIGHTS & NEWS (Horizontal List) */}
      <section className="max-w-7xl mx-auto">
        <h3 className="blog-fade font-heading text-4xl text-white uppercase mb-12 border-b border-white/10 pb-4">More Insights</h3>
        
        <div className="flex flex-col">
          {
            [
              { cat: "News", title: "Global Expansion: New Markets Unlocking in 2027", date: "Sep 02, 2026" },
              { cat: "Design", title: "The Architecture of the Glass: Designing for Weight", date: "Aug 20, 2026" },
              { cat: "Community", title: "Rewilding the Northwest: Our Annual Report", date: "Aug 11, 2026" },
              { cat: "Innovation", title: "Why We Rejected Automation in the Aging Process", date: "Jul 29, 2026" }
            ].map((item, i) => (
              <div key={i} className="blog-fade group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/5 hover:border-white/20 transition-colors cursor-pointer">
                 <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                    <span className="text-electricBlue text-xs uppercase tracking-widest font-bold w-24">{item.cat}</span>
                    <h4 className="font-heading text-2xl md:text-3xl text-premiumSilver uppercase group-hover:text-white transition-colors">{item.title}</h4>
                 </div>
                 <span className="text-sm text-textSecondary uppercase tracking-widest mt-4 md:mt-0">{item.date}</span>
              </div>
            ))
          }
        </div>
        
        <div className="mt-16 text-center blog-fade">
          <button className="px-10 py-4 border border-white/20 rounded-full font-body text-sm uppercase font-bold tracking-widest text-white hover:bg-white hover:text-bgPrimary transition-all duration-300">
            Load More Stories
          </button>
        </div>
      </section>

    </div>
  );
}
