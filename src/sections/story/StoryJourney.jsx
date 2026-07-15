import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StoryJourney() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    const track = trackRef.current;
    if(!container || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    // Horizontal Scroll
    const tl = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollWidth * 1.5}`, // Make scrolling feel longer and smoother
      }
    });

    // Parallax on images inside the horizontal scroll
    gsap.utils.toArray('.journey-img').forEach((img, i) => {
      gsap.to(img, {
        x: 100,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth * 1.5}`,
          scrub: true
        }
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  const chapters = [
    { num: 'I', title: 'The Beginning', desc: 'Born in 1978 in the untamed wilderness of the Pacific Northwest, our founder set out with a singular, uncompromising vision: to capture the raw power of nature in a bottle.', img: '/video_frames_30fps/frame_0050.jpg' },
    { num: 'II', title: 'The Challenge', desc: 'The industry demanded mass production. We demanded perfection. We spent a decade refining our process in isolation, rejecting every shortcut.', img: '/video_frames_30fps/frame_0100.jpg' },
    { num: 'III', title: 'The Breakthrough', desc: 'The discovery of our proprietary cold-fermentation process. By extending the brewing cycle threefold, we achieved an unprecedented level of clarity and bite.', img: '/video_frames_30fps/frame_0150.jpg' },
    { num: 'IV', title: 'The Evolution', desc: 'As our reputation grew among purists, so did our ambition. We engineered the hermetic metallic spring cap, forever changing how premium beverages are sealed.', img: '/video_frames_30fps/frame_0200.jpg' },
    { num: 'V', title: 'Today', desc: 'Decades later, the recipe remains completely unchanged. We are not just a brand; we are a standard of absolute excellence.', img: '/video_frames_30fps/frame_0290.jpg' }
  ];

  return (
    <section ref={containerRef} className="h-screen bg-bgSecondary overflow-hidden flex items-center z-20 relative border-t border-white/5">
      
      <div className="absolute top-20 left-6 md:left-20 z-30">
        <span className="font-heading text-xl text-goldHighlight tracking-widest uppercase mb-4 block">Our Timeline</span>
        <h2 className="font-heading text-6xl text-textMain uppercase leading-[0.9]">The Heritage</h2>
      </div>

      <div ref={trackRef} className="flex gap-40 px-[20vw] h-full items-center pt-20">
        {chapters.map((ch, i) => (
          <div key={i} className="w-[85vw] md:w-[800px] shrink-0 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative">
            <div className="w-full md:w-1/2 relative">
               <span className="font-heading text-[8rem] md:text-[12rem] text-white/5 absolute -top-10 md:-top-16 -left-4 md:-left-16 pointer-events-none">{ch.num}</span>
               <h3 className="font-heading text-4xl md:text-6xl text-white uppercase mb-4 md:mb-6 relative z-10">{ch.title}</h3>
               <p className="font-body text-textSecondary text-lg md:text-xl font-light leading-relaxed relative z-10">{ch.desc}</p>
            </div>
            <div className="w-full md:w-1/2 h-[40vh] md:h-[50vh] overflow-hidden rounded-[2rem] glass-panel relative">
               <img src={ch.img} alt={ch.title} className="journey-img absolute inset-0 w-[120%] h-full object-cover opacity-60 filter contrast-125 mix-blend-screen -left-[10%]" />
            </div>
          </div>
        ))}
        <div className="w-[10vw] shrink-0"></div>
      </div>

    </section>
  );
}
