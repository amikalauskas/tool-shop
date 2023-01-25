import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jonas Jonaitis',
    email: 'jonas@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Matas Mrimatas',
    email: 'matas@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
