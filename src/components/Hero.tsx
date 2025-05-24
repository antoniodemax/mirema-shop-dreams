
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Truck, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Welcome to <span className="text-yellow-300 break-words">AnthonyPeterSolutions</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 px-4 sm:px-0">
              Your trusted online shop in Nairobi, Kenya. Discover amazing products with exceptional quality and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full sm:w-auto">
                <Link to="/products">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-800 w-full sm:w-auto">
                <Link to="/location">
                  Find Our Store
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2 px-4 sm:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 text-center">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 text-yellow-300" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Fast Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-200">Quick delivery across Nairobi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 text-center">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 text-yellow-300" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Secure Shopping</h3>
              <p className="text-xs sm:text-sm text-gray-200">100% secure transactions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 text-center">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 text-yellow-300" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Top Quality</h3>
              <p className="text-xs sm:text-sm text-gray-200">Premium products guaranteed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 text-center">
              <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 text-yellow-300" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Wide Selection</h3>
              <p className="text-xs sm:text-sm text-gray-200">Thousands of products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
