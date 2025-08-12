"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Vertex Labs",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["SaaS", "Web app"],
    description: "A SaaS platform for data analytics.",
    link: "#",
  },
  {
    name: "Asterisk",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tags: ["Web3", "CMS"],
    description: "Web3 CMS for decentralized content.",
    link: "#",
  },
  {
    name: "Nova Threads",
    image:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1170&auto=format&fit=crop&w=400&q=80",
    tags: ["Crypto", "Web app"],
    description: "Crypto web app for secure transactions.",
    link: "#",
  },
  {
    name: "CloudDash",
    image:
      "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1027&auto=format&fit=crop&w=400&q=80",
    tags: ["Finance", "Web3"],
    description: "Finance dashboard for Web3 businesses.",
    link: "#",
  },
  {
    name: "PixelForge",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    tags: ["Design", "Branding"],
    description: "Branding and design studio for startups.",
    link: "#",
  },
  {
    name: "EcoTrackr",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tags: ["Sustainability", "Mobile App"],
    description: "Mobile app for tracking eco-friendly habits.",
    link: "#",
  },
  {
    name: "MedSync",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tags: ["Healthcare", "Platform"],
    description: "Healthcare platform for patient management.",
    link: "#",
  },
  {
    name: "EduSpark",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tags: ["Education", "E-learning"],
    description: "E-learning platform for modern education.",
    link: "#",
  },
  {
    name: "ShopEase",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    tags: ["E-commerce", "Retail"],
    description: "E-commerce solution for small businesses.",
    link: "#",
  },
  {
    name: "TravelNest",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tags: ["Travel", "Booking"],
    description: "Travel booking platform for unique stays.",
    link: "#",
  },
  {
    name: "TaskFlow",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["Productivity", "Web app"],
    description: "Productivity tool for teams and individuals.",
    link: "#",
  },
  {
    name: "FitBuddy",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tags: ["Fitness", "Mobile App"],
    description: "Fitness tracking app for healthy living.",
    link: "#",
  },
  {
    name: "Evently",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tags: ["Events", "Platform"],
    description: "Event management platform for organizers.",
    link: "#",
  },
  {
    name: "SafeNet",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    tags: ["Security", "Web app"],
    description: "Web app for secure online transactions.",
    link: "#",
  },
  {
    name: "GreenScape",
    image:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1170&auto=format&fit=crop&w=400&q=80",
    tags: ["Environment", "Platform"],
    description: "Platform for environmental initiatives.",
    link: "#",
  },
  {
    name: "InnoTech",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["Innovation", "Tech"],
    description: "Tech innovation hub for startups.",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0e7ff] to-[#f0fdfa] text-black flex flex-col">
      <Navbar />
      <section className="max-w-6xl mx-auto pt-40 py-24 px-4 flex-1 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Projects</h1>
        <p className="text-center text-lg mb-10 text-gray-700 max-w-2xl mx-auto">
          Explore some of our recent projects, showcasing our expertise in SaaS, Web3, Crypto, and Finance solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-2xl p-4 flex flex-col items-start shadow-md hover:shadow-xl transition-shadow mx-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={768}
                  height={576}
                  className="object-cover"
                  style={{ position: 'absolute' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <div className="flex flex-row gap-2 mb-2">
                {p.tags &&
                  p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-gray-500 font-medium bg-gray-50 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <div className="flex flex-row w-full justify-between px-2">
                <span className="font-semibold text-lg mb-2 text-black">
                  {p.name}
                </span>
                <a href={p.link} className="mt-auto group bg-white border border-gray-200 rounded-full p-2 flex items-center justify-center shadow hover:bg-gray-500 transition-all">
                  <ArrowRight size={18} className="text-gray-700 group-hover:text-white" />
                </a>
              </div>
              <p className="mt-2 text-gray-700 text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
