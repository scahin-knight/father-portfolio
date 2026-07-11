"use client";

import { motion } from "framer-motion";
import { Target, Briefcase, Building2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[400px]">
              {/* Glowing Outline Card */}
              <div className="relative aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-[#D4AF37]/80 to-[#D4AF37]/10 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="absolute inset-1 bg-[#0f1522] rounded-[22px] overflow-hidden">
                  <Image
                    src="/profile_new.jpg"
                    alt="M. Jayakumar"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Executive Profile Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#030712] font-black uppercase tracking-widest text-xs py-3 px-8 rounded-full shadow-lg whitespace-nowrap">
                EXECUTIVE PROFILE
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 flex flex-col gap-8"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am an experienced insurance professional with a strong track record in <span className="text-[#D4AF37] font-semibold">sales leadership</span>, business development, advisor recruitment, customer relationship management, and team building.
              </p>
              <p>
                My passion lies in creating successful teams, mentoring professionals, and driving business growth through strategic leadership.
              </p>
            </div>

            {/* Career Objective Card */}
            <div className="glass-card p-6 border-l-4 border-l-[#D4AF37]">
              <div className="flex items-center gap-3 mb-3">
                <Target className="text-[#D4AF37]" size={20} />
                <h3 className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase">Career Objective</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                To achieve leadership excellence in leading corporate organizations while contributing to sustainable business growth through innovation, customer focus, and people development.
              </p>
            </div>

            {/* Two smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Current Role</p>
                  <p className="text-white font-bold text-lg">Assistant Manager</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Company</p>
                  <p className="text-white font-bold text-lg">Aditya Birla Sun Life</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
