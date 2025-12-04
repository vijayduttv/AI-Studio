import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
      {/* Background Image Overlay */}
      <img 
        src="https://picsum.photos/1920/1080?random=100&blur=2" 
        alt="Healthy homemade food spread" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">
          Healthy Homemade Foods <br className="hidden md:block" />
          Made With a Mother’s Care
        </h1>
        
        <p className="text-lg md:text-xl text-cream max-w-2xl mb-10 font-sans">
          Discover our range of millet-based sweets, nutritious podis, and traditional snacks. 
          Small-batch, preservative-free, and full of love.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="primary">
            Shop All Products
          </Button>
          <Button variant="secondary">
            Our Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;