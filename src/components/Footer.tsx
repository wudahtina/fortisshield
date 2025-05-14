
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, Map, Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-gold-500" />
              <div className="ml-2">
                <span className="text-white font-montserrat font-bold text-xl block leading-tight">
                  FORTIS SHIELD
                </span>
                <span className="text-gold-500 font-montserrat text-xs tracking-wider">
                  SECURITY SERVICES
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Providing exceptional security services for high-value assets, ensuring the safety 
              of your most valued possessions with unmatched expertise and discretion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy-700 hover:bg-navy-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-navy-700 hover:bg-navy-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check size={16} className="text-gold-500 mr-2" />
                <span className="text-gray-300">Secure Vault Storage</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-gold-500 mr-2" />
                <span className="text-gray-300">Bullion Transportation</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-gold-500 mr-2" />
                <span className="text-gray-300">Global Asset Protection</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-gold-500 mr-2" />
                <span className="text-gray-300">Private Security Escort</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-gold-500 mr-2" />
                <span className="text-gray-300">High-Value Goods Logistics</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Phone size={18} className="text-gold-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">+44 20 1234 5678</span>
              </li>
              <li className="flex">
                <Mail size={18} className="text-gold-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">info@fortisshield.co.uk</span>
              </li>
              <li className="flex">
                <Map size={18} className="text-gold-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">1 Churchill Place, Canary Wharf, London E14 5HP, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-navy-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fortis Shield Security Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
