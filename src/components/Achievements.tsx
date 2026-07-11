"use client";

import { motion } from "framer-motion";
import { Trophy, Crown, TrendingUp, Users, Plane, ShieldCheck } from "lucide-react";

const achievements = [
  {
    num: "01",
    icon: <Trophy size={20} />,
    title: "Pan India Topper",
    desc: "Top performer across national leaderboard."
  },
  {
    num: "02",
    icon: <Crown size={20} />,
    title: "Multiple Promotions",
    desc: "Two promotions at Bajaj Allianz alone."
  },
  {
    num: "03",
    icon: <TrendingUp size={20} />,
    title: "₹30 Lakhs Business",
    desc: "Achieved at Kotak Life Insurance."
  },
  {
    num: "04",
    icon: <Users size={20} />,
    title: "15 Club Members Produced",
    desc: "Elite advisor tier developed under leadership."
  },
  {
    num: "05",
    icon: <Plane size={20} />,
    title: "Five International Tours",
    desc: "Awarded for consistent performance."
  },
  {
    num: "06",
    icon: <ShieldCheck size={20} />,
    title: "Excellent Leadership Record",
    desc: "Trusted across six major insurers."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            Achievements
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 min-h-[200px] flex flex-col justify-end relative"
            >
              {/* Background Number */}
              <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] select-none pointer-events-none">
                {item.num}
              </div>

              {/* Icon Box */}
              <div className="absolute top-8 left-8 gold-icon-box !mb-0 !w-14 !h-14 !rounded-2xl">
                {item.icon}
              </div>

              <div className="mt-20">
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
