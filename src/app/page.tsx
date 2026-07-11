import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LuxuryLoader from "@/components/LuxuryLoader";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen text-gray-200 selection:bg-accent selection:text-primary">
      <LuxuryLoader />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Services />
      <Achievements />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </main>
  );
}
