"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookCheck, Languages, CheckCircle2 } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Business Administration (B.B.A.)",
    institution: "Annamalai University",
    field: "Business Administration & Management",
    badge: "Graduation",
    desc: "Comprehensive foundation in business operations, organisational leadership, marketing strategy, and managerial finance."
  },
  {
    degree: "Diploma in Textile Technology (D.T.Tech)",
    institution: "Nachimuthu Polytechnic, Pollachi",
    field: "Textile Engineering & Industrial Technology",
    badge: "Technical Diploma",
    desc: "Rigorous technical training in manufacturing systems, industrial mechanics, quality testing, and shop-floor engineering."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            Education &amp; Credentials
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Formal academic background combining modern business administration with strong technical and industrial engineering foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 md:p-10 flex flex-col justify-between border-t-2 border-t-[#D4AF37] relative group hover:border-[#D4AF37]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 group-hover:bg-[#D4AF37] group-hover:text-[#030712] transition-all duration-300">
                    <GraduationCap size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                    {edu.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-[#D4AF37] font-semibold text-base mb-1 flex items-center gap-2">
                  <BookCheck size={16} />
                  {edu.institution}
                </p>

                <p className="text-gray-400 text-xs uppercase font-medium tracking-wider mb-4">
                  {edu.field}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 size={14} className="text-[#D4AF37]" />
                <span>Verified Academic Qualification</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Details & Declaration Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-5xl mx-auto border border-[#1f2937]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Languages */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                <Languages size={16} />
                <span>Language Proficiency</span>
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-white font-medium">Mother Tongue: <span className="text-gray-300 font-normal">Tamil</span></p>
                <p className="text-white font-medium">Read &amp; Write: <span className="text-gray-300 font-normal">English, Tamil</span></p>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-3 md:border-x md:border-white/10 md:px-6">
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                <Award size={16} />
                <span>Profile Snapshot</span>
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-white font-medium">Full Name: <span className="text-gray-300 font-normal">M. Jayakumar</span></p>
                <p className="text-white font-medium">Location: <span className="text-gray-300 font-normal">Pollachi, Coimbatore (Dt.)</span></p>
                <p className="text-white font-medium">Nationality: <span className="text-gray-300 font-normal">Indian</span></p>
              </div>
            </div>

            {/* Declaration */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded">
                Official Declaration
              </span>
              <p className="text-gray-300 text-xs leading-relaxed italic">
                &ldquo;I hereby declare that all the above information is true to the best of my knowledge.&rdquo;
              </p>
              <div className="pt-2 text-right">
                <p className="text-white text-xs font-bold">Yours faithfully,</p>
                <p className="text-[#D4AF37] text-sm font-black">M. Jayakumar</p>
                <p className="text-gray-500 text-[10px]">Place: Pollachi</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
