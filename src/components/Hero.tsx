import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 
            className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block">Cortes Precisos.</span>
            <span className="block mt-2">Experiência Premium.</span>
          </h1>
          
          <p 
            className={`text-xl text-gray-300 mb-10 max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
          Onde a barbearia tradicional encontra o estilo moderno. Experimente a excelência em cuidados pessoais em um ambiente sofisticado..
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a 
              href="#booking" 
              className="bg-amber-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-amber-600 transition-colors duration-300 text-center"
            >
              Marque Aqui
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors duration-300 text-center"
            >
              Explore Nossos Serviços
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;