
import { CheckCircle } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="section-title mb-8">
              Why Choose Fortis Shield?
            </h2>
            <p className="text-gray-600 mb-8">
              With decades of experience in the security industry, we have built our reputation on
              delivering exceptional security services with unwavering integrity and professionalism.
              Our commitment to excellence has made us the trusted security partner for discerning clients
              across the United Kingdom and beyond.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">SIA Licensed Personnel</h3>
                  <p className="text-gray-600 text-sm">All security operatives are SIA licensed and vetted</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">ISO 27001 Certified</h3>
                  <p className="text-gray-600 text-sm">International standard for information security</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">£20M Liability Insurance</h3>
                  <p className="text-gray-600 text-sm">Comprehensive coverage for client peace of mind</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">24/7 Operations Centre</h3>
                  <p className="text-gray-600 text-sm">Round-the-clock monitoring and response</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-gray-100 p-10 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center">
                <div className="text-navy-900 font-bold text-4xl mb-2">15+</div>
                <p className="text-gray-600 text-center">Years of Experience</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-navy-900 font-bold text-4xl mb-2">250+</div>
                <p className="text-gray-600 text-center">Security Professionals</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-navy-900 font-bold text-4xl mb-2">500+</div>
                <p className="text-gray-600 text-center">Satisfied Clients</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-navy-900 font-bold text-4xl mb-2">12</div>
                <p className="text-gray-600 text-center">Global Offices</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-navy-900 font-bold text-4xl mb-2">24/7</div>
                <p className="text-gray-600 text-center">Support & Monitoring</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-navy-900 font-bold text-4xl mb-2">100%</div>
                <p className="text-gray-600 text-center">Client Satisfaction</p>
              </div>
            </div>
            
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="font-semibold text-navy-900 mb-4 text-center">Our Accreditations</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-24 h-16">
                  <span className="text-sm font-semibold text-navy-800">SIA</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-24 h-16">
                  <span className="text-sm font-semibold text-navy-800">ISO 9001</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-24 h-16">
                  <span className="text-sm font-semibold text-navy-800">ISO 27001</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-24 h-16">
                  <span className="text-sm font-semibold text-navy-800">ACS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
