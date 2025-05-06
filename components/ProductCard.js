'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300" 
        />
 
        <button 
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart 
            size={18} 
            className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>
        
        {product.customizable && (
          <div className="absolute bottom-4 left-4 bg-black text-white text-xs px-3 py-1">
            CUSTOMIZABLE
          </div>
        )}
      </div>

      <div>
        <h3 className="font-medium mb-1 text-sm">{truncateText(product.title, 40)}</h3>
        <p className="text-gray-500 text-xs mb-2">Ideal for: {product.idealFor}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <span className="text-sm mr-1">{product.rating.rate}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`w-3 h-3 ${i < Math.round(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-full bg-black text-white py-2 text-sm">
          QUICK VIEW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;