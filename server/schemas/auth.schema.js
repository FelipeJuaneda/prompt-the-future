import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es obligatorio",
    })
    .min(1, {
      message: "El nombre no puede estar vacío",
    }),
  surname: z
    .string({
      required_error: "El apellido es obligatorio",
    })
    .min(1, {
      message: "El apellido no puede estar vacío",
    }),
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",
    })
    .email({
      message: "Correo electrónico inválido",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",
    })
    .email({
      message: "Correo electrónico inválido",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});
