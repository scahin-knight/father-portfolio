"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Crown, Users, Presentation, Rocket, Target, BookOpen, HeartHandshake, Handshake } from "lucide-react";

const services = [
  {
    title: "Insurance Consulting",
    desc: "Advisory across life, health and general insurance portfolios.",
    icon: <ShieldCheck size={20} />
  },
  {
    title: "Business Development",
    desc: "Scalable growth strategies for insurance & financial businesses.",
    icon: <TrendingUp size={20} />
  },
  {
    title: "Sales Leadership",
    desc: "Building elite sales cultures that consistently outperform.",
    icon: <Crown size={20} />
  },
  {
    title: "Advisor Recruitment",
    desc: "Sourcing, screening and onboarding top insurance advisors.",
    icon: <Users size={20} />
  },
  {
    title: "Sales Coaching",
    desc: "Hands-on coaching to lift conversion and retention.",
    icon: <Presentation size={20} />
  },
  {
    title: "Leadership Training",
    desc: "Structured programs to develop future managers.",
    icon: <Rocket size={20} />
  },
  {
    title: "Performance Management",
    desc: "KPI systems, reviews and course correction strategies.",
    icon: <Target size={20} />
  },
  {
    title: "Business Strategy",
    desc: "Market entry, expansion and channel strategy.",
    icon: <BookOpen size={20} />
  },
  {
    title: "Customer Relationship Consulting",
    desc: "Enhancing retention through better touchpoints.",
    icon: <HeartHandshake size={20} />
  },
  {
    title: "Team Development",
    desc: "High-trust teams built on clarity and accountability.",
    icon: <Handshake size={20} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            Services
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((svc, index) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 flex flex-col items-start"
            >
              <div className="gold-icon-box-outline !w-12 !h-12 !rounded-xl !mb-6">
                {svc.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{svc.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
