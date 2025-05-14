
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Fortis Shield has been instrumental in securing our high-value asset transportation. Their professionalism and attention to detail is unmatched in the industry.",
    author: "James Richardson",
    position: "Head of Security",
    company: "London Bullion Market",
  },
  {
    id: 2,
    quote: "We've entrusted Fortis Shield with our most sensitive security operations for over five years now. Their discreet and effective approach gives us complete peace of mind.",
    author: "Victoria Harrington",
    position: "Operations Director",
    company: "Harrington Fine Jewellery",
  },
  {
    id: 3,
    quote: "The vault storage facilities provided by Fortis Shield offer an unprecedented level of security for our clients' assets. Their service is exemplary.",
    author: "Alexander Montgomery",
    position: "CEO",
    company: "Montgomery Private Banking",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 mb-8 text-white">
            Client Testimonials
          </h2>
          <p className="text-gray-300">
            Don't just take our word for it. Hear what our prestigious clients have to say about our security services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "transition-opacity duration-500 bg-navy-800 rounded-lg p-8 md:p-10",
                  activeIndex === index ? "opacity-100" : "opacity-0 absolute inset-0"
                )}
              >
                <svg className="h-12 w-12 text-gold-500 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6a6 6 0 01-6 6H0v6h4a12 12 0 0012-12V8h-6zm18 0v6a6 6 0 01-6 6h-4v6h4a12 12 0 0012-12V8h-6z" />
                </svg>
                
                <p className="text-xl md:text-2xl font-light mb-8">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <p className="font-montserrat font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-gold-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeIndex === index ? "bg-gold-500" : "bg-navy-700 hover:bg-navy-600"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
