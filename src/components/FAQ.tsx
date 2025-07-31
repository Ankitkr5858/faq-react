import React from 'react';
import FAQItem from './FAQItem';
import ThemeToggle from './ThemeToggle';
import { faqData } from '../data/faqData';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20 transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:text-[#2FC1FF] bg-clip-text text-transparent dark:bg-none leading-tight">
            Frequently asked questions
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;