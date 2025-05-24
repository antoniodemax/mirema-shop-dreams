import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  // State to manage mobile menu visibility
  // The useState hook is used to create a state variable 'isMenuOpen' and a function 'setIsMenuOpen' to update it
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">AP</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-800 hidden sm:block">AnthonyPeterSolutions</span>
            <span className="text-sm font-bold text-gray-800 sm:hidden">APS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
              Products
            </Link>
            <Link to="/location" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1 text-sm lg:text-base">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
              Dashboard
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/cart" className="flex items-center space-x-1">
                <ShoppingCart className="w-5 h-5" />
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hidden lg:flex">
              <Link to="/login" className="flex items-center space-x-1">
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="lg:hidden">
              <Link to="/login">
                <User className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="sm" asChild>
  {isMenuOpen ? (
    <Link to="/signup" className="lg:hidden">Join</Link>
  ) : (
    <Link to="/signup" className="hidden lg:block">Sign Up</Link>
  )}
</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/location"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/cart"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart (3)
              </Link>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button size="sm" asChild className="w-full">
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
