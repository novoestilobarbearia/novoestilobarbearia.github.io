import React, { useState, useEffect } from 'react';
import { Scissors, Clock, MapPin, Phone, Instagram, Facebook, MessageCircle, Banknote, QrCode } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { supabase, type Service } from './lib/supabase';

function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: '',
    data: '',
    horario: ''
  });

  const horariosDisponiveis = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:30', '16:30', '17:00', '17:00', '17:30', '18:00', '18:30', '19:00',
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*');

      if (error) throw error;

      setServices(data);
      if (data.length > 0) {
        setFormData(prev => ({ ...prev, servico: data[0].id }));
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Erro ao carregar serviços');
    }
  };

  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Save appointment to Supabase
      const { error } = await supabase
        .from('appointments')
        .insert({
          client_name: formData.nome,
          phone: formData.telefone,
          service_id: formData.servico,
          appointment_date: formData.data,
          appointment_time: formData.horario,
          status: 'pending'
        });

      if (error) throw error;

      // Mensagem para a barbearia
      const mensagemBarbearia = encodeURIComponent(
        `🔔 *NOVO AGENDAMENTO*\n\n` +
        `👤 *Cliente:* ${formData.nome}\n` +
        `📱 *Telefone:* ${formData.telefone}\n` +
        `✂️ *Serviço:* ${services.find(s => s.id === formData.servico)?.name}\n` +
        `📅 *Data:* ${formatarData(formData.data)}\n` +
        `⏰ *Horário:* ${formData.horario}\n\n` +
        `Por favor, confirme o agendamento respondendo esta mensagem.`
      );

      // Mensagem de confirmação para o cliente
      const mensagemCliente = encodeURIComponent(
        `Olá ${formData.nome}! 👋\n\n` +
        `Recebemos seu agendamento na Barbearia Novo Estilo:\n\n` +
        `📅 *Data:* ${formatarData(formData.data)}\n` +
        `⏰ *Horário:* ${formData.horario}\n` +
        `✂️ *Serviço:* ${services.find(s => s.id === formData.servico)?.name}\n\n` +
        `Seu horário está *pré-reservado*.\n` +
        `Nossa equipe entrará em contato em breve para confirmar definitivamente seu agendamento.\n\n` +
        `ℹ️ *Observações importantes:*\n` +
        `• Chegue 5 minutos antes do horário marcado\n` +
        `• Em caso de imprevisto, avise com antecedência\n` +
        `• Aceitamos pagamentos em:\n` +
        `  💵 Dinheiro\n` +
        `  💳 Cartão\n` +
        `  📱 PIX\n\n` +
        `Agradecemos a preferência! 🙏\n` +
        `*Barbearia Novo Estilo*\n` +
        `_Excelência em cada corte_`
      );

      // Envia mensagem para a barbearia
      window.open(`https://wa.me/5527997276019?text=${mensagemBarbearia}`, '_blank');

      // Aguarda 1 segundo e envia mensagem para o cliente
      setTimeout(() => {
        window.open(`https://wa.me/5527997276019${formData.telefone}?text=${mensagemCliente}`, '_blank');
      }, 1000);

      toast.success('Agendamento realizado com sucesso!');

      // Limpa o formulário
      setFormData({
        nome: '',
        telefone: '',
        servico: services[0]?.id || '',
        data: '',
        horario: ''
      });
    } catch (error) {
      console.error('Error creating appointment:', error);
      toast.error('Erro ao criar agendamento');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <header className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <nav className="fixed z-10 w-full px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Nome da barbearia à esquerda */}
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Barbearia Novo Estilo</span>
            </div>

            {/* Espaço vazio no centro */}
            <div className="flex-1"></div>

            {/* Links de navegação à direita */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-amber-500 transition">Início</a>
              <a href="#servicos" className="hover:text-amber-500 transition">Serviços</a>
              <a href="#agendar" className="hover:text-amber-500 transition">Agendar</a>
              <a href="#contatos" className="hover:text-amber-500 transition">Contato</a>
            </div>
          </div>
        </nav>


        <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-88px)] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">Estilo Premium para o Homem Moderno</h1>
            <p className="text-xl mb-8 text-gray-300">Experimente a arte da barbearia novo estilo com dna de luxo moderno</p>
            <a
              href="#agendar"
              className="bg-amber-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-amber-600 transition"
            >
              Agende seu Horário
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Nossos Serviços Premium</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-zinc-800 p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-3xl font-bold text-amber-500 mb-4">R$ {service.price}</p>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{service.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="agendar" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Agende seu Horário</h2>
          <div className="max-w-md mx-auto bg-zinc-900 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="DDD + Número (apenas números)"
                  pattern="[0-9]{10,11}"
                  title="Digite seu DDD + número (apenas números)"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Serviço</label>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - R$ {service.price}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2">Escolha o Dia</label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Horário</label>
                <select
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Selecione um horário</option>
                  {horariosDisponiveis.map((horario, index) => (
                    <option key={index} value={horario}>{horario}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black py-3 rounded-md font-semibold hover:bg-amber-600 transition"
              >
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatos" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-amber-500" />
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-gray-400">Avenida Belo Horizonte Nova Carapina I, 1343<br />Serra, ES</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-amber-500" />
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-400">(27) 99727-6019</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-amber-500" />
              <h3 className="text-xl font-bold mb-2">Horário</h3>
              <p className="text-gray-400">Seg-Sáb: 9h - 20h<br /></p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-6">Formas de Pagamento</h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center">
                <Banknote className="h-8 w-8 text-amber-500 mb-2" />
                <span className="text-gray-400">Dinheiro</span>
              </div>
              <div className="flex flex-col items-center">
                <QrCode className="h-8 w-8 text-amber-500 mb-2" />
                <span className="text-gray-400">PIX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6 text-amber-500" />
              <span className="font-bold">Barbearia Novo Estilo</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2020 Barbearia Novo Estilo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5527997276019"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;