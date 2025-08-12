import React from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    description:
      "Ideal for implementing or redesigning a website to increase your conversion rate.",
    price: "$2999+",
    features: [
      "Senior designer",
      "10-14 Days turnaround time",
      "One Active Request",
      "SEO Optimizationn",
      "Slack Channel",
      "50/50 Secure Payment",
    ],
  },
  {
    name: "Partnership",
    description:
      "Tailored for businesses with ongoing designs & marketing needs to scale your business.",
    price: "$3999+",
    features: [
      "Dedicated team of experts",
      "Execution of all aspects",
      "Ongoing support",
      "Web & App Develiopment",
      "Unlimited Requests",
      " Advanced SEO & Marketing",
    ],
  },
  {
    name: "Custom",
    description: "Tailored digital experience built for unique business needs.",
    price: "$9999+",
    features: [
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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0e7ff] to-[#f0fdfa] text-black">
      <Navbar />
      <section className="max-w-5xl mx-auto py-24 pt-40 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center pt-8">Pricing Plans</h1>
        <p className="text-center text-lg mb-10 text-gray-700 max-w-2xl mx-auto">
          Choose from tailored packages that fit your business goals and timeline. Our plans are designed to deliver maximum value, fast results, and ongoing support helping you scale, convert more customers, and stand out in your industry.
        </p>
        <div className="rounded-xl shadow pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {plans.map((p, i) => (
              <div
                key={i}
                className="group bg-white hover:bg-black hover:text-white rounded-2xl shadow-xl p-6 flex flex-col items-center h-full min-h-[420px] transition-colors duration-200"
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
                <button className="w-full px-6 py-2 bg-black text-white rounded-full flex items-center justify-center gap-6 mt-4 transition-colors duration-200 group-hover:bg-white group-hover:text-black hover:cursor-pointer">
                  Get Started <ArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>✔️ Fast turnaround and transparent pricing</li>
            <li>✔️ Dedicated support and expert team</li>
            <li>✔️ Flexible packages for every business size</li>
            <li>✔️ Proven results and satisfied clients</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
