import nodemailer from "nodemailer";
import { EMAIL_PASS, EMAIL_USER } from "../config.js";

export const sendEmail = async (req, res) => {
  const { dataUser, eventDetails } = req.body;

  if (!dataUser.email || !eventDetails) {
    return res
      .status(400)
      .json({ message: "Email and event details are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const htmlContent = `
    <div style="background-color: #2C2C2C; color: #FFFFFF; font-family: Arial, sans-serif; font-size: 14px; padding: 20px; line-height: 1.6;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://i.ibb.co/gTy9Yn8/LOGO-PROMPT-OFICIAL.png" alt="Logo Prompt The Future" style="max-width: 150px;">
      </div>
      <h1 style="color: #FFFFFF; margin-bottom: 20px;">¡Hola ${dataUser.name}!</h1>
      <p style="margin-bottom: 20px;">¡Ahora estás registrado para el Hackathon de <span style="color: #8627CC;">Prompt</span> The Future!</p>
      <p style="margin-bottom: 20px;">Reserva tu tiempo desde el viernes 7 de junio hasta el domingo 9 de junio. No olvides agregarlo a tu Google Calendar!📅</p>
      <p style="margin-bottom: 20px;"><strong>📢 ¡Grita y gana a lo grande!📢</strong></p>
      <p style="margin-bottom: 20px;">🎉 Comparte el Hackathon de IA de <span style="color: #8627CC;">Prompt</span> The Future en tus plataformas de redes sociales, ¡y podrías ganar increíbles premios! 🎁</p>
      <p style="margin-bottom: 20px;">Solo etiquétanos con @PromptTheFuture y #PromptTheFuture, y nuestro equipo mostrará amor a tu publicación. ❤</p>
      <p style="text-align: center; margin-bottom: 20px;">
        <a href="https://twitter.com/PromptTheFuture" style="margin: 0 10px; color: #FFFFFF;">Twitter</a> •
        <a href="https://linkedin.com/company/PromptTheFuture" style="margin: 0 10px; color: #FFFFFF;">LinkedIn</a> •
        <a href="https://facebook.com/PromptTheFuture" style="margin: 0 10px; color: #FFFFFF;">Facebook</a>
      </p>
      <p style="margin-bottom: 20px;"><strong>Recuerda:</strong></p>
      <ul style="margin-bottom: 20px; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Unirte a nuestro Discord y #Presentarte.</li>
        <li style="margin-bottom: 10px;">¡Visita el canal de búsqueda de equipos si quieres formar un equipo, aunque también podés traer tu equipo ya armado o participar solo!</li>
      </ul>
      <p style="margin-bottom: 20px;">Para obtener más información, consulta las <a href="URL_FAQ" style="color: #8627CC;">Preguntas Frecuentes</a> y la <a href="URL_QUICK_START_GUIDE" style="color: #8627CC;">guía de Inicio Rápido</a>.✨</p>
      <p style="margin-bottom: 20px;">Para preguntas adicionales o soporte, etiqueta al equipo de @PromptTheFuture en Discord.</p>
      <p style="text-align: center; margin-bottom: 20px;"><strong>¡Nos vemos en el hackathon!</strong></p>
      <p style="text-align: center; color: #8627CC;"><strong>Keep prompting the future!</strong></p>
    </div>
  `;
    const mailOptions = {
      from: '"Prompt The Future" <admin@prompt-the-future.com>',
      to: dataUser.email,
      subject: "Información del Evento",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
};
