"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import Image from 'next/image';

const logos = [
  {
    name: 'Google',
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Microsoft',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    name: 'Amazon',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'Netflix',
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    name: 'Spotify',
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
  },
  {
    name: 'Slack',
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
  },
];

export default function AdvertLogos() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({ x: '-100%', transition: { duration: 18, ease: 'linear' } });
        controls.set({ x: 0 });
      }
    };
    sequence();
  }, [controls]);

  // Duplicate logos for seamless looping
  const carouselLogos = [...logos, ...logos];

  return (
    <section className="py-4 px-4 bg-gray-50 overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto">
        <motion.div
          className="flex gap-12 w-max"
          animate={controls}
          initial={{ x: 0 }}
          style={{ willChange: 'transform' }}
        >
          {carouselLogos.map((logo, i) => (
            <div
              key={i}
              className="w-32 h-12 bg-gray-200 flex items-center justify-center rounded grayscale hover:grayscale-0 transition-all duration-300 shadow select-none"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={96}
                height={32}
                className="object-contain h-8 w-24"
                title={logo.name}
                priority={i < logos.length}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
