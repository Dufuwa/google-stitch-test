import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[90vh] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/fashion-hero/1920/1080" 
          alt="Autumn Archive" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center px-4">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-[10px] sm:text-xs tracking-[0.4em] font-semibold text-white uppercase animate-fade-in">
              The Autumn Archive
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[0.1em] text-white animate-slide-up">
              ESSENTIAL WEAR
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.1em] text-white/80 max-w-md mx-auto animate-slide-up delay-100">
              Discover our curated collection of timeless silhouettes and premium fabrics for the modern wardrobe.
            </p>
            <div className="pt-8 animate-slide-up delay-200">
              <button 
                onClick={() => onNavigate('shop')}
                className="bg-white text-gray-900 px-8 sm:px-12 py-3 sm:py-4 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 sm:mb-16 space-y-4 sm:space-y-0">
          <div className="space-y-4">
            <h2 className="text-[10px] tracking-[0.3em] font-semibold text-gray-400 uppercase">Featured</h2>
            <h3 className="text-2xl sm:text-3xl font-light tracking-[0.1em] text-gray-900">THE ESSENTIALS</h3>
          </div>
          <button 
            onClick={() => onNavigate('shop')}
            className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase group"
          >
            <span>View All</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer space-y-4 sm:space-y-6"
              onClick={() => onNavigate('product', { id: product.id })}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h4 className="text-[10px] sm:text-xs tracking-[0.1em] font-medium text-gray-900 uppercase">{product.name}</h4>
                <p className="text-[10px] sm:text-xs tracking-[0.1em] text-gray-400">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-4">
                <h2 className="text-[10px] tracking-[0.3em] font-semibold text-gray-400 uppercase">Our Story</h2>
                <h3 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 leading-tight">
                  MINIMALISM AS A <br className="hidden sm:block" /> PHILOSOPHY
                </h3>
              </div>
              <p className="text-xs sm:text-sm tracking-[0.05em] leading-relaxed text-gray-500 max-w-md">
                We believe in the power of simplicity. Our mission is to create a curated archive of essential pieces that transcend seasons and trends.
              </p>
              <button 
                onClick={() => onNavigate('about')}
                className="inline-block border-b border-gray-900 pb-2 text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase hover:text-gray-400 hover:border-gray-400 transition-colors"
              >
                Read More
              </button>
            </div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/brand-story/1200/1500" 
                alt="Brand Story" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
