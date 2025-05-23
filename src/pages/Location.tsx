
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visit Our Store
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come and experience our products in person at our Mirema location in Nairobi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Store Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Store Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">
                        Mirema Drive<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">+254 XXX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">info@anthonypetersolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Getting Here</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">By Matatu</h3>
                    <p className="text-gray-600">
                      Take Route 45 or 46 from the city center and alight at Mirema Drive.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">By Car</h3>
                    <p className="text-gray-600">
                      Follow Kiambu Road to Mirema Drive. Ample parking is available.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">By Uber/Bolt</h3>
                    <p className="text-gray-600">
                      Simply search for "Mirema Drive, Nairobi" in your ride-sharing app.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us on the Map</h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                {/* In a real app, you would integrate with Google Maps or another mapping service */}
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500">
                    For now, search "Mirema Drive, Nairobi" in Google Maps
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Landmark</h3>
                <p className="text-blue-700 text-sm">
                  We're located near Mirema Shopping Mall, making us easy to find!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Location;
