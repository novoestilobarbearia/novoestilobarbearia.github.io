const express = require('express');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://novoestilobarbearia-github-io.vercel.app'
  ]
}));

app.use(express.json());

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.post('/api/send', async (req, res) => {
  const { name, email, phone, service, date, time, notes } = req.body;

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
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    await transporter.sendMail({
      from: `"Barbearia Novo Estilo" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Novo Agendamento',
      text: message,
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
