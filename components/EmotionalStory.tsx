import React from 'react';
import SectionWrapper from './SectionWrapper';
import Button from './Button';

const EmotionalStory: React.FC = () => {
  return (
    <SectionWrapper className="text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
           <img 
             src="https://picsum.photos/200/200?random=88" 
             alt="Cooking with love" 
             className="w-full h-full object-cover"
           />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
          Food made with love, the way our mothers did.
        </h2>
        
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          At Healthy Heritage Foods, we believe that food is not just fuel—it’s an emotion. 
          Every laddu rolled and every podi ground carries the warmth of a home kitchen. 
          We stick to the recipes passed down through generations, ensuring you get the authentic taste of tradition.
        </p>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          When you open a box from us, we want you to feel the same joy you felt when your mother packed your favorite snacks.
        </p>

        <Button variant="primary">
          Read Our Story
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default EmotionalStory;