
import { Shield, Briefcase, Users, Key, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg card-shadow transition-transform duration-300 hover:translate-y-[-5px]",
      className
    )}>
      <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-navy-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link to="/services" className="text-navy-800 font-semibold inline-flex items-center">
        Learn More
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 mb-8">
            Our Premier Security Services
          </h2>
          <p className="text-gray-600">
            We provide comprehensive security solutions for high-value assets, 
            tailored to the unique needs of our discerning clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Lock className="h-8 w-8 text-navy-800" />}
            title="Secure Vault Storage"
            description="State-of-the-art vault facilities for secure storage of precious metals, jewellery, and valuable documents with 24/7 surveillance and biometric access control."
          />
          
          <ServiceCard 
            icon={<Briefcase className="h-8 w-8 text-navy-800" />}
            title="Bullion Transportation"
            description="Armed escort and secure logistics for the safe transportation of precious metals and bullion between locations across the UK and internationally."
          />
          
          <ServiceCard 
            icon={<Shield className="h-8 w-8 text-navy-800" />}
            title="Global Asset Protection"
            description="Comprehensive security solutions for protecting high-value assets across multiple international locations with real-time monitoring."
          />
          
          <ServiceCard 
            icon={<Users className="h-8 w-8 text-navy-800" />}
            title="Private Security Escort"
            description="Elite personal security teams comprised of former military and law enforcement professionals for discreet personal protection."
          />
          
          <ServiceCard 
            icon={<Key className="h-8 w-8 text-navy-800" />}
            title="High-Value Goods Logistics"
            description="End-to-end secure logistics planning and execution for high-value goods, including customs clearance and regulatory compliance."
          />
          
          <div className="bg-navy-800 text-white p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="mb-6">
                Our security experts can develop bespoke security strategies tailored to your unique requirements.
              </p>
            </div>
            <Link to="/contact" className="btn-secondary text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
