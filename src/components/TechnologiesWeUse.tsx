"use client"

import React from 'react';
import Image from 'next/image';

const techStack = [
  {
    name: 'Next.js',
    logo: '/next.svg',
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Vercel',
    logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png',
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
    {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Redux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
];

const TechnologiesWeUse = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight text-gray-900 uppercase">The Technologies We Use</h2>
    <div className="overflow-hidden w-full">
      <div className="animate-carousel inline-block whitespace-nowrap" style={{ animation: 'carousel 20s linear infinite' }}>
        {techStack.concat(techStack).map((tech, idx) => (
          <div key={tech.name + idx} className="inline-block mx-8 align-top">
            <div className="bg-white rounded-xl shadow p-4 mb-2 flex items-center justify-center h-20 w-20 mx-auto">
              <Image src={tech.logo} alt={tech.name} width={48} height={48} className="object-contain" />
            </div>
            <span className="text-sm font-medium text-gray-700 block mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes carousel {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-carousel {
        display: inline-block;
        min-width: 200%;
      }
    `}</style>

  </section>
);

export default TechnologiesWeUse;
