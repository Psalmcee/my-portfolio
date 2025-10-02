import React from 'react';
import { Building2, Users, Trophy, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQs from '@/components/FAQs';

export default function aboutPage() {
  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-[#e0e7ff] to-[#f0fdfa]">
        <Navbar />
      <div className="relative px-8 overflow-hidden">
        <div className="bubble bubble-1 z-0"></div>
        <div className="bubble bubble-2 z-0"></div>
        <div className="bubble bubble-3 z-0"></div>
        <div className="bubble bubble-4 z-0"></div>
        
        <div className="max-w-5xl mx-auto px-4 pt-40 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">About Our Company</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:transform hover:scale-105 transition-all">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2020, Axiom Tech Labs has grown from a small startup to a leading technology solutions provider. 
                Our journey is marked by continuous innovation and unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:transform hover:scale-105 transition-all">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-gray-600">
                Our diverse team of experts brings together decades of combined experience in software development, 
                design, and project management. We&#39;re united by our passion for technology and innovation.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:transform hover:scale-105 transition-all">
              <Trophy className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
              <p className="text-gray-600">
                We&#39;ve successfully delivered over 100+ projects, serving clients across various industries. 
                Our work has been recognized with multiple industry awards for excellence in technology innovation.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:transform hover:scale-105 transition-all">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                We aim to transform businesses through innovative technology solutions. Our mission is to deliver 
                exceptional value while maintaining the highest standards of quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQs />
      <Footer />
    </div>
  );
}