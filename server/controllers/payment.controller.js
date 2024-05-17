import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import { API_BASE_URL, BASE_URL, MERCADOPAGO_API_KEY } from "../config.js";
import { User } from "../models/user.model.js";
// Inicializa el objeto cliente
const client = new MercadoPagoConfig({
  accessToken: MERCADOPAGO_API_KEY,
});

// Controlador para crear un pedido de pago
export const createOrder = async (req, res) => {
  const preference = new Preference(client);
  const { course, user } = req.body;
  const externalReference = `${user.id}:${course.id}`;
  try {
    // Primero verificar si el usuario ya posee el curso
    const existingUser = await User.findById(user.id);
    if (existingUser.courses.includes(course.id)) {
      // Si el usuario ya tiene el curso, devolver mensaje de error
      return res.status(400).json({ message: "Ya posees este curso." });
    }
    const body = {
      items: [
        {
          id: course.id, // Identificador del ítem
          title: course.title, // Título del curso
          description: course.overview, // Descripción del curso
          quantity: 1, // Cantidad, en este caso es 1 porque es un curso
          currency_id: "ARS", // Moneda en la que se realiza el cobro
          unit_price: course.price, // Precio unitario del curso
          category_id: "Educación",
        },
      ],
      payer: {
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
      back_urls: {
        success: `${API_BASE_URL}/payment/success`,
        failure: `${API_BASE_URL}/payment/failure`,
        pending: `${API_BASE_URL}/payment/pending`,
      },

      auto_return: "approved", // Automáticamente redirige al éxito si el pago fue aprobado
      binary_mode: true,
      external_reference: externalReference, // Referencia externa para identificar el pago
      notification_url:
        "https://b992-201-231-72-208.ngrok-free.app/api/payment/webhook",
      operation_type: "regular_payment",
      payment_methods: {
        default_payment_method_id: "master",
        excluded_payment_types: [{ id: "ticket" }, { id: "atm" }],
        installments: 12,
        default_installments: 1,
      },

      additional_info: course.overview, // Información adicional sobre el pago
      statement_descriptor: `Pago Curso: ${course.title}`, // Descripción que aparecerá en el estado de cuenta del cliente,
    };
    const response = await preference.create({ body });
    res.send(response);
  } catch (error) {
    console.error(error);
    // Envía una respuesta de error al cliente
    res.status(500).json({
      message: "Error al crear la orden de pago",
      error: error.message,
    });
  }
};

// Función para procesar el pago
const processPayment = async (paymentQuery) => {
  const payment = new Payment(client);
  const data = await payment.get({ id: paymentQuery["data.id"] });
  if (data.status !== "approved") {
    return;
  }
  const externalReference = data.external_reference;
  const [userId, courseId] = externalReference.split(":");

  const user = await User.findById(userId);
  if (user.courses.includes(courseId)) {
    return;
  }
  await User.findByIdAndUpdate(
    userId,
    { $addToSet: { courses: courseId } },
    { new: true }
  );
};

//funcion para escuchar eventos de webhook
export const receiveWebHook = async (req, res) => {
  try {
    if (req.query.type === "payment") {
      await processPayment(req.query);
    }
    res.sendStatus(204);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error processing webhook", details: error.message });
  }
};

export const onSuccess = async (req, res) => {
  const externalReference = req.query.external_reference;
  const [courseId] = externalReference.split(":");

  res.redirect(`${BASE_URL}/success-page?courseId=${courseId}`);
};

export const onFailure = (req, res) => {
  res.redirect(`${BASE_URL}/failure-page`);
};
export const onPending = (req, res) => {
  res.redirect(`${BASE_URL}/pending-page`);
};
