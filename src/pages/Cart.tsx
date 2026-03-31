import React from 'react';
import { Minus, Plus, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext';

interface CartProps {
  onNavigate: (page: string) => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-48 text-center space-y-12 sm:space-y-16">
        <div className="flex justify-center">
          <div className="p-12 sm:p-16 bg-gray-50 rounded-full text-gray-200">
            <ShoppingBag size={64} strokeWidth={1} />
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase">Your Bag is Empty</h1>
          <p className="text-xs sm:text-sm tracking-[0.1em] text-gray-400 max-w-md mx-auto">
            It looks like you haven't added anything to your bag yet. Explore our collection to find your essentials.
          </p>
        </div>
        <button 
          onClick={() => onNavigate('shop')}
          className="bg-gray-900 text-white px-12 sm:px-16 py-4 sm:py-5 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-gray-800 transition-all transform hover:scale-105 shadow-2xl"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32">
      <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-24">
        <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Shopping Bag</h2>
        <h1 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase">Review Your Items</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-12 sm:space-y-16">
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 pb-12 sm:pb-16 border-b border-gray-50 group">
              <div className="relative w-full sm:w-48 aspect-[3/4] overflow-hidden bg-gray-50 shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between space-y-8 sm:space-y-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">{item.name}</h3>
                      <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">{item.category}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                      className="p-2 text-gray-300 hover:text-gray-900 transition-colors"
                    >
                      <X size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                  <div className="flex space-x-8 text-[10px] tracking-[0.1em] text-gray-500 uppercase">
                    {item.selectedColor && (
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-300">Color:</span>
                        <span className="text-gray-900 font-medium">{item.selectedColor}</span>
                      </div>
                    )}
                    {item.selectedSize && (
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-300">Size:</span>
                        <span className="text-gray-900 font-medium">{item.selectedSize}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-gray-100 px-3 h-12">
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedColor, item.selectedSize)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center text-xs font-medium text-gray-900">{item.quantity}</span>
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedColor, item.selectedSize)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="text-sm font-semibold tracking-[0.1em] text-gray-900">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-12 sm:p-16 space-y-12 sm:space-y-16 shadow-2xl">
          <h3 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Order Summary</h3>
          <div className="space-y-6">
            <div className="flex justify-between text-[10px] tracking-[0.1em] text-gray-500 uppercase">
              <span>Subtotal</span>
              <span className="text-gray-900 font-medium">${totalPrice}</span>
            </div>
            <div className="flex justify-between text-[10px] tracking-[0.1em] text-gray-500 uppercase">
              <span>Shipping</span>
              <span className="text-gray-900 font-medium">Calculated at checkout</span>
            </div>
            <div className="flex justify-between text-[10px] tracking-[0.1em] text-gray-500 uppercase">
              <span>Estimated Tax</span>
              <span className="text-gray-900 font-medium">$0.00</span>
            </div>
            <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
              <span className="text-[10px] tracking-[0.2em] font-bold text-gray-900 uppercase">Total</span>
              <span className="text-xl font-light tracking-[0.1em] text-gray-900">${totalPrice}</span>
            </div>
          </div>
          <div className="space-y-4">
            <button 
              onClick={() => onNavigate('checkout')}
              className="w-full bg-gray-900 text-white py-5 text-[10px] tracking-[0.3em] uppercase hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center space-x-4"
            >
              <span>Checkout</span>
              <ArrowRight size={14} />
            </button>
            <p className="text-[9px] tracking-[0.05em] text-gray-400 text-center leading-relaxed">
              Shipping, taxes, and discounts will be calculated during checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
