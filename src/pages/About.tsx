
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import CtaSection from "@/components/CtaSection";
import { Shield, Award, Briefcase, Users, Check } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="About Fortis Shield Security"
        subtitle="With decades of experience in the security industry, we provide unparalleled protection for your most valuable assets."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        showCta={false}
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Fortis Shield Security Services was founded in 2008 by William Harrison, a former Royal Marines Commander, and Elizabeth Montgomery, an ex-MI5 intelligence officer. Their vision was to create a security company that combined military precision with intelligence expertise to provide unparalleled protection for high-value assets.
            </p>
            <p className="text-gray-600 mb-6">
              Starting with a small team of former military and law enforcement professionals, Fortis Shield quickly established a reputation for excellence in the security industry. Our early focus on secure transport for financial institutions laid the foundation for what would become a comprehensive suite of security services.
            </p>
            <p className="text-gray-600 mb-10">
              Today, Fortis Shield employs over 250 security professionals and operates in 12 countries, providing bespoke security solutions to private clients, financial institutions, and businesses worldwide. Our commitment to discretion, integrity, and excellence remains at the core of everything we do.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To provide exceptional security services that protect our clients' most valuable assets and give them complete peace of mind through innovative solutions, technical excellence, and unwavering professionalism.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be the global leader in high-value asset protection, recognized for setting the gold standard in security services through our commitment to excellence, integrity, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 mb-8 text-white">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy-800 p-8 rounded-lg">
              <Shield className="h-12 w-12 text-gold-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-300">
                We maintain the highest ethical standards in all our operations,
                ensuring complete transparency and accountability to our clients.
              </p>
            </div>
            
            <div className="bg-navy-800 p-8 rounded-lg">
              <Award className="h-12 w-12 text-gold-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in every aspect of our service, from
                personnel training to technological implementation.
              </p>
            </div>
            
            <div className="bg-navy-800 p-8 rounded-lg">
              <Briefcase className="h-12 w-12 text-gold-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Discretion</h3>
              <p className="text-gray-300">
                We understand the sensitive nature of our work and maintain
                absolute confidentiality regarding our clients and operations.
              </p>
            </div>
            
            <div className="bg-navy-800 p-8 rounded-lg">
              <Users className="h-12 w-12 text-gold-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously evolve our approaches and technologies to stay
                ahead of emerging threats and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-8">
                UK Licensure & Certifications
              </h2>
              <p className="text-gray-600 mb-6">
                Fortis Shield maintains all required licenses and certifications to operate as a premier security provider in the United Kingdom. Our commitment to regulatory compliance ensures that our clients receive services that meet or exceed all industry standards.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900">Security Industry Authority (SIA) Licensed</h3>
                    <p className="text-gray-600">All our security professionals hold valid SIA licenses appropriate for their roles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900">Approved Contractor Scheme (ACS) Accredited</h3>
                    <p className="text-gray-600">Demonstrating our commitment to quality and best practices in the security industry.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900">ISO 9001:2015 Certified</h3>
                    <p className="text-gray-600">International standard for quality management systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900">ISO 27001:2013 Certified</h3>
                    <p className="text-gray-600">International standard for information security management.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900">£20 Million Liability Insurance</h3>
                    <p className="text-gray-600">Comprehensive coverage for complete client peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Elite Team</h3>
              <p className="text-gray-600 mb-6">
                At the core of Fortis Shield's operations is our exceptional team of security professionals. We employ only the most qualified individuals with backgrounds in:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="bg-navy-800 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <span className="text-gray-600">Elite military units (SAS, Royal Marines, Parachute Regiment)</span>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-navy-800 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <span className="text-gray-600">Intelligence agencies (MI5, MI6, GCHQ)</span>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-navy-800 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <span className="text-gray-600">Specialist law enforcement (Diplomatic Protection, SO19, NCA)</span>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-navy-800 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">4</span>
                  </div>
                  <span className="text-gray-600">Technical security specialists</span>
                </li>
              </ul>

              <p className="text-gray-600">
                All team members undergo rigorous vetting procedures, regular training, and continuous professional development to ensure they maintain the highest standards of security expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default About;
