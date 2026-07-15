import React from 'react';
import CollectionHero from '../sections/collection/CollectionHero.jsx';
import CollectionShowcase from '../sections/collection/CollectionShowcase.jsx';
import CollectionFinale from '../sections/collection/CollectionFinale.jsx';

export default function Collection() {
  return (
    <div className="bg-bgPrimary min-h-screen">
      {/* 1. The Collection Hero (100vh) */}
      <CollectionHero />

      {/* 2. Interactive Product Showroom (600vh horizontal pin) */}
      <CollectionShowcase />

      {/* 3. The Grand Finale (100vh) */}
      <CollectionFinale />
    </div>
  );
}
