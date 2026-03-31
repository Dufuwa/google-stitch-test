import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 sm:pt-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-xl tracking-[0.2em] font-light text-gray-900">PURE</h2>
            <p className="text-xs tracking-[0.05em] leading-relaxed text-gray-400 max-w-xs">
              A curated minimalist fashion archive featuring essential wear, sustainable collections, and a seamless shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-6">
            <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Shop</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">Collections</a></li>
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">Essentials</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-xs tracking-[0.05em] text-gray-400 hover:text-gray-900 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-[10px] tracking-[0.2em] font-semibold text-gray-900 uppercase">Newsletter</h3>
            <p className="text-xs tracking-[0.05em] text-gray-400">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-gray-50 border-none px-4 py-2 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200"
              />
              <button className="bg-gray-900 text-white px-4 py-2 text-[10px] tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-[10px] tracking-[0.1em] text-gray-400">
            © 2026 PURE ARCHIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[10px] tracking-[0.1em] text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] tracking-[0.1em] text-gray-400 hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
