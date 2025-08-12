import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Github, X, Facebook, Instagram } from "lucide-react";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';



export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100 text-black">
        <div className="flex flex-col items-start gap-8 lg:justify-left text-left max-w-6xl md:px-6 mx-auto">
         <h2 className="text-3xl md:text-4xl text-center lg:text-start md:max-w-md font-medium mb-6  font-space">
            Make Your Business Stand Out Today!
          </h2>
          <Link href={'/contact'} className="mb-8 md:mb-0 text-center md:text-left gap-1 flex-1 flex flex-row">
            Contact Us Now<ArrowTopRightOnSquareIcon className='w-5'/>
          </Link>
        </div>
        {/* <div className="flex flex-col gap-2 md:gap-6 flex-1 items-center justify-center w-full max-w-xs md:max-w-sm mx-auto">
          {navItems.map((item) => (
            <span
              key={item.label}
              className="flex flex-row items-center w-full md:w-2/3 border-b border-gray-400 pb-2 hover:border-black transition-all duration-150 cursor-pointer justify-between"
            >
              {item.href.startsWith('/') ? (
                <a href={item.href} className="flex-1">
                  {item.label}
                </a>
              ) : (
                <a href={item.href} className="flex-1">
                  {item.label}
                </a>
              )}
              <ArrowUpRight />
            </span>
          ))}
        </div> */}
      
          <div className="max-w-6xl mx-auto px-4 mt-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo Section */}
              <div className="md:col-span-1">
                <div className="rounded-lg p-6 bg-gradient-to-br from-gray-900/70 to-gray-700/40 backdrop-blur-lg">
                  <Image src="/axiom-logo.png" alt="Axiom Tech Labs" width={80} height={80} className="h-20 w-auto" />
                  <p className="text-sm text-gray-800">
                    Innovating the future through technology and creative
                    solutions.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <div className="rounded-lg p-6 bg-gradient-to-br from-gray-900/70 to-gray-700/40 backdrop-blur-lg">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-white font-semibold mb-4">
                        About Us
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/about"
                            className="hover:text-gray-200 transition-colors"
                          >
                            Our Story
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about"
                            className="hover:text-gray-200 transition-colors"
                          >
                            Team
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-4">FAQ</h3>
                     <ul className="space-y-2">
                        <li>
                          <Link
                            href="/projects"
                            className="hover:text-gray-200 transition-colors"
                          >
                            General
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/projects"
                            className="hover:text-gray-200 transition-colors"
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="hover:text-gray-200 transition-colors"
                          >
                            Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-4">
                        Contact Us
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/contact"
                            className="hover:text-gray-200 transition-colors"
                          >
                            Get in Touch
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="hover:text-gray-200 transition-colors"
                          >
                            Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="md:col-span-1">
                <div className="rounded-lg p-6 bg-gradient-to-br from-gray-900/70 to-gray-700/40 backdrop-blur-lg">
                  <h3 className="text-white font-semibold mb-4">
                    Connect With Us
                  </h3>
                  <div className="grid text- grid-cols-2 gap-4">
                    <a
                      href="https://github.com/Psalmcee"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-500 hover:bg-gray-700 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-500 hover:bg-gray-700 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-500 hover:bg-gray-700 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-500 hover:bg-gray-700 transition-colors"
                    >
                      <X size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>
                © {new Date().getFullYear()} Axiom Tech Labs. All rights
                reserved.
              </p>
            </div>
          </div>

     {/*  <div className="text-gray-400 text-sm text-center mt-8">
        © 2025 Axiom Tech Labs All rights reserved.
      </div> */}
      

    </footer>
  );
}
