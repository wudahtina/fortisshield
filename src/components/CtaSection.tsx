
import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="section-padding bg-navy-800">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-navy-900 to-navy-700 rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 p-10 lg:p-16">
              <div className="flex items-center mb-6">
                <Shield className="h-10 w-10 text-gold-500" />
                <h3 className="text-white text-2xl md:text-3xl font-bold ml-4">
                  Secure Your Assets Today
                </h3>
              </div>
              
              <p className="text-gray-200 text-lg mb-8 max-w-2xl">
                Don't compromise on security. Our team of experts is ready to develop
                a comprehensive security strategy tailored to your unique requirements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-secondary flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white/20 hover:text-white">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/3 bg-navy-900 p-10 lg:p-16 h-full flex items-center justify-center">
              <div className="space-y-6 text-center lg:text-left">
                <div>
                  <p className="text-gold-500 font-semibold mb-1">Call Us</p>
                  <p className="text-white text-xl">+447520609888</p>
                </div>
                
                <div>
                  <p className="text-gold-500 font-semibold mb-1">Email Us</p>
                  <p className="text-white text-xl">info@fortisshield.org</p>
                </div>
                
                <div>
                  <p className="text-gold-500 font-semibold mb-1">Available 24/7</p>
                  <p className="text-white">Emergency response team on standby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
