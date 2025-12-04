import React from 'react';
import SectionWrapper from './SectionWrapper';
import { BLOG_POSTS } from '../constants';

const BlogHighlight: React.FC = () => {
  return (
    <SectionWrapper bgClass="bg-white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2">Healthy Food Insights & Tips</h2>
          <p className="text-gray-600">Explore our blog for recipes, millet benefits, and healthy eating ideas.</p>
        </div>
      </div>

      {/* 
        Layout Rules:
        Desktop/Tablet: 3 posts single row (lg:grid-cols-3)
        Mobile: 2 posts single row (grid-cols-2)
      */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group flex flex-col h-full bg-cream rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 md:h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-heading font-semibold text-primary mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              <a href="#" className="text-secondary font-semibold text-sm hover:underline mt-auto inline-block">
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="text-primary font-bold hover:text-secondary transition-colors border-b-2 border-primary hover:border-secondary pb-1">
          View All Blog Posts
        </button>
      </div>
    </SectionWrapper>
  );
};

export default BlogHighlight;