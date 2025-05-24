
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">AP</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">AnthonyPeterSolutions</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Your trusted ecommerce partner in Nairobi, Kenya. Quality products, exceptional service.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Products</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Dashboard</Link></li>
              <li><Link to="/location" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Store Location</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Support</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Returns</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Mirema, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">info@anthonypetersolutions.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © 2024 AnthonyPeterSolutions. All rights reserved. Built with ❤️ in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
