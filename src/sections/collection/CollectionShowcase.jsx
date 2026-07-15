import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CollectionShowcase() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    const track = trackRef.current;
    if(!container || !track) return;

    // We have 7 items. The scroll width needs to shift them horizontally.
    const scrollWidth = track.scrollWidth - window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: container,
      pin: true,
      scrub: 1,
      start: "top top",
      end: () => `+=${scrollWidth * 1.5}`, // 600vh feel
      animation: gsap.to(track, {
        x: -scrollWidth,
        ease: "none"
      })
    });

    // Individual item animations (based on their position in viewport)
    // We can use containerAnimation to trigger GSAP timelines when items enter the viewport horizontally!
    
    const items = gsap.utils.toArray('.showcase-item');
    items.forEach((item, i) => {
      const img = item.querySelector('.showcase-img');
      const text = item.querySelector('.showcase-text');
      
      // Different entrance animations for each product
      let imgAnim = { scale: 1, rotate: 0, opacity: 1, filter: "brightness(1)" };
      let imgFrom = { scale: 0.8, rotate: 0, opacity: 0, filter: "brightness(0.5)" };
      
      if (i === 1) imgFrom = { ...imgFrom, scale: 1, filter: "brightness(0)" }; // Spotlight
      if (i === 2) imgFrom = { ...imgFrom, rotate: -15 }; // Rotate
      if (i === 3) imgFrom = { ...imgFrom, x: -100 }; // Slide
      if (i === 4) imgFrom = { ...imgFrom, scale: 1.5 }; // Zoom
      if (i === 5) imgFrom = { ...imgFrom, y: 100 }; // Bottom up
      if (i === 6) imgFrom = { ...imgFrom, scale: 0.5, rotate: 10 }; // Final pop

      gsap.fromTo(img, imgFrom, {
        ...imgAnim,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          containerAnimation: st.animation,
          start: "left center", // when the left side of the item hits the center of the viewport
          end: "right center",
          scrub: true,
        }
      });
      
      // Text reveals
      gsap.fromTo(text, 
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, ease: "power2.out", 
          scrollTrigger: {
            trigger: item,
            containerAnimation: st.animation,
            start: "left 70%",
            end: "center center",
            scrub: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
         if(t.vars.trigger === container || (t.vars.containerAnimation === st.animation)) {
            t.kill();
         }
      });
    };
  }, []);

  const products = [
    { title: 'The Genesis', desc: 'Where it all began. The purest expression of our craft, balanced and bold.', img: '/video_frames_30fps/frame_0180.jpg', color: 'electricBlue' },
    { title: 'Midnight Reserve', desc: 'Roasted to absolute darkness. A complex profile of coffee and raw cacao.', img: '/video_frames_30fps/frame_0200.jpg', color: 'orangeFlame' },
    { title: 'Glacial Pilsner', desc: 'Crisp, biting, and refreshing. Brewed exclusively with meltwater.', img: '/video_frames_30fps/frame_0210.jpg', color: 'white' },
    { title: 'Amber Howl', desc: 'A malty, rich amber ale with a smooth caramel finish and wild aromatics.', img: '/video_frames_30fps/frame_0250.jpg', color: 'goldHighlight' },
    { title: 'Alpha IPA', desc: 'Unapologetically hoppy. A sharp, citrus-forward bite that commands attention.', img: '/video_frames_30fps/frame_0270.jpg', color: 'electricBlue' },
    { title: 'Winter Solstice', desc: 'A heavy, spiced stout engineered to conquer the longest nights.', img: '/video_frames_30fps/frame_0280.jpg', color: 'orangeFlame' },
    { title: 'The Apex', desc: 'Our masterpiece. A limited batch barrel-aged in oak for an entire decade.', img: '/video_frames_30fps/frame_0290.jpg', color: 'white' }
  ];

  return (
    <section ref={containerRef} className="h-screen bg-bgSecondary overflow-hidden flex items-center z-20 relative border-t border-white/5">
      
      <div className="absolute top-10 left-6 md:left-20 z-30 pointer-events-none">
        <span className="font-heading text-xl text-premiumSilver tracking-widest uppercase block">Digital Showroom</span>
      </div>

      <div ref={trackRef} className="flex h-full items-center pl-[10vw]">
        {products.map((p, i) => (
          <div key={i} className="showcase-item w-[100vw] shrink-0 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 h-full relative">
             
             {/* Background glow specific to product */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 transition-opacity duration-1000"></div>

             <div className="w-full md:w-1/2 flex justify-center items-center h-full relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-white opacity-5 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
                <img src={p.img} alt={p.title} className="showcase-img h-[40vh] md:h-[80vh] object-cover mix-blend-screen filter contrast-125 drop-shadow-2xl relative z-10" />
             </div>
             
             <div className="w-full md:w-1/2 showcase-text flex flex-col justify-center">
                <span className="font-heading text-sm md:text-xl tracking-widest uppercase mb-2 md:mb-4 block opacity-50" style={{ color: p.color === 'white' ? 'white' : `var(--color-${p.color})` }}>
                  0{i+1} — {i === 6 ? 'Masterpiece' : 'Signature Series'}
                </span>
                <h2 className="font-heading text-4xl md:text-8xl text-white uppercase leading-[0.9] mb-4 md:mb-6 drop-shadow-lg">{p.title}</h2>
                <p className="font-body text-lg md:text-2xl text-premiumSilver font-light leading-relaxed max-w-lg mb-6 md:mb-10">
                  {p.desc}
                </p>
                <div className="flex gap-6 md:gap-10 border-t border-white/10 pt-6 md:pt-8 max-w-sm">
                   <div>
                     <span className="font-body text-[10px] md:text-xs uppercase tracking-widest text-textSecondary block mb-1">Volume</span>
                     <span className="font-heading text-xl md:text-2xl text-white">750ML</span>
                   </div>
                   <div>
                     <span className="font-body text-[10px] md:text-xs uppercase tracking-widest text-textSecondary block mb-1">Availability</span>
                     <span className="font-heading text-xl md:text-2xl text-white">In Stock</span>
                   </div>
                </div>
             </div>

          </div>
        ))}
      </div>

    </section>
  );
}
