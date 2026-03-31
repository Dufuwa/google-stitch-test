import React from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'NEW ARRIVALS', id: 'shop' },
    { name: 'COLLECTIONS', id: 'collections' },
    { name: 'ESSENTIALS', id: 'essentials' },
    { name: 'STORY', id: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <h1 className="text-2xl sm:text-3xl font-light tracking-[0.2em] text-gray-900">PURE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-xs tracking-[0.15em] font-medium transition-colors hover:text-gray-900 ${
                  currentPage === item.id ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button 
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              onClick={() => onNavigate('search')}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors hidden sm:block"
              onClick={() => onNavigate('wishlist')}
            >
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              onClick={() => onNavigate('login')}
            >
              <User size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors relative"
              onClick={() => onNavigate('cart')}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-gray-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-xs tracking-[0.15em] font-medium text-gray-400 hover:text-gray-900 py-2"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('wishlist');
              setIsMenuOpen(false);
            }}
            className="block w-full text-left text-xs tracking-[0.15em] font-medium text-gray-400 hover:text-gray-900 py-2"
          >
            WISHLIST
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
