import React from 'react';
import { CheckCircle, ArrowRight, Package, Truck, Mail } from 'lucide-react';

interface OrderConfirmationProps {
  onNavigate: (page: string) => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ onNavigate }) => {
  const orderNumber = "PR-" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-48 text-center space-y-16 sm:space-y-24">
      <div className="flex justify-center animate-scale-up">
        <div className="p-16 sm:p-20 bg-gray-900 rounded-full text-white shadow-2xl">
          <CheckCircle size={80} strokeWidth={1} />
        </div>
      </div>

      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Success</h2>
          <h1 className="text-4xl sm:text-6xl font-light tracking-[0.1em] text-gray-900 uppercase">Thank You For Your Order</h1>
          <p className="text-xs sm:text-sm tracking-[0.1em] text-gray-400 max-w-lg mx-auto leading-relaxed">
            Your order <span className="text-gray-900 font-semibold">#{orderNumber}</span> has been placed successfully. We've sent a confirmation email to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-gray-50">
          <div className="space-y-4">
            <div className="flex justify-center text-gray-900">
              <Package size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Processing</h3>
            <p className="text-[10px] tracking-[0.05em] text-gray-400 uppercase">1-2 Business Days</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-gray-900">
              <Truck size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Shipping</h3>
            <p className="text-[10px] tracking-[0.05em] text-gray-400 uppercase">3-5 Business Days</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-gray-900">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Support</h3>
            <p className="text-[10px] tracking-[0.05em] text-gray-400 uppercase">24/7 Assistance</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 pt-12 sm:pt-16">
          <button 
            onClick={() => onNavigate('shop')}
            className="w-full sm:w-auto bg-gray-900 text-white px-12 sm:px-16 py-4 sm:py-5 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-gray-800 transition-all transform hover:scale-105 shadow-2xl"
          >
            Continue Shopping
          </button>
          <button 
            onClick={() => onNavigate('orders')}
            className="w-full sm:w-auto border border-gray-900 text-gray-900 px-12 sm:px-16 py-4 sm:py-5 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
          >
            View Order Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
