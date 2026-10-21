"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ShieldCheck, Factory, Award, Calendar, MapPin, Building } from "lucide-react";

interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  location?: string;
  badge?: string;
  bullets: string[];
}

const insuranceExperiences: ExperienceItem[] = [
  {
    date: "18.03.2024 – PRESENT",
    role: "Assistant Manager",
    company: "Aditya Birla Sun Life Insurance Company Ltd",
    badge: "Current Role",
    bullets: [
      "Recruiting insurance advisers into team and motivating them to sell insurance policies",
      "Sourcing business through advisors and aggressive open market development",
      "Delivered major business volume through a newly formed team",
      "Training advisers on product technicalities and high-conversion sales methodology",
      "Cultivating strong customer relationships and strategic regional networking"
    ]
  },
  {
    date: "11.02.2021 – 16.03.2024",
    role: "Area Business Manager",
    company: "HDFC Life Insurance Company",
    badge: "1 Promotion Earned",
    bullets: [
      "Received one promotion in the last year for exceptional performance and target delivery",
      "Spearheaded team building and regional agency network growth",
      "Delivered major business through newly formed advisor teams",
      "Mentored frontline managers and advisors, establishing a high-performing sales culture"
    ]
  },
  {
    date: "12.06.2019 – 10.06.2020",
    role: "Business Development Manager",
    company: "Max Bupa Health Insurance Co. Ltd",
    bullets: [
      "Accelerated health insurance distribution and agency advisor network expansion",
      "Formed new teams delivering major market penetration and customer onboarding",
      "Conducted specialized product training on health insurance solutions"
    ]
  },
  {
    date: "APR 2018 – NOV 2018 (03.04.2018 – 30.11.2018)",
    role: "Senior Managing Partner",
    company: "Kotak Life Insurance Co. Ltd",
    location: "Pollachi DPO",
    badge: "₹30 Lakhs Business",
    bullets: [
      "Successfully handled Pollachi DPO (Direct Point of Operation)",
      "Recruited AP (Agency Partners) and LA (Life Advisors)",
      "Achieved business of ₹30 Lakhs during this high-impact 8-month period"
    ]
  },
  {
    date: "03.04.2018 – 31.07.2018",
    role: "Associate Branch Development Manager (ABDM)",
    company: "Religare Health Insurance Company Ltd",
    bullets: [
      "Handled branch team members and operational performance",
      "Recruited Sales Managers and ADOs (Agency Development Officers)",
      "Expanded distribution channels across target market segments"
    ]
  },
  {
    date: "JUN 2012 – MAR 2018",
    role: "Executive Sales Manager",
    company: "Bajaj Allianz Life Insurance Co. Ltd",
    location: "Pollachi Branch",
    badge: "Pan-India Topper",
    bullets: [
      "Handled high-performing team members and advisory channel",
      "Received 2 promotions (2015–2016 and 2016–2017) for stellar consistency",
      "Produced 15 club members with my team in total",
      "Won 5 international foreign tours for record-setting achievements",
      "Pan India topper in Insurance Consultant recruitment",
      "Topper in using INS-TAB digital application platform for policy login"
    ]
  },
  {
    date: "12.06.2010 – 2012",
    role: "Sales Manager",
    company: "Reliance Life Insurance",
    badge: "Recruitment Topper",
    bullets: [
      "Awarded Topper in Insurance Consultant recruitment",
      "Built active agency team and drove new business from ground up",
      "Trained advisors in open market customer acquisition"
    ]
  }
];

