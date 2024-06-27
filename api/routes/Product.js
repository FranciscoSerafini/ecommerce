import { Router } from "express";
import AsyncHandler from 'express-async-handler';
import Product from '../models/Product.js'

const route = Router();

route.get("/", AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
})
);

route.get("/:id", AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
})
);

export default route;
