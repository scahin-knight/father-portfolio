"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "SKILLS", href: "#skills" },
  { name: "ACHIEVEMENTS", href: "#achievements" },
  { name: "EDUCATION", href: "#education" },
  { name: "SERVICES", href: "#services" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-[#030712]/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#home")}>
          <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#030712] font-bold text-lg">
            MJ
          </div>
          <div className="hidden md:block">
            <h1 className="text-white font-bold text-sm tracking-wide">M. JAYAKUMAR</h1>
            <p className="text-[#D4AF37] text-[10px] tracking-widest font-semibold uppercase">Insurance Sales &amp; Leadership</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-gray-300 hover:text-[#D4AF37] transition-colors text-xs font-semibold tracking-wider"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Hire Me Button */}
        <button 
          onClick={() => scrollTo("#contact")}
          className="bg-gold px-6 py-2.5 rounded-full flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          <Send size={16} />
          <span>HIRE ME</span>
        </button>
      </div>
    </motion.header>
  );
}
