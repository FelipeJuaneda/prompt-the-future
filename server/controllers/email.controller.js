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
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
      <h1 style="color: #5a67d8;">¡Hola ${dataUser.name}!</h1>
        <h2 style="color: #5a67d8;">Evento: ${eventDetails.name}</h2>
        <p>Fecha: ${eventDetails.date}</p>
        <p>Lugar: ${eventDetails.location}</p>
        <p style="color: #ff0000;">¡Gracias por registrarte! Esperamos verte en el evento.</p>
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
