import React, { useState } from 'react';
import { CalendarIcon, CheckCircle, Clock } from 'lucide-react';
import { services } from '../data/services';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0]?.id || '',
    date: '',
    time: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 PM', '11:30 PM', '13:00 PM', '13:30 PM',
    '14:00 PM', '14:30 PM', '15:00 PM', '15:30 PM',
    '16:00 PM', '16:30 PM', '17:00 PM', '17:30 PM',
    '18:00 PM', '18,00 PM', '19:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Booking form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: services[0]?.id || '',
      date: '',
      time: '',
      notes: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="booking" className="py-24 bg-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Marque Já</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Agende sua próxima experiência de cuidados premium. Nossos barbeiros especialistas estão prontos para atendê-lo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
              <p className="text-gray-300">
                
Obrigado por reservar com a Barbearia Novo Estilo. Enviamos uma confirmação para o seu e-mail.
Estamos ansiosos para atendê-lo!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-zinc-900/80 backdrop-blur-sm rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Nome"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Seu Email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Número de Telefone"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2">Selecione o Corte</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - ${service.price}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-gray-300 mb-2">Selecione a Data</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-gray-300 mb-2">Selecione o Horário</label>
                  <div className="relative">
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    >
                      <option value="">Horários Dispóniveis</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="notes" className="block text-gray-300 mb-2">Adicione uma mensagem (Opcional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[100px]"
                  placeholder="Algum pedido ou observação especial......"
                />
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-black py-4 rounded-md font-semibold hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <span>Enviar</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;