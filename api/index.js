import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dbSeeder from './seed/dbSeeder.js';
import userRoutes from './routes/User.js';
import productRoutes from './routes/Product.js';
import categoryRoutes from './routes/Category.js';
import orderRoutes from './routes/Order.js';
import cors from "cors";


const app = express();
dotenv.config();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

app.use(express.json());
app.use(cors());

app.use('/api/seed', dbSeeder);
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);


app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));