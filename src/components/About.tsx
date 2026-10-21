"use client";

import { motion } from "framer-motion";
import { Target, Briefcase, Building2, Award, Zap, Users, BookOpen, Globe2, MapPin } from "lucide-react";
import Image from "next/image";

const strengths = [
  {
    icon: <Award className="text-[#D4AF37]" size={20} />,
    title: "Achievement & People Management",
    desc: "Achievement oriented, with excellent people management skills and the ability to manage change with ease."
  },
  {
    icon: <Zap className="text-[#D4AF37]" size={20} />,
    title: "Analytical & Negotiation Mastery",
    desc: "Excellent analytical and negotiation skills, executed with a proactive and results-driven strategic approach."
  },
  {
    icon: <Users className="text-[#D4AF37]" size={20} />,
    title: "Team Player & Presentation",
    desc: "Collaborative team leader equipped with dynamic interpersonal, communicative, and executive presentation capabilities."
  },
  {
    icon: <BookOpen className="text-[#D4AF37]" size={20} />,
    title: "Self-Learner & Product Depth",
    desc: "Self-motivated self-learner with deep interest in new industry developments, concepts, and technical product intricacies."
  }
];

const jobProfileHighlights = [
  "Recruiting insurance advisers into team and motivating them to sell insurance policies",
  "Building and scaling high-performing agency teams across diverse regional territories",
  "Sourcing high-volume business through advisors and aggressive open market penetration",
  "Delivering major business targets consistently through newly formed teams",
  "Conducting thorough product and sales training to empower and upskill advisors",
  "Establishing durable, high-trust customer relationships and expansive networks"
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
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

        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          
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
                    src="/profile_new.png"
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
            className="w-full lg:w-3/5 flex flex-col gap-6"
          >
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-bold">M. Jayakumar</span> (B.B.A.), an accomplished insurance sales leader and Assistant Manager with over <span className="text-[#D4AF37] font-semibold">14+ years of specialized experience</span> in insurance agency management, recruitment, and business development, backed by an earlier 19+ year foundation in large-scale industrial operations leadership.
              </p>
              <p className="text-gray-400 text-base">
                Throughout my insurance career with industry leaders like <span className="text-white font-medium">Aditya Birla Sun Life</span>, <span className="text-white font-medium">HDFC Life</span>, <span className="text-white font-medium">Max Bupa</span>, <span className="text-white font-medium">Kotak Life</span>, and <span className="text-white font-medium">Bajaj Allianz</span>, I have excelled at turning newly formed advisor groups into high-revenue teams through proactive recruitment, continuous product coaching, and strategic open market sourcing.
              </p>
            </div>

            {/* Career Objective / Aim Card (Exact from Resume) */}
            <div className="glass-card p-6 border-l-4 border-l-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/5 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <Target className="text-[#D4AF37]" size={22} />
                <h3 className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">Career Aim</h3>
              </div>
              <p className="text-white text-base md:text-lg font-medium leading-relaxed italic">
                &ldquo;To work in MNC / corporate companies and achieve a top management position, and to learn more management techniques.&rdquo;
              </p>
            </div>

            {/* Key stats / details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Briefcase size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Current Designation</p>
                  <p className="text-white font-bold text-base">Assistant Manager</p>
                  <p className="text-xs text-[#D4AF37]">Aditya Birla Sun Life</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Globe2 size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Languages Known</p>
                  <p className="text-white font-bold text-base">Tamil (Native)</p>
                  <p className="text-xs text-gray-400">English &amp; Tamil (Read &amp; Write)</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Academic Background</p>
                  <p className="text-white font-bold text-base">B.B.A. &bull; D.T.Tech</p>
                  <p className="text-xs text-gray-400">Annamalai Univ &bull; Nachimuthu Poly</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Base Location</p>
                  <p className="text-white font-bold text-base">Pollachi, Coimbatore</p>
                  <p className="text-xs text-gray-400">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Strengths & Job Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-t-2 border-t-[#D4AF37]"
          >
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-[#D4AF37]">&#10022;</span> Core Strengths
            </h3>
            <p className="text-gray-400 text-sm mb-6">Key competencies defining professional leadership &amp; operational effectiveness</p>
            
            <div className="space-y-4">
              {strengths.map((str, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#030712]/60 border border-white/5 hover:border-[#D4AF37]/30 transition-all flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 shrink-0 mt-0.5">
                    {str.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{str.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{str.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Job Profile / Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-t-2 border-t-[#D4AF37]"
          >
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-[#D4AF37]">&#10022;</span> Job Profile &amp; Responsibilities
            </h3>
            <p className="text-gray-400 text-sm mb-6">Core operational disciplines executed across insurance leadership roles</p>

            <div className="space-y-3">
              {jobProfileHighlights.map((highlight, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#030712]/60 border border-white/5 flex items-start gap-3 hover:border-[#D4AF37]/30 transition-all">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
