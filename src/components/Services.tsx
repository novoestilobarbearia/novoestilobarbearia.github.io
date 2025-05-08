import React, { useState } from 'react';
import { Clock, Scissors } from 'lucide-react';
import { services } from '../data/services';
import { scaleOnHover } from '../utils/animations';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos serviços premium</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Experimente cortes precisos e serviços de beleza premium, adaptados ao seu estilo. Nossos barbeiros combinam técnicas tradicionais com tendências modernas..
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`${scaleOnHover()} group bg-zinc-800 rounded-lg overflow-hidden h-full`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <span className="text-2xl font-bold text-amber-500">${service.price}</span>
                </div>
                
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{service.duration} minutes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#booking" 
            className="inline-flex items-center bg-amber-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-amber-600 transition-colors duration-300"
          >
            <Scissors className="mr-2 h-5 w-5" />
            <span>Reserve seu serviço</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;