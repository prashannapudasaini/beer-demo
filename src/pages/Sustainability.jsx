import React from 'react';
import SustainHero from '../sections/sustainability/SustainHero.jsx';
import SustainCommitment from '../sections/sustainability/SustainCommitment.jsx';
import SustainImpact from '../sections/sustainability/SustainImpact.jsx';
import SustainVision from '../sections/sustainability/SustainVision.jsx';

export default function Sustainability() {
  return (
    <div className="bg-bgPrimary min-h-screen">
      {/* 1. Cinematic Hero */}
      <SustainHero />

      {/* 2. Our Commitment (Stacked Cards) */}
      <SustainCommitment />

      {/* 3. Impact in Numbers */}
      <SustainImpact />

      {/* 4. Future Vision & CTA */}
      <SustainVision />
    </div>
  );
}
