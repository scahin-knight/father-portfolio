"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const experiences = [
  {
    date: "MAR 2024 - PRESENT",
    role: "Assistant Manager",
    company: "Aditya Birla Sun Life Insurance",
    bullets: [
      "Team Leadership",
      "Recruitment",
      "Sales Strategy",
      "Business Development",
      "Customer Relationship",
      "Advisor Development"
    ]
  },
  {
    date: "FEB 2021 - MAR 2024",
    role: "Area Business Manager",
    company: "HDFC Life Insurance",
    bullets: [
      "Promotion Earned",
      "Business Growth",
      "Leadership Development",
      "Team Building",
      "Performance Management"
    ]
  },
  {
    date: "JUL 2008 - JAN 2021",
    role: "Senior Sales Manager",
    company: "Bajaj Allianz Life Insurance",
    bullets: [
      "12+ Years Tenure",
      "Multiple Promotions",
      "Top Performance Awards",
      "Extensive Network Building"
    ]
  },
  {
    date: "OCT 2007 - JUN 2008",
    role: "Agency Manager",
    company: "Kotak Life Insurance",
    bullets: [
      "₹30 Lakhs Business Achieved",
      "Team Setup",
      "Market Penetration"
    ]
  },
  {
    date: "JUL 2006 - OCT 2007",
    role: "Sales Manager",
    company: "ICICI Prudential Life Insurance",
    bullets: [
      "Early Career Success",
      "Sales Targets Exceeded",
      "Client Acquisition"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            Experience
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent -translate-x-1/2 hidden md:block"></div>
          {/* Mobile vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent md:hidden"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] -translate-x-1/2 z-10 hidden md:block"></div>
                  {/* Mobile Dot */}
                  <div className="absolute left-6 w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] -translate-x-[5.5px] z-10 md:hidden mt-8"></div>

                  {/* Empty space for alternating layout */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>

                  {/* Content Card */}
                  <div className="w-full pl-12 md:pl-0 md:w-1/2 flex justify-start">
                    <div className="glass-card p-8 w-full border-t border-t-[#D4AF37]/20 border-l border-l-[#D4AF37]/20 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all">
                      
                      {/* Date Badge */}
                      <div className="inline-block bg-[#030712]/80 border border-[#1f2937] px-4 py-1.5 rounded-full mb-6">
                        <span className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">{exp.date}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-[#D4AF37] font-semibold mb-6">{exp.company}</h4>

                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ChevronRight className="text-[#D4AF37] shrink-0 mt-0.5" size={16} />
                            <span className="text-gray-300 text-sm leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
