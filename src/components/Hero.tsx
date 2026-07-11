"use client";

import { motion } from "framer-motion";
import { Download, Mail, Plane, Trophy } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Particles/Stars (simulated with CSS/framer) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-[#D4AF37] rounded-full opacity-50 blur-[1px]"></div>
        <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-60 blur-[1px]"></div>
        <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-[#D4AF37] rounded-full opacity-40 blur-[2px]"></div>
        <div className="absolute top-[60%] right-[10%] w-1 h-1 bg-[#D4AF37] rounded-full opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#030712]/50 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
                15+ Years of Excellence
              </span>
            </div>

            {/* Huge Typography */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              <span className="text-white block">M. JAYA</span>
              <span className="text-[#D4AF37] block">KUMAR</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-semibold mb-6">
              Assistant Manager
            </h2>

            {/* Key Skills Tagline */}
            <p className="text-gray-300 text-sm md:text-base font-semibold tracking-[0.2em] uppercase leading-relaxed mb-8">
              Leading Teams &bull; Driving Business Growth &bull; Building Lasting Customer Relationships
            </p>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Experienced insurance and business development professional with more than 15 years of leadership experience in insurance sales, recruitment, business growth, customer relationship management, and high-performing team development.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                download="M_Jayakumar_Resume.pdf"
                target="_blank" 
                className="bg-gold px-8 py-3.5 rounded-full flex items-center gap-2 text-sm uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
              >
                <Download size={18} />
                DOWNLOAD RESUME
              </a>
              <a 
                href="#contact" 
                className="border-gold px-8 py-3.5 rounded-full flex items-center gap-2 text-sm uppercase font-semibold"
              >
                <Mail size={18} />
                CONTACT ME
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              {/* Glowing Gold Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] z-0"></div>
              
              {/* Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-[#030712] z-10 border border-white/5">
                <Image
                  src="/profile_new.jpg"
                  alt="M. Jayakumar"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Badge 1 - Foreign Tours */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -right-4 md:right-0 glass-card px-5 py-3 flex items-center gap-4 z-20"
              >
                <Plane className="text-[#D4AF37]" size={24} />
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Foreign Tours</p>
                  <p className="text-white font-bold text-sm">5 Countries</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Pan India Topper */}
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 -left-4 md:left-0 glass-card px-5 py-3 flex items-center gap-4 z-20"
              >
                <Trophy className="text-[#D4AF37]" size={24} />
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Pan India</p>
                  <p className="text-white font-bold text-sm">Topper</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
