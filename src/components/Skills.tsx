"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Insurance Sales", percent: 96 },
  { name: "Business Development", percent: 94 },
  { name: "Leadership", percent: 95 },
  { name: "Sales Management", percent: 93 },
  { name: "Team Building", percent: 92 },
  { name: "Recruitment", percent: 90 },
  { name: "Negotiation", percent: 91 },
  { name: "Networking", percent: 89 },
  { name: "CRM", percent: 88 },
  { name: "Presentation Skills", percent: 90 },
  { name: "Customer Relationship", percent: 94 },
  { name: "Advisor Training", percent: 92 },
  { name: "Strategic Planning", percent: 91 },
  { name: "Operations Management", percent: 88 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            Core Skills
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-bold text-base">{skill.name}</span>
                <span className="text-[#D4AF37] font-bold text-sm">{skill.percent}%</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#D4AF37]/80 to-[#FDE047] rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
