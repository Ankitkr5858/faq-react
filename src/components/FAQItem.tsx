import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem as FAQItemType } from '../types/faq';

interface FAQItemProps {
  item: FAQItemType;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="border-b border-gray-200 last:border-b-0 cursor-pointer"
      onClick={toggleOpen}
    >
      <div
        className="w-full py-6 md:py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-bold text-black pr-4 leading-relaxed">
          Q{item.id}. {item.question}
        </h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-6 h-6 text-black font-bold transition-transform duration-200" />
          ) : (
            <Plus className="w-6 h-6 text-black font-bold transition-transform duration-200" />
          )}
        </div>
      </div>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`pb-6 md:pb-8 pr-10 transition-all duration-300 ease-out ${
          isOpen ? 'transform translate-y-0' : 'transform -translate-y-2'
        }`}>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;