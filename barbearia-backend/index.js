

const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send', async (req, res) => {
  const { name, email, phone, service, date, time, notes } = req.body;

  // Mensagem padrão
  const message = `
Novo agendamento:
👤 Nome: ${name}
📧 Email: ${email}
📞 Telefone: ${phone}
💇 Serviço: ${service}
📅 Data: ${date}
⏰ Horário: ${time}
📝 Observações: ${notes || 'Nenhuma'}
`;

  try {
    // Enviar e-mail
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Barbearia Novo Estilo" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Novo Agendamento',
      text: message,
    });

    // Enviar WhatsApp (Twilio)
    const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_FROM,
      to: process.env.TWILIO_TO,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar:', error);
    res.status(500).json({ error: 'Erro ao enviar mensagem' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(cors({
    origin: [
      'http://localhost:5173',
      'https://novoestilobarbearia-github-io.vercel.app'
    ]
  }));