const industrialExperiences: ExperienceItem[] = [
  {
    date: "9.5 YEARS TENURE",
    role: "Senior Officer, Production",
    company: "Jay Textiles Unit 2",
    location: "Othakalmandabam",
    badge: "100 People Reporting Daily",
    bullets: [
      "100 people reporting to me every day on the main production floor",
      "Complete operational leadership of manufacturing output, quality control, and shift coordination",
      "Ensured high workforce productivity, discipline, and resource efficiency"
    ]
  },
  {
    date: "5 YEARS TENURE",
    role: "Production In-charge & Yarn Sales Manager",
    company: "Kongarar Integrated Fibres (P) Ltd",
    location: "Kedimedu",
    badge: "Recruitment & Sales",
    bullets: [
      "Labour recruitment and training done by me for entire plant operations",
      "Managed yarn sales operations, industrial client relations, and delivery schedules",
      "Integrated machine efficiency with optimal workforce deployment"
    ]
  },
  {
    date: "2.5 YEARS TENURE",
    role: "Unit In-charge",
    company: "J.S. Cotton Spinning Mills (P) Ltd",
    location: "Sultanpet",
    badge: "25 People Reporting Daily",
    bullets: [
      "25 people reporting to me every day",
      "Supervised unit spinning operations, shift handovers, and yarn quality standards"
    ]
  },
  {
    date: "6 MONTHS",
    role: "Shift Supervisor",
    company: "Kathiresan Mills",
    location: "Panikkampatti",
    badge: "80 People Monitored Daily",
    bullets: [
      "Monitored the work of 80 people every day across demanding industrial shifts",
      "Ensured zero-defect machinery operation and high throughput speed"
    ]
  },
  {
    date: "1.5 YEARS TENURE",
    role: "Trainee Maintenance Supervisor",
    company: "Sri Sakthi Textiles Ltd",
    location: "Pollachi",
    bullets: [
      "Conducted machine maintenance, diagnostics, and preventative technical servicing",
      "Built a deep practical foundation in machinery mechanics and team supervision"
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"insurance" | "industrial">("insurance");
  const currentList = activeTab === "insurance" ? insuranceExperiences : industrialExperiences;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight"
          >
            Experience
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Over 30 years of total professional leadership, spanning 14+ years in premier insurance corporations and 19+ years in large-scale industrial operations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0f1522] border border-[#1f2937] shadow-xl">
            <button
              onClick={() => setActiveTab("insurance")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "insurance"
                  ? "bg-[#D4AF37] text-[#030712] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ShieldCheck size={18} />
              <span>Insurance Leadership (7 Roles)</span>
            </button>
            <button
              onClick={() => setActiveTab("industrial")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "industrial"
                  ? "bg-[#D4AF37] text-[#030712] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Factory size={18} />
              <span>Industrial &amp; Operations (5 Roles)</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent -translate-x-1/2 hidden md:block"></div>
          {/* Mobile vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent md:hidden"></div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-12"
            >
              {currentList.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] -translate-x-1/2 z-10 hidden md:block"></div>
                    {/* Mobile Dot */}
                    <div className="absolute left-6 w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] -translate-x-[5.5px] z-10 md:hidden mt-8"></div>

                    {/* Empty space for alternating layout */}
                    <div className="w-full md:w-1/2 hidden md:block"></div>

                    {/* Content Card */}
                    <div className="w-full pl-12 md:pl-0 md:w-1/2 flex justify-start">
                      <div className="glass-card p-8 w-full border-t border-t-[#D4AF37]/30 border-l border-l-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all">
                        
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <div className="inline-flex items-center gap-1.5 bg-[#030712]/80 border border-[#1f2937] px-3.5 py-1 rounded-full">
                            <Calendar size={12} className="text-[#D4AF37]" />
                            <span className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">{exp.date}</span>
                          </div>

                          {exp.badge && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                              <Award size={12} />
                              {exp.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-5">
                          <span className="text-[#D4AF37] font-semibold flex items-center gap-1">
                            <Building size={14} />
                            {exp.company}
                          </span>
                          {exp.location && (
                            <span className="text-gray-400 text-xs flex items-center gap-1">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          )}
                        </div>

                        <ul className="space-y-2.5">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <ChevronRight className="text-[#D4AF37] shrink-0 mt-1" size={15} />
                              <span className="text-gray-300 text-xs md:text-sm leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
