
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Truck, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-yellow-300">AnthonyPeterSolutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Your trusted online shop in Nairobi, Kenya. Discover amazing products with exceptional quality and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/products">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-800">
                <Link to="/location">
                  Find Our Store
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-200">Quick delivery across Nairobi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
              <p className="text-sm text-gray-200">100% secure transactions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Top Quality</h3>
              <p className="text-sm text-gray-200">Premium products guaranteed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
              <p className="text-sm text-gray-200">Thousands of products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
