import React from 'react';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { PRODUCTS } from '../constants';

const FeaturedProducts: React.FC = () => {
  return (
    <SectionWrapper bgClass="bg-white/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">Customer Favorites</h2>
        <p className="text-gray-600">Our most loved treats, fresh from the kitchen.</p>
      </div>

      {/* 
        Layout:
        Mobile & Tablet: 2 per row (grid-cols-2)
        Desktop: 3 per row (lg:grid-cols-3)
        Wait, prompt said: Desktop 3, Tablet 2, Mobile 2.
       */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 justify-items-center">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="w-full bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
          >
            <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {product.isBestseller && (
                <span className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                  Bestseller
                </span>
              )}
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{product.description}</p>
              
              <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
                <span className="text-lg font-bold text-primary">{product.price}</span>
                <Button variant="primary" className="text-xs px-4 py-2 w-full md:w-auto">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturedProducts;