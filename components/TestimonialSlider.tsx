import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { REVIEWS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <SectionWrapper bgClass="bg-[#F9F3E3]"> {/* Slightly darker cream for contrast */}
      <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">
        Loved by Families
      </h2>

      <div className="max-w-4xl mx-auto relative px-4 md:px-12">
        {/* Review Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white p-3 rounded-full">
            <Quote size={24} fill="currentColor" />
          </div>

          <div className="mb-6 flex justify-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={20} 
                fill={i < currentReview.rating ? "currentColor" : "none"} 
                className={i < currentReview.rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-700 italic mb-8 font-sans">
            "{currentReview.text}"
          </p>

          <h4 className="text-primary font-bold text-lg font-heading">
            {currentReview.name}
          </h4>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-secondary transition-colors focus:outline-none"
          aria-label="Previous review"
        >
          <ChevronLeft size={36} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-secondary transition-colors focus:outline-none"
          aria-label="Next review"
        >
          <ChevronRight size={36} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {REVIEWS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TestimonialSlider;