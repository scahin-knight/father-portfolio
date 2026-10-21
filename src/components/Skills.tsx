"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Insurance Sales & Open Market Sourcing", percent: 96, category: "Sales" },
  { name: "Advisor Recruitment & Motivation", percent: 96, category: "Recruitment" },
  { name: "High-Performance Team Building", percent: 95, category: "Leadership" },
  { name: "Customer Relationships & Networking", percent: 95, category: "Relations" },
  { name: "Business Development & Target Delivery", percent: 94, category: "Strategy" },
  { name: "Analytical & Negotiation Mastery", percent: 94, category: "Strategy" },
  { name: "People Management & Change Adaptability", percent: 93, category: "Leadership" },
  { name: "Product Technical Training & Coaching", percent: 93, category: "Training" },
  { name: "INS-TAB & Digital Policy Workflow", percent: 90, category: "Technology" },
  { name: "Workforce & Industrial Operations", percent: 92, category: "Operations" },
  { name: "Executive Presentation & Interaction", percent: 91, category: "Communication" },
  { name: "Branch & DPO Channel Management", percent: 92, category: "Management" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            Core Competencies
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Strategic strengths honed across decades of active recruitment, sales drive, team mentorship, and operational leadership.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="glass-card p-6 border hover:border-[#D4AF37]/40 transition-all"
            >
              <div className="flex justify-between items-start gap-3 mb-3">
                <span className="text-white font-bold text-sm md:text-base leading-snug">{skill.name}</span>
                <span className="text-[#D4AF37] font-bold text-sm shrink-0">{skill.percent}%</span>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 + (index * 0.04), ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FDE047] rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
