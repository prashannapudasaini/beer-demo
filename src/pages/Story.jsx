import React, { useEffect } from 'react';
import StoryHero from '../components/story/StoryHero';
import TheBeginning from '../components/story/TheBeginning';
import OurPhilosophy from '../components/story/OurPhilosophy';
import MountainToBottle from '../components/story/MountainToBottle';
import MountainsInspireUs from '../components/story/MountainsInspireUs';
import OurCommitment from '../components/story/OurCommitment';
import BeerwiserExperience from '../components/story/BeerwiserExperience';
import StatisticsSection from '../components/story/StatisticsSection';
import FinalBrandStatement from '../components/story/FinalBrandStatement';
import FinalCTA from '../components/story/FinalCTA';

export default function Story() {

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <StoryHero />
      <TheBeginning />
      <OurPhilosophy />
      <MountainToBottle />
      <MountainsInspireUs />
      <OurCommitment />
      <BeerwiserExperience />
      <StatisticsSection />
      <FinalBrandStatement />
      <FinalCTA />
    </div>
  );
}
