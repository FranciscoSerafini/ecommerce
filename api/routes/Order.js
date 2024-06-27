import protect from '../middlewares/Auth.js'
import { Router } from "express";
import AsyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

const route = Router();

route.post("/", protect, AsyncHandler(async (req, res) => {
  const {
    orderItems,
    totalPrice,
    price
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("no order items found !");
  } else {
    const order = new Order({
      orderItems,
      totalPrice,
      price,
      user: req.user._id,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
})
);

export default route