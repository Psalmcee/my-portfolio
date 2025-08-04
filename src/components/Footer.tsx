import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100 text-black">
      <div className='md:flex md:flex-row md:justify-between md:items-center px-6'>
        <div className="flex flex-col items-start justify-between gap-8 text-left max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl md:max-w-md font-medium flex-1 text-left">
            Make Your Business Stand Out Today!
          </h2>
          <p className="mb-8 md:mb-0 text-left gap-2 flex-1 flex flex-row">
            Contact Us Now<ArrowTopRightOnSquareIcon className='w-5'/>
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-6 flex-1 items-center justify-center w-full max-w-xs md:max-w-sm mx-auto">
          {['Projects', 'About', 'Pricing', 'Contact'].map((label) => (
            <span
              key={label}
              className="flex flex-row items-center w-full md:w-2/3 border-b border-gray-400 pb-2 hover:border-black transition-all duration-150 cursor-pointer justify-between"
            >
              <span>{label}</span>
              <ArrowUpRight />
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 px-4 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center md:text-left text-sm">
        <div>
          <div className="font-semibold mb-2">Info</div>
          <div className="mb-1">Anambra, Idemili North 434102, Nigeria</div>
          <div className="mb-1 underline cursor-pointer">contact@Samuelobidi8@gmail.com</div>
          <div className="mb-1">[+234 (903) 337-0543]</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Social</div>
          <div className="mb-1 underline cursor-pointer">Instagram</div>
          <div className="mb-1 underline cursor-pointer">LinkedIn</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Links</div>
          <div className="mb-1 underline cursor-pointer">Home</div>
        </div>
      </div>
      <div className="text-gray-400 text-sm text-center mt-8">
        © Samuel.Obidi. All rights reserved.
      </div>
    </footer>
  );
}
