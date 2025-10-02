"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function FAQs() {
    const faqs = [
  {
    q: "What services does your agency offer?",
    a: "Web development, UI/UX design, SEO, code deployment, and ongoing support.",
  },
  {
    q: "Do you work with startups or only established companies?",
    a: "We work with both startups and established companies.",
  },
  {
    q: "What platforms do you use for the code workflow?",
    a: "We use modern web technologies including Next.js, React, and Tailwind CSS.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary, but most are completed within 4-8 weeks.",
  },
  {
    q: "Can you help with just one part of the project?",
    a: "Yes, we offer flexible engagement models.",
  },
  {
    q: "What’s your pricing structure?",
    a: "We offer fixed and custom pricing based on project needs.",
  },
  {
    q: "Do you offer ongoing support after the project is finished?",
    a: "Yes, ongoing support is available.",
  },
];
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
           <section className="py-16 mb-4 px-8 rounded-xl shadow flex flex-col md:flex-row gap-12 md:gap-24 justify-between relative">
        <div className="text-3xl font-bold mb-8 text-center md:text-left">
          FAQs
        </div>
        <div className="max-w-2xl w-full lg:max-w-1/2 md:ml-auto">
          {faqs.map((f, i) => (
            <div key={i} className="mb-6 border-b border-gray-200 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="font-semibold mb-2 md:text-right">{f.q}</div>
                <button
                  className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-xl font-bold focus:outline-none"
                  aria-label={openFaq === i ? "Hide answer" : "Show answer"}
                >
                  {openFaq === i ? "-" : "+"}
                </button>
              </div>
              {openFaq === i && (
                <div className="text-gray-600 mt-2 animate-fade-in-down md:text-right">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Can't find your answer card - only on large screens */}
        <div className="hidden lg:block absolute bottom-4 left-4 w-[380px]">
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-gray-100">
            <div className="font-bold text-lg mb-1">Cant find your answer?</div>
            <div className="text-gray-600 mb-4">Get in touch with our support team, they are friendly!</div>
            <Link
              href="/contact"
              className="inline-flex items-center w-1/2 gap-2 px-5 py-2 rounded-full border border-gray-300 bg-white text-black font-medium shadow hover:bg-black hover:text-white transition-colors"
            >
              Contact Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    )
}