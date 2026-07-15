import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Simple fade in on load, NO scroll triggers, NO parallax
    gsap.fromTo('.contact-fade', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  return (
    <div className="bg-bgPrimary min-h-screen pt-32 pb-20 px-6 font-body">
      
      {/* SECTION 1 - CONTACT HERO */}
      <section ref={heroRef} className="max-w-4xl mx-auto text-center mb-32">
         <h1 className="contact-fade font-heading text-6xl md:text-8xl text-textMain uppercase mb-6 drop-shadow-md">
           Let's Start A<br/>Conversation
         </h1>
         <p className="contact-fade text-lg md:text-2xl text-premiumSilver font-light leading-relaxed max-w-2xl mx-auto">
           Whether you have a question, partnership opportunity, wholesale inquiry, or simply want to connect, we'd love to hear from you.
         </p>
      </section>

      {/* SECTION 2 - CONTACT INFORMATION + FORM */}
      <section className="contact-fade max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
         
         {/* Left: Info */}
         <div className="flex flex-col justify-center space-y-12">
            <div>
               <span className="text-sm uppercase tracking-widest text-textSecondary font-bold block mb-2">Address</span>
               <p className="text-xl text-white font-light">123 Beer Way,<br/>Kathmandu, Nepal</p>
            </div>
            <div>
               <span className="text-sm uppercase tracking-widest text-textSecondary font-bold block mb-2">Phone</span>
               <p className="text-xl text-white font-light">+977 980-0000000</p>
            </div>
            <div>
               <span className="text-sm uppercase tracking-widest text-textSecondary font-bold block mb-2">Email</span>
               <p className="text-xl text-white font-light">hello@beer.com</p>
            </div>
            <div>
               <span className="text-sm uppercase tracking-widest text-textSecondary font-bold block mb-2">Business Hours</span>
               <p className="text-xl text-white font-light">Mon - Fri<br/>9:00 AM – 6:00 PM</p>
            </div>
         </div>

         {/* Right: Premium Form */}
         <div className="glass-panel p-10 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            
            <form className="relative z-10 flex flex-col space-y-8">
               <div className="relative">
                 <input type="text" id="name" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-electricBlue transition-colors placeholder-transparent" placeholder="Full Name" />
                 <label htmlFor="name" className="absolute left-0 top-3 text-textSecondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-electricBlue cursor-text">Full Name</label>
               </div>
               
               <div className="relative">
                 <input type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-electricBlue transition-colors placeholder-transparent" placeholder="Email" />
                 <label htmlFor="email" className="absolute left-0 top-3 text-textSecondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-electricBlue cursor-text">Email Address</label>
               </div>

               <div className="relative">
                 <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-electricBlue transition-colors placeholder-transparent" placeholder="Phone Number" />
                 <label htmlFor="phone" className="absolute left-0 top-3 text-textSecondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-electricBlue cursor-text">Phone Number</label>
               </div>
               
               <div className="relative">
                 <textarea id="message" rows="4" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-electricBlue transition-colors placeholder-transparent resize-none mt-2" placeholder="Message"></textarea>
                 <label htmlFor="message" className="absolute left-0 top-3 text-textSecondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-electricBlue cursor-text">Your Message</label>
               </div>

               <button type="submit" className="w-full py-4 mt-6 bg-white text-bgPrimary font-bold uppercase tracking-widest rounded-full hover:bg-electricBlue hover:text-white transition-colors duration-300">
                 Send Message
               </button>
            </form>
         </div>

      </section>

      {/* SECTION 3 - MAP & SOCIALS */}
      <section className="contact-fade max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
         
         {/* Map */}
         <div className="h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-full h-full rounded-2xl bg-[#0a0d18] flex items-center justify-center opacity-80 filter grayscale">
               <span className="text-textSecondary font-heading tracking-widest">[ Map Embed Placeholder ]</span>
            </div>
         </div>

         {/* Socials */}
         <div className="flex flex-col justify-center items-start md:pl-20 space-y-6">
            <span className="font-heading text-4xl text-white uppercase mb-4 block">Follow Our Journey</span>
            
            <a href="#" className="text-2xl text-premiumSilver hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-electricBlue"></span> Instagram
            </a>
            <a href="#" className="text-2xl text-premiumSilver hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-electricBlue"></span> Facebook
            </a>
            <a href="#" className="text-2xl text-premiumSilver hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-electricBlue"></span> LinkedIn
            </a>
            <a href="#" className="text-2xl text-premiumSilver hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-electricBlue"></span> YouTube
            </a>
         </div>

      </section>

    </div>
  );
}
