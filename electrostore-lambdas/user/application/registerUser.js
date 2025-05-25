const User = require("../domain/user");

const registerUser = async ({ userData, userRepository }) => {
  const user = new User(userData);
  await user.hashPassword(); // Encripta la contraseña
  await userRepository.save(user);
  return {
    id: user.uuid,
    name: user.name,
    email: user.email,
    phone: user.phone,
    createdAt: user.createdAt,
  };
};

module.exports = registerUser;
