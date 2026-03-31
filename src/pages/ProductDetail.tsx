import React, { useState } from 'react';
import { Heart, Share2, ChevronLeft, ChevronRight, Star, Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../CartContext';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, params?: any) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate }) => {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    product.image,
    'https://picsum.photos/seed/detail1/800/1200',
    'https://picsum.photos/seed/detail2/800/1200',
    'https://picsum.photos/seed/detail3/800/1200',
  ];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    // Optionally show a success message or navigate to cart
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Image Gallery */}
        <div className="space-y-6 sm:space-y-8">
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 shadow-2xl">
            <img 
              src={images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white transition-colors shadow-lg"
              onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white transition-colors shadow-lg"
              onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 sm:gap-6">
            {images.map((img, idx) => (
              <button 
                key={idx}
                className={`aspect-[3/4] overflow-hidden bg-gray-50 border-2 transition-all ${
                  activeImage === idx ? 'border-gray-900 scale-95' : 'border-transparent hover:border-gray-200'
                }`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-[10px] tracking-[0.3em] font-semibold text-gray-400 uppercase">{product.category}</h2>
                  <h1 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase leading-tight">{product.name}</h1>
                </div>
                <div className="flex space-x-4">
                  <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <Heart size={20} strokeWidth={1.5} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <Share2 size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex text-gray-900">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />)}
                </div>
                <span className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">12 Reviews</span>
              </div>
              <p className="text-xl sm:text-2xl font-light tracking-[0.1em] text-gray-900">${product.price}</p>
            </div>
            <p className="text-xs sm:text-sm tracking-[0.05em] leading-relaxed text-gray-500 max-w-md">
              {product.description}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-12 sm:space-y-16">
            {/* Color Selection */}
            {product.colors && (
              <div className="space-y-6">
                <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Color: {selectedColor}</h3>
                <div className="flex space-x-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color ? 'border-gray-900 scale-110' : 'border-transparent hover:border-gray-200'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Size: {selectedSize}</h3>
                  <button className="text-[10px] tracking-[0.1em] text-gray-400 underline uppercase">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 flex items-center justify-center text-[10px] tracking-[0.1em] border transition-all ${
                        selectedSize === size ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-900 border-gray-100 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center border border-gray-100 px-4 h-14 sm:h-16">
                <button 
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-xs font-medium text-gray-900">{quantity}</span>
                <button 
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 text-white h-14 sm:h-16 text-[10px] tracking-[0.3em] uppercase hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-xl"
              >
                Add to Bag
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-12 sm:pt-16 border-t border-gray-50 space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Details</h4>
              <ul className="space-y-3 text-[10px] sm:text-xs tracking-[0.05em] text-gray-500 list-disc list-inside">
                <li>100% Premium Sustainable Fabric</li>
                <li>Minimalist Design Philosophy</li>
                <li>Ethically Crafted in Europe</li>
                <li>Relaxed Fit Silhouette</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Shipping & Returns</h4>
              <p className="text-[10px] sm:text-xs tracking-[0.05em] text-gray-500 leading-relaxed">
                Free standard shipping on all orders over $200. Returns accepted within 30 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
