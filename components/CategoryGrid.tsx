import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const CategoryGrid: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">Shop By Category</h2>
        <div className="h-1 w-20 bg-secondary mx-auto rounded"></div>
      </div>

      {/* Grid Layout Implementation */}
      {/* Mobile/Tablet: 2 columns (grid-cols-2) */}
      {/* Desktop: 3 columns (lg:grid-cols-3) */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {CATEGORIES.map((category) => (
          <div 
            key={category.id} 
            className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Image Area */}
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Content Area */}
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                {category.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary-dark transition-colors"
                >
                  Shop This Category <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CategoryGrid;