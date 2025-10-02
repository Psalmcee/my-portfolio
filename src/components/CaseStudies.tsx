"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const cases = [
  {
    name: "Vertex Labs",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["SaaS", "Web app"],
  },
  {
    name: "Asterisk",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tags: ["Web3", "CMS"],
  },
  {
    name: "Nova Threads",
    image:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1170&auto=format&fit=crop&w=400&q=80",
    tags: ["Crypto", "Web app"],
  },
  {
    name: "CloudDash",
    image:
      "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1027&auto=format&fit=crop&w=400&q=80",
    tags: ["Finance", "Web3"],
  },
];

const stats = [
  { label: "Years in the development industry", value: "5+" },
  { label: "Countries rendered development services", value: "10+" },
  { label: "Satisfaction rate", value: "100%" },
  { label: "Team size", value: "8+" },
];

const plans = [
    {
    name: "Landing Page",
    description:
      "Ideal for implementing or redesigning a website to increase your conversion rate.",
    price: "N200,000",
    features: [
      "Domain & Hosting setup",
      "Business Email",
      "Logo Design",
      "Up to 5 Sections",
      "SEO Optimizationn",      
      "50/50 Secure Payment",
      "Limited Support",
      "Continued Support"
    ],
  },
  {
    name: "Partnership",
    description:
      "Tailored for businesses with ongoing designs & marketing needs to scale your business.",
    price: "N450,000",
    features: [
      "Domain & Hosting setup",
      "Business Email",
      "Logo Design",
      "Ongoing & Priority support",
      "Web & App Develiopment",
      "Unlimited Requests",
      " Advanced SEO & Marketing",
    ],
  },
  {
    name: "Custom",
    description: "Tailored digital experience built for unique business needs.",
    price: "N599,999+",
    features: [
      "Domain & Hosting setup",
      "Business Email",
      "Logo Design",
      "Dedicated team of experts",
      "Execution of all aspects",
      "Ongoing support",
      "Web & App Develiopment",
      "Unlimited Requests",
      " Advanced SEO & Marketing",
      "End-to-end strategy",
      "Full development",
      "Custom integrations",
    ],
  },
];

const testimonials = [
  {
    name: "Savannah Nguyen",
    role: "Marketing Director, Cloud Rush",
    quote: "Working with Axiom Tech Labs was a game-changer for our business.",
  },
  {
    name: "Arlene McCoy",
    role: "CEO, Vertex Labs",
    quote:
      "Their attention to detail and innovative approach exceeded our expectations.",
  },
  {
    name: "Theresa Webb",
    role: "Founder, CloudDash",
    quote: "Working with Axiom Tech Labs was a game-changer for our business.",
  },
];



import React from "react";
import FAQs from "./FAQs";
import BookACall from "./BookACall";

