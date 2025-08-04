"use client";
import { motion } from 'framer-motion';

export default function AdvertLogos() {
  return (
    <section className="py-10 flex flex-wrap justify-center gap-8 bg-gray-50">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="w-32 h-12 bg-gray-200 flex items-center justify-center rounded grayscale hover:grayscale-0 transition-all duration-300 shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <span className="text-gray-400 font-bold text-lg">Adverts</span>
        </motion.div>
      ))}
    </section>
  );
}
