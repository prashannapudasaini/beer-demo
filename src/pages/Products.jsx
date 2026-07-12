import React, { useEffect } from 'react';
import ProductHero from '../components/products/ProductHero';
import ProductRange from '../components/products/ProductRange';
import TasteProfile from '../components/products/TasteProfile';
import Ingredients from '../components/products/Ingredients';
import BrewingProcess from '../components/products/BrewingProcess';
import FoodPairings from '../components/products/FoodPairings';
import Testimonials from '../components/products/Testimonials';
import FindCTA from '../components/products/FindCTA';
import RelatedProducts from '../components/products/RelatedProducts';
import FooterCTA from '../components/products/FooterCTA';

export default function Products() {
  
  // Scroll to top on mount since React Router doesn't do this automatically
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative pt-24 bg-transparent min-h-screen">
      <ProductHero />
      <ProductRange />
      <TasteProfile />
      <Ingredients />
      <BrewingProcess />
      <FoodPairings />
      <Testimonials />
      <FindCTA />
      <RelatedProducts />
      <FooterCTA />
    </div>
  );
}
