
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-8">
              About Fortis Shield Security
            </h2>
            <p className="text-gray-600 mb-6">
              Founded by former members of elite military and law enforcement units, Fortis Shield
              Security Services has established itself as the premier provider of high-end security
              solutions for private clients, financial institutions, and businesses across the United Kingdom.
            </p>
            <p className="text-gray-600 mb-6">
              Our approach combines cutting-edge technology with rigorous human expertise, ensuring
              the highest level of protection for our clients' most valuable assets. We take pride
              in our discreet service delivery and unwavering commitment to confidentiality.
            </p>
            <p className="text-gray-600 mb-8">
              With a global network of security professionals and strategic partnerships with leading
              financial institutions, we're uniquely positioned to provide seamless security solutions
              that transcend borders and exceed expectations.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-navy-100 h-64 rounded-lg"></div>
              <div className="bg-navy-800 h-44 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-200">
                  To provide unparalleled security services that protect our clients' assets
                  and give them complete peace of mind.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 mt-12">
              <div className="bg-gold-500 h-44 rounded-lg p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">Our Values</h3>
                <ul className="text-navy-800 space-y-1">
                  <li>• Integrity</li>
                  <li>• Excellence</li>
                  <li>• Discretion</li>
                  <li>• Innovation</li>
                </ul>
              </div>
              <div className="bg-navy-200 h-64 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
