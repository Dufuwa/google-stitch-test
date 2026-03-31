import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Login from './pages/Login';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import OrderHistory from './pages/OrderHistory';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState<any>({});

  const handleNavigate = (page: string, params: any = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'shop':
      case 'collections':
      case 'essentials':
      case 'search':
        return <Shop onNavigate={handleNavigate} />;
      case 'product':
        return <ProductDetail productId={pageParams.id} onNavigate={handleNavigate} />;
      case 'cart':
        return <Cart onNavigate={handleNavigate} />;
      case 'checkout':
        return <Checkout onNavigate={handleNavigate} />;
      case 'confirmation':
        return <OrderConfirmation onNavigate={handleNavigate} />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'wishlist':
        return <Wishlist onNavigate={handleNavigate} />;
      case 'orders':
        return <OrderHistory onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans selection:bg-gray-900 selection:text-white">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <main className="pt-16 sm:pt-20">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
