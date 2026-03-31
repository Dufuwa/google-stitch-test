import React, { useState } from 'react';
import { Filter, ChevronDown, Grid, List } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ShopProps {
  onNavigate: (page: string, params?: any) => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Outerwear', 'Dresses', 'Knitwear', 'Bottoms', 'Accessories', 'Footwear'];
  const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Best Selling'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32">
      {/* Page Header */}
      <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-24 text-center sm:text-left">
        <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Archive</h2>
        <h1 className="text-3xl sm:text-5xl font-light tracking-[0.1em] text-gray-900 uppercase">New Arrivals</h1>
        <p className="text-xs sm:text-sm tracking-[0.1em] text-gray-400 max-w-md mx-auto sm:mx-0">
          Discover our latest collection of minimalist essentials and seasonal pieces.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-100 pb-6 sm:pb-8 mb-12 sm:mb-16 space-y-6 sm:space-y-0">
        <div className="flex items-center space-x-8 sm:space-x-12 overflow-x-auto w-full sm:w-auto no-scrollbar pb-2 sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-[10px] tracking-[0.2em] font-semibold uppercase transition-colors whitespace-nowrap ${
                selectedCategory === category ? 'text-gray-900 border-b border-gray-900 pb-1' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6 sm:space-x-8 w-full sm:w-auto justify-between sm:justify-end">
          <div className="relative group">
            <button className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">
              <span>Sort: {sortBy}</span>
              <ChevronDown size={12} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className="block w-full text-left px-4 py-3 text-[10px] tracking-[0.1em] text-gray-400 hover:text-gray-900 hover:bg-gray-50 uppercase transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button 
            className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={14} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-24">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer space-y-4 sm:space-y-8"
            onClick={() => onNavigate('product', { id: product.id })}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 py-3 text-[10px] tracking-[0.2em] uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-gray-900 hover:text-white">
                Quick Add
              </button>
            </div>
            <div className="space-y-2 sm:space-y-4 text-center sm:text-left">
              <div className="space-y-1 sm:space-y-2">
                <h4 className="text-[10px] sm:text-xs tracking-[0.15em] font-medium text-gray-900 uppercase">{product.name}</h4>
                <p className="text-[10px] sm:text-xs tracking-[0.1em] text-gray-400 uppercase">{product.category}</p>
              </div>
              <p className="text-[10px] sm:text-xs tracking-[0.1em] font-semibold text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-24 sm:mt-32 flex justify-center items-center space-x-8 sm:space-x-12">
        <button className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 hover:text-gray-900 uppercase transition-colors disabled:opacity-30" disabled>Previous</button>
        <div className="flex space-x-4 sm:space-x-6">
          <button className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 border-b border-gray-900 pb-1">1</button>
          <button className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 hover:text-gray-900 transition-colors">2</button>
          <button className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 hover:text-gray-900 transition-colors">3</button>
        </div>
        <button className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 hover:text-gray-400 uppercase transition-colors">Next</button>
      </div>
    </div>
  );
};

export default Shop;
