import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LuxuryLoader from "@/components/LuxuryLoader";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen text-gray-200 selection:bg-[#D4AF37] selection:text-[#030712]">
      <LuxuryLoader />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Education />
      <Services />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </main>
  );
}
