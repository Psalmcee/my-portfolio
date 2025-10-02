"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {

// Updated and detailed services data with icons
Code2,
Paintbrush2,
Megaphone,
Search,
Smartphone,
} from "lucide-react";
import BookACall from "@/components/BookACall";

const services = [
{
    title: "Web Development",
    description:
        "We build modern, responsive websites using the latest technologies such as Next.js and Tailwind CSS. Our solutions are optimized for performance, accessibility, and scalability, ensuring your business has a strong online presence that drives growth.",
    icon: <Code2 className="w-16 h-16 text-blue-600 mb-6" />,
},
{
    title: "UI/UX Design",
    description:
        "Our design team crafts intuitive and engaging user interfaces, focusing on seamless user experiences. We prioritize usability and aesthetics to create digital products that delight your customers and keep them coming back.",
    icon: <Paintbrush2 className="w-16 h-16 text-pink-500 mb-6" />,
},
{
    title: "Brand Strategy",
    description:
        "We offer comprehensive branding solutions, from logo design to brand messaging. Our strategies help your business stand out in a crowded market, ensuring consistency and recognition across all touchpoints.",
    icon: <Megaphone className="w-16 h-16 text-yellow-500 mb-6" />,
},
{
    title: "SEO Optimization",
    description:
        "Our SEO optimization services increase your brand exposure across different web platforms, helping you reach a wider audience. We implement best practices in on-page and off-page SEO to improve your search engine rankings and drive organic traffic.",
    icon: <Search className="w-16 h-16 text-green-500 mb-6" />,
},
{
    title: "App Development",
    description:
        "We develop robust and scalable web and mobile applications tailored to your business needs. From concept to deployment, our team ensures seamless integration, high performance, and a user-friendly experience across all devices.",
    icon: <Smartphone className="w-16 h-16 text-purple-600 mb-6" />,
},
];

const ServicesPage: React.FC = () => {
    return (
        <div className="min-h-screen text-gray-800 bg-gradient-to-b from-[#e0e7ff] to-[#f0fdfa]">
            <Navbar />
            <main className="max-w-5xl mx-auto mt-30 px-4 py-16">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="text-lg text-gray-600">
                We offer a range of services to help your business succeed in the digital world. From strategy and design to development and growth marketing, our team delivers end-to-end solutions tailored to your goals. We prioritize measurable outcomes, faster performance, improved accessibility, and higher conversions and follow a proven process: discovery, design, build, and iterate. Explore detailed offerings below or book a call to discuss a bespoke plan that fits your timeline and budget.
                </p>
            </section>
            <section className="grid gap-8 md:grid-cols-3">
                {[...services,
                {
                    title: "E-commerce Solutions",
                    description:
                    "We design and develop secure, scalable e-commerce platforms tailored to your business goals. Our solutions include seamless payment integration, product management, and optimized user experiences to maximize your online sales.",
                    icon: (
                    <svg className="w-16 h-16 text-orange-500 mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M6 6h15l-1.5 9h-13z" />
                        <circle cx="9" cy="20" r="1" />
                        <circle cx="18" cy="20" r="1" />
                        <path d="M6 6L4 2H2" />
                    </svg>
                    ),
                }
                ].map((service, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 animate-zoomIn"
                >
                    {service.icon}
                    <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                    <p className="text-gray-600 text-center">{service.description}</p>
                </div>
                ))}
                        </section>
                        <style jsx>{`
                            @keyframes zoomIn {
                                0% {
                                    opacity: 0;
                                    transform: scale(0.8);
                                }
                                100% {
                                    opacity: 1;
                                    transform: scale(1);
                                }
                            }
                            .animate-zoomIn {
                                animation: zoomIn 0.7s cubic-bezier(0.22, 1, 0.36, 1);
                            }
                        `}</style>
            {/* Technologies Carousel Section */}
            <section className="mt-20">
                <h2 className="text-2xl font-bold text-center mb-8">Technologies We Use</h2>
                <div className="overflow-hidden relative w-full">
                <div className="flex animate-scroll gap-12 items-center">
                    {/* Placeholder logos, replace src with actual logos as needed */}
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-16 w-auto" width={64} height={64} />
                    {/* Repeat logos for infinite effect */}
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-16 w-auto" width={64} height={64} />
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16 w-auto" width={64} height={64} />
                </div>
                </div>
                <style>
                    {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content;
                }
                `}</style>
            </section>
            </main>
            <BookACall />
            <Footer />
        </div>
    );
};

export default ServicesPage;