export default function CaseStudies() {
  return (
    <section className="py-12 px-12 md:px-16 text-black">
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Who We Are Crafting Our Success
            </h2>
            <p className="mb-8">
              We offer high-quality development services to elevate your brand&apos;s
              presence and make a lasting impression. Partner with us for
              impactful, user-focused solutions that bring your vision to life.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start border border-gray-100 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="text-5xl font-extrabold mb-2 text-amber-700 font-space">
                    {s.value}
                  </div>
                  <div className="text-gray-700 text-base font-medium">{s.label}</div>
                </motion.div>
              ))}
              <Link href={"/about"} className="">More About Us...</Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center w-full lg:mt-40">
            <Image
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
              alt="Case Study"
              width={400}
              height={300}
              className="w-full max-w-md h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <div className="header-container">
        <motion.div
          className="max-w-6xl mx-auto px-4 text-center md:text-left text-black mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Works
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-center md:text-left md:max-w-lg text-black font-space">
          How We&apos;ve Helped Other Businesses Grow 10X
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-4 px-4">
          <p className="flex-1 text-left md:max-w-2/5 text-black pb-4 sm:pb-0">
            See how we&apos;ve helped clients turn ambitious ideas into successful
            digital products.
          </p>
          <Link href={"/projects"}
           className="rounded-full bg-white text-black p-2 px-6 shadow hover:bg-black hover:text-white hover:cursor-pointer transition-colors whitespace-nowrap flex flex-row">
            View All Products <ArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 rounded-2xl p-2 flex flex-col items-start shadow-md hover:shadow-xl transition-shadow duration-300 mx-2 transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow">
              <Image
                src={c.image}
                alt={c.name}
                width={768}
                height={576}
                className="object-cover"
                style={{ position: 'absolute' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
            <div className="flex flex-row gap-2 mb-2">
              {c.tags &&
                c.tags.map((tag, idx) => (
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
              {c.name}
              </span>
              <button className="mt-auto group bg-white border border-gray-200 rounded-full p-2 flex items-center justify-center shadow hover:bg-gray-500 transition-all">
                <ArrowRight size={18} className="text-gray-700 group-hover:text-white" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <section className="py-12">
        <p className="text-center font-medium text-gray-800">Pricing Plans</p>
        <h2 className="text-5xl font-bold mb-6 text-center">
          Flexible Pricing built to <br />
          <span className="text-amber-700">Scale Businesses</span>
        </h2>
        <p className="text-center pb-12 text-gray-600 font-semibold">
          Choose from tailored packages that fits your business goals and
          timeline.
        </p>
        <div className="rounded-xl shadow pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            {plans.map((p, i) => (
              <div
                key={i}
                className="group bg-white hover:bg-black hover:text-white rounded-2xl shadow-xl p-6 flex flex-col items-center h-full min-h-[420px] transition-colors duration-200 transform hover:scale-105"
              >
                <div className="text-xl font-semibold mb-2">{p.name}</div>
                <div className="text-gray-600 group-hover:text-gray-200 mb-2 transition-colors duration-200">
                  {p.description}
                </div>
                <div className="text-3xl font-bold mb-6">{p.price}</div>
                <ul className="mb-4 text-gray-600 group-hover:text-gray-200 transition-colors duration-200">
                  {p.features.map((f, j) => (
                    <li key={j}>⩤⩥{f}</li>
                  ))}
                </ul>
                <div className="flex-grow" />
                <button className="w-full px-6 py-2 bg-amber-700 text-white rounded-full flex items-center justify-center gap-6 mt-4 transition-colors duration-200 group-hover:text-white hover:cursor-pointer">
                  Get Started <ArrowRight />
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch mx-6 mt-8">
            <div className="flex-1 max-w-md bg-white text-gray-900 rounded-2xl p-6 border border-gray-200 shadow-lg flex flex-col justify-between min-w-[260px]">
              <p className="font-semibold text-lg mb-2">
                Increased conversion rate by 400%
              </p>
              <p className="italic mb-4 text-gray-700">
                &quot;We needed a high-converting website, and they delivered their
                expertise skills and helped us increase our conversion rate.&quot;
              </p>
              <p className="font-medium text-right text-gray-600">Goki Gopal</p>
            </div>
            <div className="flex-1 max-w-md bg-black text-white rounded-2xl p-6 border border-gray-900 shadow-lg flex flex-col justify-between min-w-[260px]">
              <p className="font-semibold text-lg mb-2">
                Can&apos;t decide? Let&apos;s talk
              </p>
              <p className="mb-4 text-gray-200">
                Strategic web design, SEO-driven content, and paid ad campaigns
                tailored to drive results and conversions
              </p>
              <button className="rounded-full bg-white text-black font-semibold px-6 py-2 mt-2 shadow hover:bg-amber-700 hover:text-white transition-all duration-200 border self-end flex flex-row gap-4 hover:cursor-pointer">
                <a href="https://calendly.com/samuelobidi8/30min" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center">
                  Book a Call <ArrowRight size={16} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl md:text-start md:max-w-md font-medium mb-6 text-center font-space">
          What Our Clients are Saying
        </h2>
        <p className="text-center md:text-start md:max-w-md pb-12 text-gray-600 font-semibold italic">
          Our clients&apos; success stories are at the heart of what we do. Each
          project is a partnership, and seeing the impact of our work through
          their words is our greatest reward.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="border border-dashed rounded-lg p-6 shadow text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <div className="mb-4 text-gray-600 text-lg">“{t.quote}”</div>
              <div className="font-semibold mt-4">{t.name}</div>
              <div className="text-sm text-gray-400">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <FAQs />    
      {/* Discovery Call Section (matches provided image) */}
      <BookACall />
    </section>
  );
}
