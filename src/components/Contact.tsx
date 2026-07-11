"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#D4AF37] mb-4 tracking-tight">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            
            {/* Contact Cards */}
            <div className="glass-card p-6 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center shrink-0">
                <Phone className="text-[#030712]" size={24} />
              </div>
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-1">Phone</p>
                <p className="text-white font-semibold">+91 98940 31049</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center shrink-0">
                <Mail className="text-[#030712]" size={24} />
              </div>
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-semibold">m.jayakumar1973@gmail.com</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center shrink-0">
                <MapPin className="text-[#030712]" size={24} />
              </div>
              <div>
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-1">Address</p>
                <p className="text-white font-semibold text-sm leading-relaxed">
                  104, Arokyanathar Street, Pollachi – 642001, Coimbatore District, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              <a href="https://wa.me/919894031049" target="_blank" rel="noreferrer" className="glass-card py-4 flex flex-col items-center justify-center gap-2 hover:bg-[#D4AF37]/5 transition-colors">
                <MessageCircle className="text-green-400" size={20} />
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">WhatsApp</span>
              </a>
              <a href="mailto:m.jayakumar1973@gmail.com" className="glass-card py-4 flex flex-col items-center justify-center gap-2 hover:bg-[#D4AF37]/5 transition-colors">
                <Mail className="text-[#D4AF37]" size={20} />
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Email</span>
              </a>
              <a href="tel:+919894031049" className="glass-card py-4 flex flex-col items-center justify-center gap-2 hover:bg-[#D4AF37]/5 transition-colors">
                <Phone className="text-[#D4AF37]" size={20} />
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Call</span>
              </a>
            </div>

            {/* Map Embed */}
            <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-[#1f2937] mt-2 relative group cursor-pointer">
              <a href="https://www.google.com/maps/search/?api=1&query=104,+Arokyanathar+Street,+Pollachi+642001,+Coimbatore,+Tamil+Nadu,+India" target="_blank" rel="noreferrer" className="absolute inset-0 z-20"></a>
              <iframe 
                src="https://maps.google.com/maps?q=104,+Arokyanathar+Street,+Pollachi+642001,+Coimbatore,+Tamil+Nadu,+India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10 pointer-events-none"
              ></iframe>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-7/12">
            <form action="https://api.web3forms.com/submit" method="POST" className="glass-card p-8 md:p-10 flex flex-col gap-8 h-full border-t border-t-[#D4AF37]/30 border-l border-l-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
              <input type="hidden" name="access_key" value="6c8c6513-e4f7-4cc8-bfe6-f6eba533f9ea" />
              <input type="hidden" name="from_name" value="M. Jayakumar Portfolio" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Your name"
                    className="w-full bg-[#030712] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="you@company.com"
                    className="w-full bg-[#030712] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  placeholder="How can I help?"
                  className="w-full bg-[#030712] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={6}
                  placeholder="Tell me about your goals..."
                  className="w-full bg-[#030712] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none flex-grow"
                ></textarea>
              </div>

              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-xs">I typically respond within 24 hours.</p>
                <button 
                  type="submit" 
                  className="bg-gold px-8 py-3.5 rounded-full flex items-center gap-2 text-sm uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
                >
                  <Send size={18} />
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
