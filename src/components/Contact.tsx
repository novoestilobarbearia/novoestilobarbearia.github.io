import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos contatos</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Tem dúvidas ou quer falar conosco diretamente? Entre em contato por qualquer um dos métodos abaixo..
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Entre em contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">Localização</h4>
                  <p className="text-gray-400">Av Belo Horizonte, 1343 - Nova Carapina I, Serra - ES, 29170-038</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">Telefone</h4>
                  <p className="text-gray-400">(27)99727-6019</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400"></p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">Horário de Atendimentos</h4>
                  <div className="text-gray-400 space-y-1">
                    <p>Segunda-Feira - Sexta: 9:00 AM - 19:00 PM</p>
                    <p>Sabado: 9:00 AM - 17:00 PM</p>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-zinc-800 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-zinc-800 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-zinc-800 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden relative flex items-center justify-center bg-zinc-800">
            <img 
              src="https://a-static.mlcdn.com.br/800x560/papel-de-parede-3d-barbearia-barber-shop-logo-35m-brb38-voce-decora/oliststore/mglpqicj0g6fzri7/481e73d366aff1fe953a0a112ce70d05.jpeg" 
              alt="Map location"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Visite nossa loja</h3>
              <p className="text-gray-300 max-w-md">
              nossa barbearia é facilmente acessível por transporte público e tem estacionamento conveniente nas proximidades.
              </p>
              <a 
                href="https://www.google.com/maps/@-20.156718,-40.2644296,3a,90y,352.34h,72.11t/data=!3m7!1e1!3m5!1s1X6kUC7B5O09nKU6_alEPA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D17.885995491912823%26panoid%3D1X6kUC7B5O09nKU6_alEPA%26yaw%3D352.3400703391199!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors duration-300"
              >
                <span className="font-medium">Obter direções</span>
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;