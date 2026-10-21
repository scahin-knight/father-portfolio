"use client";

import { motion } from "framer-motion";
import { Trophy, Crown, TrendingUp, Users, Plane, Smartphone, Users2, ShieldCheck } from "lucide-react";

const achievements = [
  {
    num: "01",
    icon: <Trophy size={22} />,
    title: "Pan India Topper",
    badge: "National Honor",
    desc: "Ranked #1 nationwide in Insurance Consultant recruitment at Bajaj Allianz & Reliance Life."
  },
  {
    num: "02",
    icon: <Crown size={22} />,
    title: "3 Fast-Track Promotions",
    badge: "Career Growth",
    desc: "Earned 2 consecutive promotions at Bajaj Allianz (2015-16 & 2016-17) and 1 promotion at HDFC Life."
  },
  {
    num: "03",
    icon: <Plane size={22} />,
    title: "5 International Tours Won",
    badge: "Global Recognition",
    desc: "Awarded 5 foreign tours for consistent, record-breaking sales and recruitment milestones."
  },
  {
    num: "04",
    icon: <Users size={22} />,
    title: "15 Club Members Produced",
    badge: "Team Excellence",
    desc: "Developed and mentored 15 elite club member insurance advisors within his branch teams."
  },
  {
    num: "05",
    icon: <TrendingUp size={22} />,
    title: "₹30 Lakhs Business in 8 Mos",
    badge: "Kotak Life DPO",
    desc: "Generated ₹30 Lakhs in new business volume while handling Pollachi DPO at Kotak Life."
  },
  {
    num: "06",
    icon: <Smartphone size={22} />,
    title: "INS-TAB Digital Topper",
    badge: "Digital Innovation",
    desc: "Top performer and agency pioneer in utilizing the INS-TAB digital application platform for policy logins."
  },
  {
    num: "07",
    icon: <Users2 size={22} />,
    title: "100+ People Under Supervision",
    badge: "Operations Command",
    desc: "Direct daily operational leadership of up to 100 workforce personnel in production management."
  },
  {
    num: "08",
    icon: <ShieldCheck size={22} />,
    title: "7 Top Insurers Trusted",
    badge: "MNC Proven",
    desc: "Proven leadership spanning Aditya Birla, HDFC Life, Max Bupa, Kotak, Religare, Bajaj & Reliance."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
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
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Quantifiable accolades and national milestones earned through relentless dedication and leadership excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-card p-7 min-h-[240px] flex flex-col justify-between relative group hover:border-[#D4AF37]/50 transition-all"
            >
              {/* Background Number */}
              <div className="absolute top-3 right-4 text-6xl font-black text-white/[0.04] group-hover:text-[#D4AF37]/[0.08] transition-colors select-none pointer-events-none">
                {item.num}
              </div>

              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="gold-icon-box !mb-0 !w-12 !h-12 !rounded-xl">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
