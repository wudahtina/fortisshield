
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, Map } from "lucide-react";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Fortis Shield"
        subtitle="Get in touch with our security experts to discuss your specific requirements."
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="section-title mb-8">Schedule a Consultation</h2>
              <p className="text-gray-600 mb-8">
                Please complete the form below, and one of our security experts will contact you
                within 24 hours to discuss your requirements and how we can assist you.
                All inquiries are treated with the strictest confidentiality.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-navy-900 text-white p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <Phone className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">+447520609888</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">info@fortisshield.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Map className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Head Office</p>
                      <p className="text-gray-300">
                        ADDRESS 82 Wade Lane<br />
                        Salthouse, NR25 9SP<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-navy-900 mb-6">24/7 Emergency Response</h3>
                <p className="text-gray-600 mb-4">
                  For urgent security matters requiring immediate attention, please call our
                  24/7 emergency response line:
                </p>
                <p className="text-navy-900 text-2xl font-bold">+447520609888</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Global Presence</h2>
            <p className="text-gray-600">
              Fortis Shield maintains offices and secure facilities in major financial centers
              around the world, allowing us to provide seamless security services globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-navy-900 mb-2">United Kingdom</h3>
              <p className="text-gray-600 text-sm">London · Manchester · Edinburgh</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-navy-900 mb-2">Europe</h3>
              <p className="text-gray-600 text-sm">Zürich · Frankfurt · Paris · Geneva</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-navy-900 mb-2">North America</h3>
              <p className="text-gray-600 text-sm">New York · Toronto · Miami</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-navy-900 mb-2">Asia Pacific</h3>
              <p className="text-gray-600 text-sm">Singapore · Hong Kong · Dubai</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
