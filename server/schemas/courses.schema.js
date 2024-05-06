import { z } from "zod";

export const courseSchema = z.object({
  title: z.string({
    required_error: "El título del curso es obligatorio",
  }),
  price: z
    .number({
      required_error: "El precio del curso es obligatorio",
    })
    .min(0.01, {
      message: "El precio del curso debe ser mayor que 0",
    }),
  img: z
    .string({
      required_error: "La URL de la imagen del curso es obligatoria",
    })
    .url({
      message: "La URL de la imagen del curso debe ser válida",
    }),
});
