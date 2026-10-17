import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Heritage from "@/components/Heritage";
import Projects from "@/components/Projects";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Accreditations from "@/components/Accreditations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Heritage />
      <Projects />
      <WhyChoose />
      <Testimonials />
      <Accreditations />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}