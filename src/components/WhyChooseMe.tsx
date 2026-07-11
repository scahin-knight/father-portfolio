"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "15+ Years Experience",
  "Proven Leadership",
  "Business Growth Expert",
  "Strong Recruiter",
  "Team Builder",
  "Sales Strategist",
  "Customer Centric",
  "Corporate Professional"
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 bg-primary relative z-10 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why <span className="text-accent">Choose Me?</span></h2>
            <div className="h-1 w-20 bg-accent mx-auto md:mx-0 rounded-full mb-6" />
            <p className="text-gray-400 leading-relaxed">
              Bringing a unique blend of strategic vision, proven sales methodologies, and deep industry knowledge to drive extraordinary results.
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
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 glass rounded-xl hover:bg-secondary/80 transition duration-300"
                >
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span className="text-gray-200 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
