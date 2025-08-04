"use client";
import React from "react";
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-16 bg-white text-black flex flex-col items-center">
        <Navbar />
      <section className="max-w-3xl w-full mb-16">
        <h1 className="text-4xl font-bold mb-4 font-space">About Me</h1>
        <p className="text-lg mb-6 text-gray-700">
          Hi, I'm Samuel Obidi, a passionate developer and digital strategist dedicated to helping businesses grow through creative, high-quality web solutions. With over 5 years of experience in the industry, I specialize in building modern, scalable, and user-focused products that drive real results. My approach combines technical expertise, design thinking, and a deep understanding of business needs to deliver impactful digital experiences.
        </p>
        <p className="text-lg mb-6 text-gray-700">
          I have worked with startups, agencies, and established companies, delivering projects ranging from SaaS platforms and e-commerce sites to marketing websites and custom web applications. My mission is to empower brands to reach their full potential online by crafting solutions that are not only beautiful but also effective and easy to use.
        </p>
        <p className="text-lg mb-6 text-gray-700">
          When I'm not coding, you can find me exploring new technologies, mentoring aspiring developers, or collaborating with creative teams to solve complex challenges. Let's connect and see how I can help elevate your business!
        </p>
      </section>
      <section className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow p-8 flex flex-col gap-4 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <div className="text-lg text-gray-800">Email: <a href="mailto:samuelobidi@gmail.com" className="underline hover:text-blue-600">samuelobidi@gmail.com</a></div>
        <div className="text-lg text-gray-800">LinkedIn: <a href="https://linkedin.com/in/samuelobidi" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">linkedin.com/in/samuelobidi</a></div>
        <div className="text-lg text-gray-800">GitHub: <a href="https://github.com/samuelobidi" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">github.com/samuelobidi</a></div>
      </section>
    </main>
  );
}
