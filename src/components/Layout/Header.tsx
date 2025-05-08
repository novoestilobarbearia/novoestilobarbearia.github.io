import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm py-3 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 z-50">
            <Scissors className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold text-white">Barbearia Novo Estilo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              Inicio
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              Serviços
            </a>
            <a 
              href="#gallery" 
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              Galeria
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              Depoimentos
            </a>
            <a 
              href="#booking" 
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              Marque aqui
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              Contatos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 md:hidden flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <a 
            href="#Inicio" 
            className="text-white text-2xl hover:text-amber-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#Serviços" 
            className="text-white text-2xl hover:text-amber-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#Galeria" 
            className="text-white text-2xl hover:text-amber-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Galeria
          </a>
          <a 
            href="#Depoimentos" 
            className="text-white text-2xl hover:text-amber-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#Marque aqui" 
            className="text-white text-2xl hover:text-amber-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Marque aqui
          </a>
          <a 
            href="#contact" 
            className="text-white text-2xl hover:text-amber-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contatos
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;