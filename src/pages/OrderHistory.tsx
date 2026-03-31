import React from 'react';
import { Package, ChevronRight, ArrowRight, Clock, CheckCircle, Truck } from 'lucide-react';
import { Order } from '../types';

interface OrderHistoryProps {
  onNavigate: (page: string, params?: any) => void;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ onNavigate }) => {
  // Mock order history data
  const orders: Order[] = [
    {
      id: 'PR-823941',
      date: 'March 15, 2026',
      total: 470,
      status: 'Delivered',
      items: []
    },
    {
      id: 'PR-712394',
      date: 'February 28, 2026',
      total: 320,
      status: 'Shipped',
      items: []
    },
    {
      id: 'PR-612345',
      date: 'January 10, 2026',
      total: 180,
      status: 'Delivered',
      items: []
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <CheckCircle size={14} className="text-gray-900" />;
      case 'Shipped': return <Truck size={14} className="text-gray-900" />;
      case 'Processing': return <Clock size={14} className="text-gray-900" />;
      default: return <Package size={14} className="text-gray-900" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32">
      <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-24">
        <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Account</h2>
        <h1 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase">Order History</h1>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {orders.map((order) => (
          <div key={order.id} className="group bg-gray-50 p-8 sm:p-12 space-y-8 sm:space-y-12 shadow-xl hover:bg-white transition-all duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Order {order.id}</h3>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-white rounded-full">
                    {getStatusIcon(order.status)}
                    <span className="text-[9px] tracking-[0.1em] font-bold text-gray-900 uppercase">{order.status}</span>
                  </div>
                </div>
                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">Placed on {order.date}</p>
              </div>
              <div className="text-right space-y-2">
                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">Total Amount</p>
                <p className="text-xl font-light tracking-[0.1em] text-gray-900">${order.total}</p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-gray-100">
              <div className="flex -space-x-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-16 bg-white overflow-hidden border-2 border-gray-50 shadow-lg">
                    <img src={`https://picsum.photos/seed/order-${order.id}-${i}/200/300`} alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-12 h-16 bg-gray-900 flex items-center justify-center text-white text-[10px] font-bold border-2 border-gray-50 shadow-lg">
                  +2
                </div>
              </div>
              <button className="flex items-center space-x-4 text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase group">
                <span>View Details</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 sm:mt-32 text-center">
        <button 
          onClick={() => onNavigate('shop')}
          className="inline-block border-b border-gray-900 pb-2 text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase hover:text-gray-400 hover:border-gray-400 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderHistory;
