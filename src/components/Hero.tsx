"use client";
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

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
          className="text-5xl md:text-7xl font-medium mb-4 font-space"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent font-medium"
            style={{ textShadow: '0 6px 20px rgba(250,204,21,0.10)' }}
          >
            Creative Web Solutions
          </span>
          <br />
          <span className='text-white'>Real Results</span>
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
        <a href="https://calendly.com/samuelobidi8/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-amber-600 text-white rounded-full shadow-xl hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-200">
          <span>Schedule a Call</span>
          <ArrowRight className="w-5 h-5" />
        </a>
        <Link href={'/pricing'} className="px-6 py-2 border bg-white/90 text-amber-700 hover:bg-amber-700 hover:text-white border-amber-200 rounded-full transition-colors duration-200">View Pricing</Link>
      </motion.div>
         
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </header>
  );
}