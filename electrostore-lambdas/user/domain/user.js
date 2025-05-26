const { v4: uuidv4 } = require("uuid");

class User {
  constructor({ name, email, password, phone }) {
    this.uuid = uuidv4();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.createdAt = new Date().toISOString();
    this.password = password; // plain text por ahora
  }

  toItem() {
    return {
      uuid: this.uuid,
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password,
      createdAt: this.createdAt,
    };
  }
}

module.exports = User;
