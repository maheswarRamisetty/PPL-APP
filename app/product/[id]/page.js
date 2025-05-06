'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await res.json();
        
        const enhancedData = {
          ...data,
          customizable: Math.random() > 0.5,
          idealFor: ['Men', 'Women', 'Kids'][Math.floor(Math.random() * 3)],
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
        };
        
        setProduct(enhancedData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    alert(`Added ${quantity} item(s) to cart`);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl">Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="aspect-square relative">
              <Image 
                src={product.image} 
                alt={product.title}
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          
      
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
            <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">DESCRIPTION</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">SIZE</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-10 border ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">QUANTITY</h3>
              <div className="flex border border-gray-300">
                <button 
                  className="px-4 py-2 border-r border-gray-300"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  className="px-4 py-2 border-l border-gray-300"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              className="w-full bg-black text-white py-3 mb-4 hover:bg-gray-800 transition duration-200"
              onClick={addToCart}
            >
              ADD TO CART
            </button>
            
            <div className="border-t pt-6">
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">PRODUCT DETAILS</h3>
                <p className="text-gray-600">SKU: PPXGC-{product.id}</p>
                {product.customizable && (
                  <p className="text-gray-600">Customizable: Yes</p>
                )}
                <p className="text-gray-600">Ideal For: {product.idealFor}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">SHIPPING & RETURNS</h3>
                <p className="text-gray-600">
                  Free shipping for orders over $50. Standard delivery 3-5 business days.
                  Returns accepted within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}