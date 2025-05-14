
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import CtaSection from "@/components/CtaSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero 
        title="Elite Security Solutions for High-Value Assets" 
        subtitle="Fortis Shield provides discreet, professional security services for private clients, financial institutions, and businesses requiring the highest levels of protection."
        image="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      />
      <ServicesSection />
      <AboutSection />
      <TrustSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Index;
