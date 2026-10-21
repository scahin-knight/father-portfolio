"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "14+ Years Insurance Leadership",
  "30+ Years Overall Career Experience",
  "Pan-India Topper in Recruitment",
  "5-Time International Tour Winner",
  "Proven Team Builder & Mentor",
  "Major Open Market Sourcing",
  "High People Management Competency",
  "Deep Technical Product Knowledge"
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why <span className="text-[#D4AF37]">Choose Me?</span>
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto md:mx-0 rounded-full mb-6" />
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Bringing a unique blend of strategic vision, nationwide recruitment excellence, high-volume sales sourcing, and deep industrial operations discipline to achieve top management goals.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3.5 p-4 glass-card hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  <CheckCircle2 size={20} className="text-[#D4AF37] shrink-0" />
                  <span className="text-gray-200 font-semibold text-sm">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
