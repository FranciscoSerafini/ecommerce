import { Router } from 'express';
import users from '../data/Users.js';
import products from '../data/Products.js';

import User from '../models/User.js';
import Product from '../models/Product.js';


const route = Router();

route.post('/users', async (req, res) => {
  await User.deleteMany({});
  const UserSeeder = await User.insertMany(users);
  res.send({ UserSeeder });
});

route.post('/products', async (req, res) => {
  await Product.deleteMany({});
  const ProductSeeder = await Product.insertMany(products);
  res.send(ProductSeeder);
})

export default route;
