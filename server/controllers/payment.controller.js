import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import { API_BASE_URL, BASE_URL, MERCADOPAGO_API_KEY } from "../config.js";

// Inicializa el objeto cliente
const client = new MercadoPagoConfig({
  accessToken: MERCADOPAGO_API_KEY,
});

// Controlador para crear un pedido de pago
export const createOrder = async (req, res) => {
  const { course, user } = req.body;
  console.log("🚀 ~ createOrder ~ course:", course);
  console.log("🚀 ~ createOrder ~ user:", user);
  // Inicializa el objeto API que deseas usar
  const preference = new Preference(client);
  try {
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
      external_reference: "Order1234ABC", // Referencia externa para identificar el pago
      notification_url:
        "https://b4ea-201-231-72-208.ngrok-free.app/api/payment/webhook",
      operation_type: "regular_payment",
      payment_methods: {
        default_payment_method_id: "master",
        excluded_payment_types: [
          {
            id: "ticket",
            id: "atm",
          },
        ],

        installments: 12,
        default_installments: 1,
      },
      additional_info: course.overview, // Información adicional sobre el pago
      statement_descriptor: `Pago Curso: ${course.title}`, // Descripción que aparecerá en el estado de cuenta del cliente,
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
  //transofrm a backsticks

  res.redirect(`${BASE_URL}/success-page`);
};
export const onFailure = (req, res) => {
  res.redirect(`${BASE_URL}/failure-page`);
};
export const onPending = (req, res) => {
  res.redirect(`${BASE_URL}/pending-page`);
};
