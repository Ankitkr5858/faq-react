import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from '../data/faqData';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent leading-tight">
            Frequently asked questions
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="bg-white border-t border-gray-200">
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;