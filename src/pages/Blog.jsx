import React, { useEffect } from 'react';
import BlogHero from '../components/blog/BlogHero';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import ArticleGrid from '../components/blog/ArticleGrid';
import NewsletterCTA from '../components/blog/NewsletterCTA';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full relative z-10 overflow-hidden pt-24">
      <BlogHero />
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterCTA />
    </main>
  );
}
