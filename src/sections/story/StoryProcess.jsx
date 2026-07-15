import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StoryProcess() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Crossfade pinned images based on right-side scroll
    const blocks = gsap.utils.toArray('.process-block');
    const images = gsap.utils.toArray('.process-img');

    blocks.forEach((block, i) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(images, { opacity: 0, duration: 0.5 });
          gsap.to(images[i], { opacity: 1, duration: 0.5, scale: 1, ease: "power2.out" });
        },
        onEnterBack: () => {
          gsap.to(images, { opacity: 0, duration: 0.5 });
          gsap.to(images[i], { opacity: 1, duration: 0.5, scale: 1, ease: "power2.out" });
        }
      });
      
      // Initial state of images (scale down slightly)
      gsap.set(images[i], { scale: 1.1 });
    });

    // Right-side text reveals
    blocks.forEach((block) => {
      gsap.fromTo(block.querySelectorAll('h3, p'), 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: block, start: "top 75%" } }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger && t.trigger.classList && t.trigger.classList.contains('process-block')) {
           t.kill();
        }
      });
    };
  }, []);

  const steps = [
    { title: "Attention To Detail", desc: "Every single element, from the viscosity of the liquid to the sound of the cap breaking the hermetic seal, is mathematically perfected.", img: "/video_frames_30fps/frame_0180.jpg" },
    { title: "Design Thinking", desc: "The bottle is not just a container; it is an architectural marvel designed to feel substantial and powerful in the hand.", img: "/video_frames_30fps/frame_0200.jpg" },
    { title: "Precision Process", desc: "Temperatures are controlled to the exact decimal. Fermentation timing is precise to the second. Nothing is left to chance.", img: "/video_frames_30fps/frame_0250.jpg" },
    { title: "Continuous Improvement", desc: "Our recipe was perfected decades ago, yet we continue to refine our methodology, pushing the absolute limits of brewing science.", img: "/video_frames_30fps/frame_0280.jpg" },
    { title: "Future Innovation", desc: "We are currently pioneering new methods of sustainable brewing that will redefine the industry standard for the next century.", img: "/video_frames_30fps/frame_0290.jpg" }
  ];

  return (
    <section className="relative w-full bg-bgPrimary flex flex-col md:flex-row z-30">
      
      {/* Left Pinned Imagery */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 overflow-hidden hidden md:block">
         <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-transparent to-bgPrimary z-10 pointer-events-none mix-blend-multiply"></div>
         {steps.map((step, i) => (
           <img 
             key={i} 
             src={step.img} 
             alt={step.title} 
             className={`process-img absolute inset-0 w-full h-full object-cover filter contrast-125 opacity-0 ${i === 0 ? 'opacity-100' : ''}`} 
           />
         ))}
      </div>

      {/* Right Scrolling Content */}
      <div className="w-full md:w-1/2 py-[20vh] px-6 md:px-20">
         <div className="mb-40">
            <span className="font-heading text-xl text-orangeFlame tracking-widest uppercase mb-4 block">The Methodology</span>
            <h2 className="font-heading text-6xl md:text-8xl text-textMain uppercase leading-[0.9]">Making Of<br/>Excellence</h2>
         </div>

         <div className="space-y-[30vh]">
            {steps.map((step, i) => (
              <div key={i} className="process-block relative border-l border-white/10 pl-10 md:pl-16">
                 <div className="absolute left-0 top-2 -translate-x-[50%] w-3 h-3 bg-white/20 rounded-full border border-white/50"></div>
                 <h3 className="font-heading text-4xl md:text-5xl text-white uppercase mb-6">{step.title}</h3>
                 <p className="font-body text-xl text-textSecondary font-light leading-relaxed max-w-lg">{step.desc}</p>
                 
                 {/* Mobile Image Fallback */}
                 <div className="block md:hidden mt-10 rounded-2xl overflow-hidden glass-panel">
                   <img src={step.img} alt={step.title} className="w-full h-[30vh] object-cover mix-blend-screen opacity-70" />
                 </div>
              </div>
            ))}
         </div>
      </div>
      
    </section>
  );
}
