"use client";
import React from 'react';
import Image from 'next/image';

const services: { title: string; desc: string; img: string }[] = [
    {   
        title: 'Website Design',
        desc: 'Beautiful, responsive sites that match your brand and convert visitors. Includes layout, visual design, and mobile-first templates so your site looks great on any device.',
        img: 'https://images.unsplash.com/photo-1563172218-cc4b58795905?q=80&w=1074&auto=format&fit=crop&w=1200&q=60',
    },
    {
        title: 'Web Applications',
        desc:
            'Custom web apps built for your workflow which are fast, secure, and scalable. We handle architecture, APIs, authentication, and integrations with third-party services.',
        img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1170&auto=format&fit=crop&w=1200&q=60',
    },
    {
        title: 'UI / UX Design',
        desc:
            'Clear, usable interfaces that make products simple and delightful. We create wireframes, prototypes, and polished UI to ensure a smooth user journey and higher engagement.',
        img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
    },
    {
        title: 'E‑commerce Solutions',
        desc:
            'Online stores built to sell product catalogs, shopping carts, secure checkout, and payment integrations. Optimized for conversions and easy inventory management.',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60',
    },
     {
        title: 'Performance & SEO Optimization',
        desc:
            'Speed improvements, image optimization, caching, and basic SEO setup (sitemaps, meta tags, structured data) to help people find you and keep them on the page.',
        img: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=1631&auto=format&fit=crop&w=1200&q=60',
    },
    {
        title: 'Maintenance & Support',
        desc:
            'Ongoing updates, security patches, backups, and small enhancements. We keep your site healthy so you can focus on running your business without unexpected downtime.',
        img: 'https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?q=80&w=1229&auto=format&fit=crop&w=1200&q=60',
    },
];

/* 
    <ul className="space-y-2 text-gray-700 text-base text-left max-w-xl mx-auto">
      <li>• Website design and development for all types of businesses</li>
      <li>• Custom web application development to solve your unique problems</li>
      <li>• UI/UX design to make your site easy and enjoyable to use</li>
      <li>• Ongoing website maintenance, updates, and support</li>
      <li>• Speed and performance optimization for faster loading times</li>
      <li>• Basic SEO setup to help people find your site on Google</li>
      <li>• Content updates and small changes whenever you need them</li>
      <li>• Advice and guidance on the best tools and practices for your online presence</li>
    </ul>

     <p className="mb-4 text-gray-700 text-lg">
    Axiom tech labs make it easy for anyone to have a great website. Whether you are a business owner, a freelancer, or just starting out, we help you get online quickly and simply. Our team builds websites and web apps that look good, load fast, and work on any device. We listen to what you need and make sure your site is easy to use for you and your visitors.
    </p>
    <p className="mb-6 text-gray-700 text-lg">
    </p>
    <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-800">Our Key Services</h3>
     */
const WhatWeDo: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">What We Do</h2>
  <p className="max-w-2xl mx-auto text-white text-lg leading-relaxed md:text-lg animated-border px-6 py-6 mb-10 bg-white/60 rounded-2xl">
          Axiom Tech Labs makes it easy for anyone to have a great website. Whether you are a business owner, a freelancer, or just starting out, we help you get online quickly and simply. Our team builds websites and web apps that look good, load fast, and work on any device. We listen to what you need and make sure your site is easy to use for you and your visitors.

          We focus on speed, design, and usability so your site looks good and works well on any device. We also help you keep your website up to date, fix any problems, and make improvements as your needs grow. Our goal is to take the stress out of having a website, so you can focus on what you do best.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 card-animated"
          >
            <div className="h-48 w-full relative">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-amber-600 transition-colors duration-200 service-title">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4 text-amber-600 transition-colors duration-200">Other Services</h3>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
           <div className="p-4 bg-white/80 backdrop-blur rounded-xl shadow card-animated">
            <h4 className="font-semibold text-amber-600 transition-colors duration-200 service-title">Strategy & Consulting</h4>
            <p className="text-gray-600">Product and technical strategy, project scoping, and roadmap planning. We help prioritize features, estimate work, and choose the right tools for long-term success.</p>
          </div>
          <div className="p-4 bg-white/80 backdrop-blur rounded-xl shadow card-animated">
            <h4 className="font-semibold text-amber-600 transition-colors duration-200 service-title">Accessibility & Compliance</h4>
            <p className="text-gray-600">Accessibility audits and improvements to make your site usable for more people and reduce risk. We follow WCAG best practices and improve keyboard/navigation support.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          article { animation: fadeInUp 0.9s ease both; }
          article:nth-child(1) { animation-delay: 0.05s; }
          article:nth-child(2) { animation-delay: 0.15s; }
          article:nth-child(3) { animation-delay: 0.25s; }
        }
          @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
          /* Animated full rounded gradient border using amber-700 (#b45309) as base */
          .animated-border { position: relative; z-index: 0; }
          .animated-border::before {
            content: "";
            position: absolute;
            inset: -4px; /* expand outside the element to act like a border */
            border-radius: 1rem; /* match parent rounded */
            background: linear-gradient(90deg, #b45309 0%, #f59e0b 30%, #fcd34d 60%, #b45309 100%);
            background-size: 200% 100%;
            z-index: -1;
            filter: blur(0.6px);
            animation: borderMove 3.5s linear infinite;
          }
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          /* Card animated outline */
          .card-animated { position: relative; z-index: 0; }
          .card-animated::before {
            content: "";
            position: absolute;
            inset: -2px; /* slightly outside */
            border-radius: 1rem;
            padding: 1px;
            background: linear-gradient(90deg, rgba(180,83,9,0.18) 0%, rgba(245,158,11,0.12) 40%, rgba(252,211,77,0.12) 60%, rgba(180,83,9,0.18) 100%);
            background-size: 200% 100%;
            z-index: -1;
            filter: blur(6px);
            opacity: 0;
            transition: opacity 220ms ease, transform 220ms ease;
          }
          .card-animated:hover::before { opacity: 1; transform: translateY(-4px); }

          /* Service title subtle glow on hover */
          .service-title { transition: color 200ms ease, text-shadow 200ms ease; }
          .service-title:hover { color: #c2410c; text-shadow: 0 6px 18px rgba(194,65,12,0.10); }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
