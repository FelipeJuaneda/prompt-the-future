import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";

// Inicializa el objeto cliente
const client = new MercadoPagoConfig({
  accessToken: MERCADOPAGO_API_KEY,
});

// Controlador para crear un pedido de pago
export const createOrder = async (req, res) => {
  const { course } = req.body;
  console.log("🚀 ~ createOrder ~ course:", course);
  // Inicializa el objeto API que deseas usar
  const preference = new Preference(client);
  try {
    const body = {
      items: [
        // Define los ítems que se pagarán
        {
          id: course.id, // Identificador del ítem
          title: course.title, // Título del curso
          description: course.overview, // Descripción del curso
          quantity: 1, // Cantidad, en este caso es 1 porque es un curso
          currency_id: "ARS", // Moneda en la que se realiza el cobro
          unit_price: course.price, // Precio unitario del curso
        },
      ],
      payer: {
        // Información del pagador
        name: "Test", // Nombre del pagador
        surname: "User", // Apellido del pagador
        email: "test_user@example.com", // Email del pagador
      },
      back_urls: {
        // URLs de redirección después del pago
        success: "http://localhost:4000/api/payment/success", // URL de éxito
        failure: "http://localhost:4000/api/payment/failure", // URL de fracaso
        pending: "http://localhost:4000/api/payment/pending", // URL de pendiente
      },
      auto_return: "approved", // Automáticamente redirige al éxito si el pago fue aprobado
      notification_url:
        "https://b4ea-201-231-72-208.ngrok-free.app/api/payment/webhook", // URL para recibir notificaciones de webhook
      external_reference: "Order1234ABC", // Referencia externa para identificar el pago
      statement_descriptor: "My Online Course Platform", // Descripción que aparecerá en el estado de cuenta del cliente
      additional_info:
        "Contiene 12 horas de contenido en video, quizzes y certificación.", // Información adicional sobre el pago
      binary_mode: true, // Modo binario para procesar el pago inmediatamente
    };
    const response = await preference.create({ body });
    console.log(response);
    // Envía una respuesta exitosa al cliente
    res.send(response);
    // res.status(200).json({
    //   message: "Orden creada correctamente",
    //   data: response.body,
    // });
  } catch (error) {
    console.error(error);
    // Envía una respuesta de error al cliente
    res.status(500).json({
      message: "Error al crear la orden de pago",
      error: error.message,
    });
  }
};

// Controlador para recibir el webhook
export const receiveWebHook = async (req, res) => {
  const payment = new Payment(client);

  console.log("req.query", req.query);
  const paymentQuery = req.query;

  try {
    if (paymentQuery.type === "payment") {
      //obtener la data del payment
      const data = await payment.get({ id: paymentQuery["data.id"] });
      console.log("Payment data", data);
      //guardar datos en base de datos junto con la info de compra del usuario
    }
    // Envía una respuesta exitosa al cliente
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};

export const onSuccess = (req, res) => {
  res.redirect("http://localhost:5173/success-page");
};
export const onFailure = (req, res) => {
  res.redirect("http://localhost:5173/failure-page");
};
export const onPending = (req, res) => {
  res.redirect("http://localhost:5173/pending-page");
};
