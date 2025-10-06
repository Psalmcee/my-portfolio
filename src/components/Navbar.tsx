"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";


const navItems = [  
  { label: "About", href: "/about" },
  {label: "Services", href: "/services"},
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full flex justify-center z-50">
      <nav
        className="mx-auto mt-4 mb-12 flex items-center justify-between w-full max-w-5xl py-0 px-2 md:py-2 bg-black rounded-full shadow-lg border border-gray-900 absolute top-0 left-0.5 right-0.5 z-[100]"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-start md:mr-10 whitespace-nowrap font-bold focus:outline-none pl-0" aria-label="Homepage">
          <span className="block w-auto h-16 relative">
              <Image
                src="/axiom-logo.png"
                alt="Axiom Tech Labs"
                width={40}
                height={40}
                priority
                className="object-contain w-full h-full"
              />
          </span>
        </Link>
        {/* Hamburger icon for small screens */}
        <button
          className="sm:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className={`w-7 h-7 text-white transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-4 md:gap-8 items-center flex-1 justify-center min-w-0" role="menubar">
          {navItems.map((item) => (
            <li key={item.label} className="min-w-fit" role="none">
              {item.href.startsWith("/") ? (
                <Link
                  href={item.href}
                  className="px-3 md:px-5 py-2 rounded-full font-medium text-white hover:bg-white hover:text-black transition-all duration-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="px-3 md:px-5 py-2 rounded-full font-medium text-white hover:bg-white hover:text-black transition-all duration-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a
          href="https://calendly.com/samuelobidi8/30min"
          className="hidden sm:flex ml-2 lg:ml-10 px-5 lg:px-7 py-4 rounded-full bg-amber-600 text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-200 border border-amber-700 flex-row items-center whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-amber-200"
          tabIndex={0}
    
    >
          Book a Call <ArrowUpRight />
        </a>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-30 bg-black/70 sm:hidden"
              aria-hidden="true"
              onClick={() => setMenuOpen(false)}
            />
            {/* Mobile menu overlay */}
            <div className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-24 sm:hidden">
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-gray-200">
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-white text-black shadow focus:outline-none focus:ring-2 focus:ring-black"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <ul className="flex flex-col gap-6 items-center w-full mt-4" role="menubar">
              {navItems.map((item) => (
                <li key={item.label} className="w-full text-center" role="none">
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="block px-6 py-3 rounded-full font-medium text-black hover:bg-black hover:text-white transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-6 py-3 rounded-full font-medium text-black hover:bg-black hover:text-white transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
                </ul> 
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
