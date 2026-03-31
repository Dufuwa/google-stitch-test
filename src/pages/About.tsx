import React from 'react';
import { ArrowRight, Leaf, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 sm:pb-32 space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Our Story</h2>
              <h1 className="text-4xl sm:text-6xl font-light tracking-[0.1em] text-gray-900 uppercase leading-tight">
                MINIMALISM AS A <br className="hidden sm:block" /> PHILOSOPHY
              </h1>
            </div>
            <p className="text-xs sm:text-sm tracking-[0.05em] leading-relaxed text-gray-500 max-w-md">
              Founded in 2024, PURE was born from a desire to redefine the modern wardrobe. We believe that true luxury lies in simplicity, quality, and sustainability.
            </p>
            <div className="flex space-x-8 sm:space-x-12 pt-8 sm:pt-12 border-t border-gray-50">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-light tracking-[0.1em] text-gray-900">2024</h3>
                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">Founded</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-light tracking-[0.1em] text-gray-900">100%</h3>
                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">Sustainable</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-light tracking-[0.1em] text-gray-900">50+</h3>
                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">Artisans</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/about-hero/1200/1600" 
              alt="Brand Story" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12 sm:space-y-16 mb-24 sm:mb-32">
            <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Our Values</h2>
            <h3 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase">WHAT WE STAND FOR</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-12 lg:gap-24">
            <div className="text-center space-y-8 sm:space-y-12">
              <div className="flex justify-center text-gray-900">
                <Leaf size={40} strokeWidth={1} />
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Sustainability</h4>
                <p className="text-xs tracking-[0.05em] leading-relaxed text-gray-500">
                  We use only the finest sustainable materials, ensuring our impact on the planet is as minimal as our designs.
                </p>
              </div>
            </div>
            <div className="text-center space-y-8 sm:space-y-12">
              <div className="flex justify-center text-gray-900">
                <Heart size={40} strokeWidth={1} />
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Quality</h4>
                <p className="text-xs tracking-[0.05em] leading-relaxed text-gray-500">
                  Every piece is crafted with meticulous attention to detail by skilled artisans using traditional techniques.
                </p>
              </div>
            </div>
            <div className="text-center space-y-8 sm:space-y-12">
              <div className="flex justify-center text-gray-900">
                <Globe size={40} strokeWidth={1} />
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase">Transparency</h4>
                <p className="text-xs tracking-[0.05em] leading-relaxed text-gray-500">
                  We believe in open communication about our processes, pricing, and the people behind our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative aspect-video lg:aspect-square overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/philosophy/1200/1200" 
              alt="Philosophy" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-[10px] tracking-[0.4em] font-semibold text-gray-400 uppercase">Philosophy</h2>
              <h3 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase leading-tight">
                LESS IS <br className="hidden sm:block" /> ALWAYS MORE
              </h3>
            </div>
            <p className="text-xs sm:text-sm tracking-[0.05em] leading-relaxed text-gray-500 max-w-md">
              Our design philosophy is centered around the idea that a few well-made pieces are better than a closet full of trends. We create for the conscious consumer who values longevity over fast fashion.
            </p>
            <button className="flex items-center space-x-4 text-[10px] tracking-[0.3em] font-semibold text-gray-900 uppercase group">
              <span>Explore Our Process</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
