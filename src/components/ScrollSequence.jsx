import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    
    const context = canvas.getContext('2d');
    const frameCount = 300;
    
    const currentFrame = (index) => 
      `/video_frames_30fps/frame_${(index + 1).toString().padStart(4, '0')}.jpg`;

    const images = [];
    const frames = { frame: 0 };

    // Preload
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      if (!images[frames.frame]) return;
      const img = images[frames.frame];
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    images[0].onload = render;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // The Master Timeline for the 800vh section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=8000",
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    // 1. Animate Frames across the entire timeline
    tl.to(frames, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
      duration: 100 // Abstract duration, represents 100% of scroll
    }, 0);

    // 2. Animate Chapters Overlay Texts
    // We have 5 chapters, we distribute them across the timeline duration (0 to 100)
    
    const chapters = textRefs.current;
    
    // Chapter 1 (0 to 15)
    if(chapters[0]) {
      tl.to(chapters[0], { opacity: 1, y: 0, duration: 2 }, 2);
      tl.to(chapters[0], { opacity: 0, y: -50, duration: 2 }, 15);
    }
    
    // Chapter 2 (20 to 35)
    if(chapters[1]) {
      tl.fromTo(chapters[1], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 }, 20);
      tl.to(chapters[1], { opacity: 0, y: -50, duration: 2 }, 35);
    }

    // Chapter 3 (40 to 60) Exploded view area
    if(chapters[2]) {
      tl.fromTo(chapters[2], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 }, 40);
      tl.to(chapters[2], { opacity: 0, y: -50, duration: 2 }, 60);
    }

    // Chapter 4 (65 to 80) Reassembly
    if(chapters[3]) {
      tl.fromTo(chapters[3], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 }, 65);
      tl.to(chapters[3], { opacity: 0, y: -50, duration: 2 }, 80);
    }

    // Chapter 5 (85 to 100) Final Reveal
    if(chapters[4]) {
      tl.fromTo(chapters[4], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 }, 85);
      tl.to(chapters[4], { opacity: 0, y: -50, duration: 2 }, 98);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const chapterTexts = [
    { title: "The Philosophy", subtitle: "Born from the wild. Crafted for legends." },
    { title: "The Uncompromising", subtitle: "Engineered to stand entirely apart." },
    { title: "Mastery of Craft", subtitle: "Every single detail, perfected." },
    { title: "The Anatomy", subtitle: "Stripped down to absolute truth." },
    { title: "The Final Form", subtitle: "Your premium experience awaits." }
  ];

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-bgPrimary overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover filter contrast-[1.15] saturate-[1.1] z-0"></canvas>
      
      {/* Overlay Chapters */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        {chapterTexts.map((chapter, index) => (
          <div 
            key={index} 
            ref={el => textRefs.current[index] = el}
            className="absolute text-center opacity-0 translate-y-12 flex flex-col items-center"
          >
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[10rem] tracking-wider uppercase text-textMain drop-shadow-2xl">{chapter.title}</h2>
            <p className="font-body text-xl md:text-3xl tracking-[0.2em] uppercase text-electricBlue mt-4 font-semibold">{chapter.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
