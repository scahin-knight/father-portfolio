"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Business Administration (B.B.A.)",
    institution: "Annamalai University",
  },
  {
    degree: "Diploma in Textile Technology",
    institution: "Nachimuthu Polytechnic, Pollachi",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-primary relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:border-accent/50 transition duration-300"
            >
              <div className="h-16 w-16 bg-secondary/80 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <GraduationCap size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
