import React from 'react';
import ParticleOverlay from '../components/ParticleOverlay.jsx';

// Import all 15 chapters
import HeroSection from '../sections/home/HeroSection.jsx';
import ScrollSequence from '../components/ScrollSequence.jsx';
import Legacy from '../sections/home/Legacy.jsx';
import Difference from '../sections/home/Difference.jsx';
import SignatureCollection from '../sections/home/SignatureCollection.jsx';
import CraftsmanshipTimeline from '../sections/home/CraftsmanshipTimeline.jsx';
import Ingredients from '../sections/home/Ingredients.jsx';
import Experience from '../sections/home/Experience.jsx';
import ImpactNumbers from '../sections/home/ImpactNumbers.jsx';
import Testimonials from '../sections/home/Testimonials.jsx';
import Awards from '../sections/home/Awards.jsx';
import FinalCTA from '../sections/home/FinalCTA.jsx';

export default function Home() {
  return (
    <div className="relative bg-bgPrimary text-textMain">
      <ParticleOverlay />
      
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Scroll Product Experience (800vh Pinned sequence) */}
      <div className="relative z-20">
        <ScrollSequence />
      </div>

      <div className="relative z-30">
        {/* 03. Legacy & Heritage Section */}
        <Legacy />

        {/* 04. Why We Are Different (Horizontal Scroll) */}
        <Difference />

        {/* 05. Signature Collection */}
        <SignatureCollection />

        {/* 06. Craftsmanship Journey */}
        <CraftsmanshipTimeline />

        {/* 07. Ingredients & Materials */}
        <Ingredients />

        {/* 08. Experience Section */}
        <Experience />

        {/* 09. Numbers & Impact */}
        <ImpactNumbers />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Awards / Recognition */}
        <Awards />

        {/* 12. Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
}
