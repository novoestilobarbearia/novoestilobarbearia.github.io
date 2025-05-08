import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={20} 
        className={index < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-600'} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-500/5" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-500/5" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Avaliações</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ouça o que nossos clientes têm a dizer sobre sua experiência na Barbearia Novo Estilo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center transition-all duration-700 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-amber-500">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl text-gray-300 text-center mb-6 italic">"{testimonial.text}"</p>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-amber-500 w-6' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;