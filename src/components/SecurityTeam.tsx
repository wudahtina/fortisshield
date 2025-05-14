
import { Shield } from 'lucide-react';

const SecurityTeam = () => {
  const securityTeam = [
    {
      name: "James Wilson",
      role: "Head of Security Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Sarah Mitchell",
      role: "Asset Protection Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Michael Reynolds",
      role: "Security Transport Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Elena Rodriguez",
      role: "Executive Protection Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-gold-500 mr-2" />
            <h2 className="section-title">
              Our Elite Security Team
            </h2>
          </div>
          <p className="text-gray-600">
            Our team consists of highly trained security professionals with backgrounds in military, 
            law enforcement, and private security operations. Each member is dedicated to providing 
            the highest level of protection for our clients and their assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityTeam.map((member, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-navy-800 py-4 px-5">
                <div className="flex items-center mb-1">
                  <Shield className="h-4 w-4 text-gold-500 mr-2" />
                  <h3 className="text-white font-bold">{member.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Ready to Join Our Elite Team?</h3>
            <p className="text-gray-600">Fortis Shield is always looking for exceptional security professionals to join our team.</p>
          </div>
          <a href="/contact" className="btn-primary whitespace-nowrap">Join Our Team</a>
        </div>
      </div>
    </section>
  );
};

export default SecurityTeam;
