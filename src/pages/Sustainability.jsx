import React, { useEffect } from 'react';
import SustainabilityHero from '../components/sustainability/SustainabilityHero';
import Philosophy from '../components/sustainability/Philosophy';
import Pillars from '../components/sustainability/Pillars';
import WaterPreservation from '../components/sustainability/WaterPreservation';
import ResponsibleBrewing from '../components/sustainability/ResponsibleBrewing';
import SustainablePackaging from '../components/sustainability/SustainablePackaging';
import OurImpact from '../components/sustainability/OurImpact';
import CommunityEnvironment from '../components/sustainability/CommunityEnvironment';
import FutureVision from '../components/sustainability/FutureVision';
import SustainabilityCTA from '../components/sustainability/SustainabilityCTA';

export default function Sustainability() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full relative z-10 overflow-hidden">
      <SustainabilityHero />
      <Philosophy />
      <Pillars />
      <WaterPreservation />
      <ResponsibleBrewing />
      <SustainablePackaging />
      <OurImpact />
      <CommunityEnvironment />
      <FutureVision />
      <SustainabilityCTA />
    </main>
  );
}
