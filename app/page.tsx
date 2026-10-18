import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Heritage from "@/components/Heritage";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Accreditations from "@/components/Accreditations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Heritage />
      <FeaturedProjects />
      <WhyChoose />
      <Testimonials />
      <Accreditations />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}