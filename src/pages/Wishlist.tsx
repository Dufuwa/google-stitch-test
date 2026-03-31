import React from 'react';
import { Heart, ShoppingBag, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../CartContext';

interface WishlistProps {
  onNavigate: (page: string, params?: any) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  // Mock wishlist data for now
  const wishlistItems = PRODUCTS.slice(2, 5);

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-48 text-center space-y-12 sm:space-y-16">
        <div className="flex justify-center">
          <div className="p-12 sm:p-16 bg-gray-50 rounded-full text-gray-200">
            <Heart size={64} strokeWidth={1} />
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase">Your Wishlist is Empty</h1>
          <p className="text-xs sm:text-sm tracking-[0.1em] text-gray-400 max-w-md mx-auto">
            Save your favorite pieces to your wishlist to keep track of them.
          </p>
        </div>
        <button 
          onClick={() => onNavigate('shop')}
          className="bg-gray-900 text-white px-12 sm:px-16 py-4 sm:py-5 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-gray-800 transition-all transform hover:scale-105 shadow-2xl"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32">
      <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-24">
        <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Saved Items</h2>
        <h1 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase">Your Wishlist</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-24">
        {wishlistItems.map((product) => (
          <div key={product.id} className="group space-y-6 sm:space-y-8">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 shadow-xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white transition-colors shadow-lg">
                <X size={16} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => addToCart(product)}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 py-4 text-[10px] tracking-[0.2em] uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-gray-900 hover:text-white flex items-center justify-center space-x-3"
              >
                <ShoppingBag size={14} />
                <span>Add to Bag</span>
              </button>
            </div>
            <div 
              className="space-y-2 sm:space-y-4 text-center sm:text-left cursor-pointer"
              onClick={() => onNavigate('product', { id: product.id })}
            >
              <div className="space-y-1 sm:space-y-2">
                <h4 className="text-[10px] sm:text-xs tracking-[0.15em] font-medium text-gray-900 uppercase">{product.name}</h4>
                <p className="text-[10px] sm:text-xs tracking-[0.1em] text-gray-400 uppercase">{product.category}</p>
              </div>
              <p className="text-[10px] sm:text-xs tracking-[0.1em] font-semibold text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
