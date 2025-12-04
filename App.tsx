import React from 'react';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import IngredientsStory from './components/IngredientsStory';
import EmotionalStory from './components/EmotionalStory';
import BlogHighlight from './components/BlogHighlight';
import TestimonialSlider from './components/TestimonialSlider';

function App() {
  return (
    <div className="hh-home min-h-screen text-gray-800 font-sans">
      <main>
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 3: Category Grid */}
        <CategoryGrid />

        {/* Section 4: Featured Products */}
        <FeaturedProducts />

        {/* Section 5: Ingredients Story Banner */}
        <IngredientsStory />

        {/* Section 6: Emotional Story Section */}
        <EmotionalStory />

        {/* Section 7: Blog Highlight Section */}
        <BlogHighlight />

        {/* Section 8: Customer Reviews */}
        <TestimonialSlider />
      </main>
    </div>
  );
}

export default App;