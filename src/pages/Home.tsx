import React from 'react';
import { HeroSection, FeaturedCategories, NewArrivals, ProductCollection, BrandStory, InstagramFeed } from '../components/home';
import { MarqueeTicker, CursorSpotlight } from '../components/ui';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <CursorSpotlight />
      <HeroSection />
      <MarqueeTicker />
      <FeaturedCategories />
      <NewArrivals />
      <ProductCollection />
      <BrandStory />
      <InstagramFeed />
    </main>
  );
};

export default Home;
