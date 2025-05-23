
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package, CreditCard, User, MapPin, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  // Sample user data - in real app, this would come from Supabase
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 2024"
  };

  const orderHistory = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: 25999,
      status: "Delivered",
      items: [
        { name: "Professional Camera Lens", price: 25999, quantity: 1 }
      ]
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      total: 14998,
      status: "Delivered",
      items: [
        { name: "Premium Wireless Headphones", price: 8999, quantity: 1 },
        { name: "Bluetooth Speaker", price: 5999, quantity: 1 }
      ]
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      total: 15999,
      status: "Processing",
      items: [
        { name: "Smart Fitness Watch", price: 15999, quantity: 1 }
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 bg-green-100';
      case 'Processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'Shipped':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name}!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payment Methods
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Addresses
                </Button>
              </div>
            </div>

            {/* Order History */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Order History</h2>
                <ShoppingBag className="w-6 h-6 text-gray-400" />
              </div>

              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">Order {order.id}</h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                        <span className="text-lg font-semibold text-gray-800">
                          {formatPrice(order.total)}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">
                            {item.name} x{item.quantity}
                          </span>
                          <span className="text-gray-800 font-medium">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      {order.status === 'Delivered' && (
                        <Button size="sm" variant="outline">
                          <Star className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {orderHistory.length === 0 && (
                <div className="text-center py-8">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No orders yet</p>
                  <Button className="mt-4">
                    Start Shopping
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">{orderHistory.length}</h3>
              <p className="text-gray-600">Total Orders</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">
                {formatPrice(orderHistory.reduce((sum, order) => sum + order.total, 0))}
              </h3>
              <p className="text-gray-600">Total Spent</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
