import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-b from-[#e0e7ff] to-[#f0fdfa]">
        <Navbar />
      <div className="relative px-8 overflow-hidden">
        <div className="bubble bubble-1 z-0"></div>
        <div className="bubble bubble-2 z-0"></div>
        <div className="bubble bubble-3 z-0"></div>
        <div className="bubble bubble-4 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4  pt-40 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-blue-600" />
                    <p>contact@axiomtechlabs.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-blue-600" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-blue-600" />
                    <p>Onitsha, Anambra State, Nigeria  </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-blue-600" />
                    <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Facebook</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}