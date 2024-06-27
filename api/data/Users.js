import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin",
    email: "admin@node.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },

  {
    name: "Cliente",
    email: "cliente@node.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
