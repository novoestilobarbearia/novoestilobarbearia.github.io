import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 pt-16 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Barbearia Novo Estilo</span>
            </div>
            <p className="text-gray-400 mb-6">
            Barbearia de primeira linha que oferece serviços  excepcionais com atenção aos detalhes e experiência premium.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Marque Seu Corte
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Contatos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">(27)99727-6019</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400">Av Belo Horizonte, 1343 - Nova Carapina I, Serra - ES, 29170-038</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-amber-500 flex-shrink-0" />
                <p className="text-gray-400">(27)99727-6019</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-amber-500 flex-shrink-0" />
                <p className="text-gray-400"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-500">
          <p>&copy; {currentYear} Barbearia Novo Estilo. Todos os direitos resevados.</p>
          <p className="mt-2 text-sm">Projetado com precisão e trabalhado com excelência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;