import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Heart, Leaf, ShieldCheck, Clock } from 'lucide-react';

const FeatureItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="bg-white p-4 rounded-full shadow-md mb-4 text-primary">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-heading font-semibold text-primary-dark">{text}</h3>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureItem icon={Heart} text="100% Homemade" />
        <FeatureItem icon={Leaf} text="Millet-based & Nutritious" />
        <FeatureItem icon={ShieldCheck} text="No Preservatives" />
        <FeatureItem icon={Clock} text="Fresh Small Batches" />
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;