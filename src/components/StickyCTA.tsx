"use client"

import React from 'react'

// Calendly link provided by the user
const CALENDLY_URL = 'https://calendly.com/samuelobidi8/30min'

const StickyCTA: React.FC = () => {
  return (
    <div aria-hidden={false} className="fixed right-6 bottom-6 z-50">
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a call"
        className="group flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 shadow-lg text-white ring-4 ring-amber-200 hover:scale-105 transform transition-all"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M8 7V3M16 7V3M3 11H21M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}

export default StickyCTA
