const registerUser = require("../application/registerUser");
const userRepository = require("../infrastructure/dynamoUserRepo");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, password, phone } = body;

    // Validaciones
    if (!name || !email || !password || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Todos los campos son obligatorios" })
      };
    }

    const result = await registerUser({
      userData: { name, email, password, phone },
      userRepository
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Usuario registrado exitosamente",
        data: result
      })
    };

  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error interno del servidor",
        error: error.message
      })
    };
  }
};
