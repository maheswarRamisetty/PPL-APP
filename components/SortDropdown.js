'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE : HIGH TO LOW',
    'PRICE : LOW TO HIGH',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-10 mr-10" ref={dropdownRef}>
      <div 
        className="flex items-center border border-gray-300 px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm mr-4">{currentSort}</span>
        <ChevronDown size={16} />
      </div>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-300 w-60 z-10 shadow-md">
          {sortOptions.map((option) => (
            <div 
              key={option}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${currentSort === option ? 'font-medium' : ''}`}
              onClick={() => {
                onSortChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;