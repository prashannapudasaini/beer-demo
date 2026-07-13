import React from 'react';
import Hero from '../components/sections/Hero';
import HomeFeaturedCollection from '../components/home/HomeFeaturedCollection';
import HomeBrandStory from '../components/home/HomeBrandStory';
import HomeCraftsmanship from '../components/home/HomeCraftsmanship';
import HomeAwardsTrust from '../components/home/HomeAwardsTrust';
import HomeFindBeerwiser from '../components/home/HomeFindBeerwiser';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <HomeFeaturedCollection />
      <HomeBrandStory />
      <HomeCraftsmanship />
      <HomeAwardsTrust />
      <HomeFindBeerwiser />
    </div>
  );
}
