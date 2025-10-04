import { ArrowRight } from "lucide-react";

export default function BookACall() {
    return (
        <section className="py-24 rounded-xl shadow flex flex-col items-center justify-center text-center">
        <p className="text-sm text-gray-700 mb-2">Book a call</p>
        <h2 className="text-4xl md:text-5xl font-medium font-space mb-4 text-black leading-tight">
          Join countless professionals
          <br />
          elevating their brand
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto px-4 mb-8">
          Schedule a free discovery call with us to talk strategy, goals, and
          how we can help you grow.
        </p>
        <div className="flex flex-row items-center justify-center gap-8 px-2 mb-8 opacity-60">
          {/* Placeholder logos and names */}
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 rounded-full w-12 h-6 mb-1" />
            <span className="text-xs text-gray-500">LOGO</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 rounded-full w-12 h-6 mb-1" />
            <span className="text-xs text-gray-500">Acme Corp</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 rounded-full w-12 h-6 mb-1" />
            <span className="text-xs text-gray-500">Quantum</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 rounded-full w-12 h-6 mb-1" />
            <span className="text-xs text-gray-500">uXLowbae</span>
          </div>
        </div>
        <a href="https://calendly.com/samuelobidi8/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white font-semibold text-base shadow-xl hover:scale-105 transform transition-all duration-200 mb-3 focus:outline-none focus:ring-4 focus:ring-amber-400 hover:border-amber-200">
          Schedule a Call <ArrowRight size={16} />
        </a>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-600">
            Only 2 open slots available
          </span>
        </div>
      </section>
    );
}