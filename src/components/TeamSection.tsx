
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'William Harrison',
    position: 'Chief Executive Officer',
    bio: 'Former Royal Marines Commander with over 20 years of experience in high-risk security operations and strategic leadership.',
    image: '',
  },
  {
    name: 'Elizabeth Montgomery',
    position: 'Chief Operations Officer',
    bio: 'Ex-MI5 intelligence officer specializing in threat assessment, risk management, and security protocol development.',
    image: '',
  },
  {
    name: 'James Blackwood',
    position: 'Head of Security',
    bio: 'Former Metropolitan Police Specialist Protection officer with expertise in close protection and high-value asset security.',
    image: '',
  },
  {
    name: 'Sarah Richardson',
    position: 'Global Logistics Director',
    bio: 'Logistics expert with extensive experience coordinating secure transportation of valuable assets across international borders.',
    image: '',
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            Our Leadership Team
          </h2>
          <p className="text-gray-600">
            Led by veterans of military and law enforcement, our leadership team brings decades of
            experience in security operations and asset protection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden card-shadow">
              <div className="bg-navy-200 h-64"></div>
              <div className="p-6">
                <h3 className="font-bold text-navy-900 text-xl mb-1">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-navy-800 hover:text-gold-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-navy-800 text-white p-8 rounded-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Elite Security Team</h3>
            <p className="mb-6">
              We're always looking for exceptional individuals with backgrounds in military,
              law enforcement, or security services to join our team.
            </p>
            <a href="/careers" className="btn-secondary">
              View Current Openings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
