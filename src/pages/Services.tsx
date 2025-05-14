import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import { Lock, Briefcase, Shield, Users, Key, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <>
      <PageHeader
        title="Our Security Services"
        subtitle="Comprehensive security solutions for high-value assets, tailored to the unique needs of our discerning clients."
      />

      <section className="section-padding bg-white" id="vault-storage">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Lock className="h-10 w-10 text-gold-500 mr-4" />
                <h2 className="text-3xl font-bold text-navy-900">Secure Vault Storage</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art vault facilities provide the ultimate secure storage solution for your most valuable assets. Located in strategic locations across the UK and internationally, our facilities combine cutting-edge security technology with rigorous physical protection measures.
              </p>
              
              <h3 className="text-xl font-bold text-navy-800 mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">24/7 armed security personnel and advanced surveillance</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Biometric access control systems</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Various vault size options from small safe deposit boxes to large private vaults</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Climate-controlled environments for sensitive items</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Discreet access and private viewing rooms</span>
                </li>
              </ul>
              
              <a href="/contact" className="btn-primary inline-flex items-center">
                Inquire About Vault Storage
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1683984210404-d9fd70a40d02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VjdXJlJTIwVmF1bHQlMjBTdG9yYWdlfGVufDB8fDB8fHww" 
                  alt="Secure Vault Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://asargold.com/images/speasyimagegallery/albums/8/images/gold-w1.jpg" 
                  alt="Security Vault Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1689307172671-bdeebee149ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNlY3VyZSUyMFZhdWx0JTIwU3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Secure Storage Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50" id="bullion-transport">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1746363206246-e2d29337e255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXJtb3JlZCUyMFRydWNrfGVufDB8fDB8fHww" 
                  alt="Armored Transport Vehicle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://envestreetfinancial.com/wp-content/uploads/2023/06/E4Fh7WjXEAYGynt-768x469.jpg" 
                  alt="Secure Bullion Handling" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden col-span-2">
                <img 
                  src="https://i.etsystatic.com/18944887/r/il/be84d6/6194947096/il_570xN.6194947096_kmd9.jpg" 
                  alt="Bullion Transportation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Briefcase className="h-10 w-10 text-gold-500 mr-4" />
                <h2 className="text-3xl font-bold text-navy-900">Bullion Transportation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our specialized bullion transportation service ensures the safe and secure movement of precious metals and other high-value commodities. Each transport operation is meticulously planned and executed by our expert team, with comprehensive risk assessment and multiple layers of security.
              </p>
              
              <h3 className="text-xl font-bold text-navy-800 mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Armored vehicles with advanced security systems</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Highly trained armed security personnel</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Real-time tracking and monitoring systems</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Counter-surveillance measures and route planning</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Comprehensive insurance coverage</span>
                </li>
              </ul>
              
              <a href="/contact" className="btn-primary inline-flex items-center">
                Discuss Transportation Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" id="asset-protection">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-10 w-10 text-gold-500 mr-4" />
                <h2 className="text-3xl font-bold text-navy-900">Global Asset Protection</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our global asset protection service provides comprehensive security solutions for clients with assets across multiple international locations. We develop and implement security strategies that address the unique challenges of protecting high-value assets across borders.
              </p>
              
              <h3 className="text-xl font-bold text-navy-800 mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Global network of security professionals</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">24/7 international operations center</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Real-time asset monitoring and tracking</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Local regulatory compliance expertise</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Risk assessment and security planning</span>
                </li>
              </ul>
              
              <a href="/contact" className="btn-primary inline-flex items-center">
                Request Global Protection
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                  alt="Global Security Operations Center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                  alt="International Asset Monitoring" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-navy-100 h-64 rounded-lg overflow-hidden col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                  alt="Global Asset Protection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50" id="security-escort">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-navy-100 h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Private Security Escort" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Users className="h-10 w-10 text-gold-500 mr-4" />
                <h2 className="text-3xl font-bold text-navy-900">Private Security Escort</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our private security escort service provides discreet, professional protection for individuals, families, and executives. Our elite security teams are composed of former military and law enforcement professionals with extensive experience in close protection operations.
              </p>
              
              <h3 className="text-xl font-bold text-navy-800 mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Highly trained close protection officers</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Advance planning and route reconnaissance</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Secure transportation options</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Personal security risk assessment</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Residential security services</span>
                </li>
              </ul>
              
              <a href="/contact" className="btn-primary inline-flex items-center">
                Arrange Private Security
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" id="goods-logistics">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Key className="h-10 w-10 text-gold-500 mr-4" />
                <h2 className="text-3xl font-bold text-navy-900">High-Value Goods Logistics</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our high-value goods logistics service offers end-to-end secure transportation and handling of precious cargo. We manage the entire logistics process, from planning and documentation to secure transport and delivery, ensuring your high-value goods reach their destination safely.
              </p>
              
              <h3 className="text-xl font-bold text-navy-800 mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Comprehensive logistics planning</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Customs clearance and compliance management</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Secure warehousing and handling</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Global network of trusted logistics partners</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-navy-100 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-navy-800 font-semibold text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Real-time tracking and status updates</span>
                </li>
              </ul>
              
              <a href="/contact" className="btn-primary inline-flex items-center">
                Plan Secure Logistics
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="bg-navy-100 h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="High-Value Goods Logistics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default Services;
