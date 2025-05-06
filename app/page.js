'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import SortDropdown from '@/components/SortDropdown';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('RECOMMENDED');
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: {},
    occasion: {},
    work: {},
    fabric: {},
    segment: {},
    suitableFor: {},
    rawMaterials: {},
    pattern: {}
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        const enhancedData = data.map(product => ({
          ...product,
          customizable: Math.random() > 0.5,
          idealFor: ['Men', 'Women', 'Kids'][Math.floor(Math.random() * 3)],
          fabric: ['Cotton', 'Polyester', 'Silk', 'Wool'][Math.floor(Math.random() * 4)],
          occasion: ['Casual', 'Formal', 'Party'][Math.floor(Math.random() * 3)],
          segment: ['Luxury', 'Premium', 'Mainstream', 'Budget'][Math.floor(Math.random() * 4)],
          pattern: ['Solid', 'Printed', 'Striped', 'Checkered'][Math.floor(Math.random() * 4)]
        }));
        
        setProducts(enhancedData);
        setFilteredProducts(enhancedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    let result = [...products];
    

    if (filters.customizable) {
      result = result.filter(product => product.customizable);
    }

    const idealForFilters = Object.entries(filters.idealFor || {}).filter(([, value]) => value);
    if (idealForFilters.length > 0) {
      result = result.filter(product => {
        const productIdealFor = product.idealFor.toLowerCase();
        return idealForFilters.some(([key]) => {
          if (key === 'men') return productIdealFor === 'men';
          if (key === 'women') return productIdealFor === 'women';
          if (key === 'kids') return productIdealFor === 'kids';
          return false;
        });
      });
    }
    const fabricFilters = Object.entries(filters.fabric || {}).filter(([, value]) => value);
    if (fabricFilters.length > 0) {
      result = result.filter(product => {
        const productFabric = product.fabric.toLowerCase();
        return fabricFilters.some(([key]) => productFabric.includes(key.toLowerCase()));
      });
    }

    const segmentFilters = Object.entries(filters.segment || {}).filter(([, value]) => value);
    if (segmentFilters.length > 0) {
      result = result.filter(product => {
        const productSegment = product.segment.toLowerCase();
        return segmentFilters.some(([key]) => productSegment.includes(key.toLowerCase()));
      });
    }


    const patternFilters = Object.entries(filters.pattern || {}).filter(([, value]) => value);
    if (patternFilters.length > 0) {
      result = result.filter(product => {
        const productPattern = product.pattern.toLowerCase();
        return patternFilters.some(([key]) => productPattern.includes(key.toLowerCase()));
      });
    }

  
    const occasionFilters = Object.entries(filters.occasion || {}).filter(([, value]) => value);
    if (occasionFilters.length > 0) {
      result = result.filter(product => {
        const productOccasion = product.occasion.toLowerCase();
        return occasionFilters.some(([key]) => productOccasion.includes(key.toLowerCase()));
      });
    }


    switch (sortBy) {
      case 'NEWEST FIRST':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'POPULAR':
        result.sort((a, b) => b.rating.count - a.rating.count);
        break;
      case 'PRICE : HIGH TO LOW':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'PRICE : LOW TO HIGH':
        result.sort((a, b) => a.price - b.price);
        break;
      default:
      
        result.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(result);
  }, [filters, sortBy, products]);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleSortChange = (option) => {
    setSortBy(option);
  };

  const handleFilterChange = (filterCategory, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterCategory]: value
    }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
  
      
      <div className="container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 py-8">
  <div className="text-center mb-8">
    <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-800 mb-5">
      DISCOVER OUR PRODUCTS
    </h1>
    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
      scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
    </p>
  </div>
</div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="mr-4 font-semibold">{filteredProducts.length} ITEMS</span>
            <button
              onClick={toggleFilter}
              className="text-gray-500 flex items-center text-sm"
            >
              {filterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
            </button>
          </div>
          
          <SortDropdown currentSort={sortBy} onSortChange={handleSortChange} />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {filterVisible && (
            <aside className="w-full md:w-64 shrink-0">
              <FilterSidebar 
                filters={filters} 
                onFilterChange={handleFilterChange} 
              />
            </aside>
          )}

          <div className="flex-1">
            {loading ? (
              <div className="grid place-items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-10 ml-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
} 