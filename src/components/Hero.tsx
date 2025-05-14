
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
}

const Hero = ({ title, subtitle, image, showCta = true }: HeroProps) => {
  return (
    <div 
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
            {subtitle}
          </p>
          
          {showCta && (
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-secondary flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white/20 hover:text-white">
                Explore Our Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
