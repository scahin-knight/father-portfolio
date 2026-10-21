"use client";

import { Mail, ArrowUp, Globe, Link, Camera } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020813] pt-20 pb-10 border-t border-accent/20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">M. JAYAKUMAR</h2>
            <p className="text-gray-400 italic mb-6 max-w-md border-l-2 border-accent pl-4">
              "Leadership is not about managing people. It is about inspiring people to achieve excellence."
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-secondary/80 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-secondary transition duration-300 border border-transparent hover:border-accent/30">
                <Link size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-secondary/80 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-secondary transition duration-300 border border-transparent hover:border-accent/30">
                <Globe size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-secondary/80 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-secondary transition duration-300 border border-transparent hover:border-accent/30">
                <Camera size={18} />
              </a>
              <a href="mailto:m.jayakumar1973@gmail.com" className="h-10 w-10 rounded-full bg-secondary/80 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-secondary transition duration-300 border border-transparent hover:border-accent/30">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Skills', 'Education'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-accent transition duration-300 flex items-center gap-2">
                    <span className="text-[#D4AF37] text-xs">&#9657;</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Services', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-accent transition duration-300 flex items-center gap-2">
                    <span className="text-accent text-xs">▹</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2026 M. Jayakumar. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-accent transition duration-300 text-sm uppercase tracking-widest"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
