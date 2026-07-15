import React from 'react';
import StoryIntro from '../sections/story/StoryIntro.jsx';
import StoryJourney from '../sections/story/StoryJourney.jsx';
import StoryBeliefs from '../sections/story/StoryBeliefs.jsx';
import StoryProcess from '../sections/story/StoryProcess.jsx';
import StoryVision from '../sections/story/StoryVision.jsx';

export default function Story() {
  return (
    <div className="bg-bgPrimary min-h-screen">
      {/* 1. Cinematic Intro */}
      <StoryIntro />
      
      {/* 2. Our Journey (Horizontal Timeline) */}
      <StoryJourney />

      {/* 3. What We Believe (Pinned Stacked Cards) */}
      <StoryBeliefs />

      {/* 4. The Making of Excellence (Split Screen) */}
      <StoryProcess />

      {/* 5. Future Vision + CTA */}
      <StoryVision />
    </div>
  );
}
