import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { useCart } from '../CartContext';

interface CheckoutProps {
  onNavigate: (page: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onNavigate }) => {
  const { cart, totalPrice } = useCart();
  const [step, setStep] = useState(1);

  const steps = ['Information', 'Shipping', 'Payment'];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onNavigate('confirmation');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Checkout Form */}
        <div className="space-y-12 sm:space-y-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-4 sm:space-x-6 text-[10px] tracking-[0.2em] font-semibold uppercase">
            <button onClick={() => onNavigate('cart')} className="text-gray-400 hover:text-gray-900 transition-colors">Bag</button>
            <ChevronRight size={12} className="text-gray-200" />
            {steps.map((s, i) => (
              <React.Fragment key={s}>
                <span className={step === i + 1 ? 'text-gray-900 border-b border-gray-900 pb-1' : 'text-gray-400'}>{s}</span>
                {i < steps.length - 1 && <ChevronRight size={12} className="text-gray-200" />}
              </React.Fragment>
            ))}
          </nav>

          <div className="space-y-12 sm:space-y-16">
            {step === 1 && (
              <div className="space-y-12 sm:space-y-16 animate-fade-in">
                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Contact Information</h3>
                  <div className="space-y-4">
                    <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="newsletter" className="w-4 h-4 rounded border-gray-200 text-gray-900 focus:ring-gray-900" />
                      <label htmlFor="newsletter" className="text-[10px] tracking-[0.05em] text-gray-500 uppercase">Keep me updated on news and exclusive offers</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Shipping Address</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                    <input type="text" placeholder="Last Name" className="bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                  </div>
                  <input type="text" placeholder="Address" className="w-full bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                  <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                    <input type="text" placeholder="Postal Code" className="bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                  </div>
                  <select className="w-full bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200 appearance-none">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>France</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-12 sm:space-y-16 animate-fade-in">
                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Shipping Method</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <input type="radio" name="shipping" defaultChecked className="w-4 h-4 text-gray-900 focus:ring-gray-900" />
                        <div className="space-y-1">
                          <p className="text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase">Standard Shipping</p>
                          <p className="text-[10px] tracking-[0.05em] text-gray-400 uppercase">3-5 Business Days</p>
                        </div>
                      </div>
                      <span className="text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase">Free</span>
                    </label>
                    <label className="flex items-center justify-between p-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <input type="radio" name="shipping" className="w-4 h-4 text-gray-900 focus:ring-gray-900" />
                        <div className="space-y-1">
                          <p className="text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase">Express Shipping</p>
                          <p className="text-[10px] tracking-[0.05em] text-gray-400 uppercase">1-2 Business Days</p>
                        </div>
                      </div>
                      <span className="text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase">$25.00</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-12 sm:space-y-16 animate-fade-in">
                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Payment Method</h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-gray-50 space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <CreditCard size={20} className="text-gray-400" />
                          <span className="text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase">Credit Card</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-8 h-5 bg-gray-200 rounded" />
                          <div className="w-8 h-5 bg-gray-200 rounded" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <input type="text" placeholder="Card Number" className="w-full bg-white border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                        <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="Expiration Date (MM/YY)" className="bg-white border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                          <input type="text" placeholder="Security Code" className="bg-white border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 pt-8">
              <button 
                onClick={() => step > 1 ? setStep(step - 1) : onNavigate('cart')}
                className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-semibold text-gray-400 hover:text-gray-900 uppercase transition-colors"
              >
                <ArrowLeft size={14} />
                <span>{step > 1 ? 'Back' : 'Return to Bag'}</span>
              </button>
              <button 
                onClick={handleNext}
                className="w-full sm:w-auto bg-gray-900 text-white px-12 sm:px-16 py-4 sm:py-5 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-2xl"
              >
                {step === 3 ? 'Complete Order' : 'Continue to ' + steps[step]}
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-gray-50 p-12 sm:p-16 space-y-12 sm:space-y-16 shadow-2xl lg:sticky lg:top-32">
          <h3 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Order Summary</h3>
          <div className="space-y-8 max-h-[40vh] overflow-y-auto no-scrollbar">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex space-x-6">
                <div className="relative w-20 h-24 flex-shrink-0 bg-white overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[8px] w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-1">
                  <h4 className="text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase">{item.name}</h4>
                  <p className="text-[9px] tracking-[0.05em] text-gray-400 uppercase">{item.selectedColor} / {item.selectedSize}</p>
                  <p className="text-[10px] tracking-[0.1em] font-medium text-gray-900">${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 pt-8 border-t border-gray-200">
            <div className="flex justify-between text-[10px] tracking-[0.1em] text-gray-500 uppercase">
              <span>Subtotal</span>
              <span className="text-gray-900 font-medium">${totalPrice}</span>
            </div>
            <div className="flex justify-between text-[10px] tracking-[0.1em] text-gray-500 uppercase">
              <span>Shipping</span>
              <span className="text-gray-900 font-medium">{step > 1 ? 'Free' : 'Calculated in next step'}</span>
            </div>
            <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
              <span className="text-[10px] tracking-[0.2em] font-bold text-gray-900 uppercase">Total</span>
              <span className="text-xl font-light tracking-[0.1em] text-gray-900">${totalPrice}</span>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-[10px] tracking-[0.1em] text-gray-400 uppercase">
              <ShieldCheck size={16} />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center space-x-4 text-[10px] tracking-[0.1em] text-gray-400 uppercase">
              <Truck size={16} />
              <span>Free shipping on orders over $200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
