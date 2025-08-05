"use client";
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
   <header 
        className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <Navbar />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full min-h-[60vh]">
          <motion.h1
        className="text-5xl font-medium mb-4 font-space"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Creative Solutions<br /><span className='text-white'>Real Results</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-200 font-mono max-w-1/2 font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Offering High-quality development services to elevate your brand’s presence and maximize business growth.
      </motion.p>
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <button className="px-6 py-2 bg-black text-white rounded-full shadow-lg hover:scale-105 transition-transform">Book a 1:1 Call</button>
        <button className="px-6 py-2 border bg-lime-50 text-black hover:text-white border-black rounded-full hover:bg-gray-700 transition">View Pricing</button>
      </motion.div>
         
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </header>
  );
}