import React from 'react';
import Button from './Button';

const IngredientsStory: React.FC = () => {
  return (
    <section className="bg-primary text-white">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left: Image / Visuals */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative bg-gray-800">
          <img 
            src="https://picsum.photos/800/800?random=50&grayscale" 
            alt="Traditional ingredients flatlay" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Made With Pure, Traditional Ingredients
          </h2>
          
          <ul className="space-y-4 mb-8 text-lg font-sans text-cream/90">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
              Ancient Millets
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
              Organic Jaggery
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
              Pure Country Ghee
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
              Hand-pounded Spices
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
              No Artificial Colors or Preservatives
            </li>
          </ul>

          <div className="flex justify-start">
            <Button variant="secondary">
              See How We Make It
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsStory;