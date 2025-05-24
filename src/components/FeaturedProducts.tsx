import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 15999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 189
    },
    {
      id: 3,
      name: "Professional Camera Lens",
      price: 25999,
      originalPrice: 32999,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Gaming Mechanical Keyboard",
      price: 6999,
      originalPrice: 8999,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 298
    }
  ];

  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  // The products are displayed in a grid layout with 4 columns on large screens, 2 columns on small screens, and 1 column on extra small screens
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Discover our hand-picked selection of premium products at unbeatable prices
          </p>
        </div>

        {/* Displays the products in a responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Displays the product image in a container for positioning */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm font-semibold">
                  {/* Calculates and displays the discount percentage */}
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {/* Dynamically renders the 5 star icons */}
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  {/* Displays the price and original price with a strikethrough */}
                  <div>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through ml-1 sm:ml-2 block sm:inline">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="flex-1 text-sm" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="text-sm"
                  >
                    <Link to={`/products/${product.id}`}>View</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" asChild>
            {/* Allows users to view or load all available products */}
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;