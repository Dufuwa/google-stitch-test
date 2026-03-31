import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

interface LoginProps {
  onNavigate: (page: string) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-48 pb-24 sm:pb-32">
      <div className="max-w-md mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Account</h2>
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.1em] text-gray-400 max-w-xs mx-auto leading-relaxed">
            {isLogin 
              ? 'Enter your credentials to access your curated archive.' 
              : 'Join our community for exclusive access and updates.'}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-4">
            {!isLogin && (
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" 
              />
            )}
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-gray-50 border-none px-6 py-4 text-xs tracking-[0.05em] focus:ring-1 focus:ring-gray-200" 
            />
          </div>

          <div className="space-y-6">
            <button 
              onClick={() => onNavigate('home')}
              className="w-full bg-gray-900 text-white py-4 sm:py-5 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-2xl flex items-center justify-center space-x-4"
            >
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight size={14} />
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] tracking-[0.2em] font-semibold uppercase">
                <span className="bg-white px-4 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-3 bg-gray-50 py-4 text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase hover:bg-gray-100 transition-colors">
                <Chrome size={16} />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center space-x-3 bg-gray-50 py-4 text-[10px] tracking-[0.1em] font-semibold text-gray-900 uppercase hover:bg-gray-100 transition-colors">
                <Github size={16} />
                <span>Github</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] tracking-[0.1em] text-gray-400 hover:text-gray-900 uppercase transition-colors"
            >
              {isLogin 
                ? "Don't have an account? Create one" 
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
