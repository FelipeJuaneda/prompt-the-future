import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { BASE_URL, EMAIL_PASS, EMAIL_USER, TOKEN_SECRET } from "../config.js";
import nodemailer from "nodemailer";
import { resetPasswordSchema } from "../schemas/auth.schema.js";

export const register = async (req, res) => {
  const { email, password, name, surname } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["El correo ya está en uso"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: passwordHash,
      name,
      surname,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userSaved._id,
      name: userSaved.name,
      surname: userSaved.surname,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json(["Usuario no encontrado"]);
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json(["Contraseña incorrecta"]);

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      id: userFound._id,
      name: userFound.name,
      surname: userFound.surname,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });
  return res.json({
    id: userFound._id,
    name: userFound.name,
    surname: userFound.surname,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(decoded.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      name: userFound.name,
      surname: userFound.surname,
      email: userFound.email,
    });
  });
};

const sendEmail = async (email, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Prompt The Future" <noreply@prompt-the-future.com>',
    to: email,
    subject,
    html,
  });
};

export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const token = jwt.sign({ id: user._id }, TOKEN_SECRET, { expiresIn: "1h" });
    const resetLink = `${BASE_URL}/reset-password?token=${token}`;
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; text-align: center;">
        <h1 style="color: #333;">
          <span style="color: #8627CC;">Prompt</span> The Future
        </h1>
        <p style="color: #333;">
          Has solicitado restablecer tu contraseña. Haz clic en el botón de abajo para continuar con el proceso:
        </p>
        <a href="${resetLink}" style="display: inline-block; margin-top: 20px; padding: 10px 20px; color: #fff; background-color: #8627CC; text-decoration: none; border-radius: 5px;">Restablecer contraseña</a>
        <p style="color: #333; margin-top: 20px;">
          Si no has solicitado este cambio, puedes ignorar este correo.
        </p>
      </div>
    `;
    await sendEmail(email, "Restablecimiento de contraseña", htmlMessage);
    res
      .status(200)
      .json({ message: "Correo de restablecimiento de contraseña enviado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    resetPasswordSchema.parse({ password: newPassword });
    const decoded = jwt.verify(token, TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.status(200).json({ message: "Contraseña restablecida correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
