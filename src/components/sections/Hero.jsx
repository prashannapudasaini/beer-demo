import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const SCRUB_VIDEO_SRC = `${import.meta.env.BASE_URL}hero-scrub.mp4`;
function useScrubVideo() {
  const videoRef = useRef(null);
  const state = useRef({
    targetTime: 0,
    currentLerpedTime: 0,
    isSeeking: false,
    duration: 0,
    rafId: 0,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      state.current.duration = video.duration || 0;
      video.currentTime = 0;
      state.current.targetTime = 0;
      state.current.currentLerpedTime = 0;
    };

    const seekIfNeeded = () => {
      if (!video.duration) return;
      if (state.current.isSeeking) return;
      
      const diff = state.current.currentLerpedTime - video.currentTime;
      if (Math.abs(diff) > 0.02) { // Tighter threshold for closer following
        state.current.isSeeking = true;
        video.currentTime = state.current.currentLerpedTime;
      }
    };

    const handleSeeked = () => {
      state.current.isSeeking = false;
      seekIfNeeded();
    };

    const handleMouseMove = (e) => {
      if (state.current.duration) {
        // Direct 1:1 mapping: Mouse X position maps exactly to video timeline
        const progress = e.clientX / window.innerWidth;
        state.current.targetTime = progress * state.current.duration;
      }
    };

    const tick = () => {
      const s = state.current;

      // Lerp for snappy but buttery smooth follow
      if (s.duration) {
        s.currentLerpedTime += (s.targetTime - s.currentLerpedTime) * 0.15;
        seekIfNeeded();
      }

      s.rafId = requestAnimationFrame(tick);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    state.current.rafId = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(state.current.rafId);
    };
  }, []);

  return videoRef;
}

export default function Hero() {
  const [email, setEmail] = useState("");
  const scrubVideoRef = useScrubVideo();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-black font-inter">
      {/* Background Video */}
      <video
        ref={scrubVideoRef}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        src={SCRUB_VIDEO_SRC}
      />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col px-4 py-4 sm:px-10 sm:py-8 lg:px-12">
        {/* Spacer on mobile */}
        <div className="flex-1 sm:hidden" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col pb-4 sm:mt-auto sm:flex-1 sm:flex-row sm:items-end sm:pb-12 lg:pb-16"
        >
          {/* Left Column */}
          <div className="flex flex-col sm:max-w-[700px]">
            <h1 className="font-serif text-[2.5rem] leading-[1.05] tracking-tight text-white sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] drop-shadow-lg uppercase font-bold">
              Wild Spirit.<br />
              <span className="text-gold">Crafted Perfection.</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg max-w-[520px] font-sans font-medium">
              Unleash your inner husky with every crisp, refreshing sip. Brewed for the bold and the adventurous.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 sm:mt-8 relative flex w-full max-w-[400px] items-center rounded-sm border border-white/20 bg-black/40 backdrop-blur-md"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none sm:px-6 sm:py-4 font-sans"
              />

              <button
                type="submit"
                className="absolute right-1.5 rounded-sm bg-gold px-3 py-2 text-xs font-bold text-primary sm:px-6 sm:py-3 sm:text-sm uppercase tracking-wider hover:bg-gold-highlight transition-colors duration-300"
              >
                Join the list
              </button>
            </form>

            {/* Feature pills (mobile only) */}
            <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
              <span className="rounded-sm border border-gold/30 bg-black/60 px-3 py-1.5 text-xs text-gold backdrop-blur-md uppercase tracking-wider font-bold">
                Crisp Taste
              </span>
              <span className="rounded-sm border border-gold/30 bg-black/60 px-3 py-1.5 text-xs text-gold backdrop-blur-md uppercase tracking-wider font-bold">
                Wild Spirit
              </span>
              <span className="rounded-sm border border-gold/30 bg-black/60 px-3 py-1.5 text-xs text-gold backdrop-blur-md uppercase tracking-wider font-bold">
                Pure Craft
              </span>
            </div>
          </div>

          {/* Right Column (desktop only) */}
          <div className="hidden sm:flex ml-auto flex-col items-end gap-2 self-end">
            <span className="rounded-sm border border-gold/30 bg-black/60 px-4 py-2 text-sm text-gold backdrop-blur-md uppercase tracking-wider font-bold">
              Crisp Taste
            </span>
            <span className="rounded-sm border border-gold/30 bg-black/60 px-4 py-2 text-sm text-gold backdrop-blur-md uppercase tracking-wider font-bold">
              Wild Spirit
            </span>
            <span className="rounded-sm border border-gold/30 bg-black/60 px-4 py-2 text-sm text-gold backdrop-blur-md uppercase tracking-wider font-bold">
              Pure Craft
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
