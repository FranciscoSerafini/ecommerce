import { Router } from "express";
import AsyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

const route = Router();


route.get("/:category", AsyncHandler(async (req, res) => {
  const categories = await Product.find({ category: req.params.category });

  if (categories)
    res.status(200).json(categories);
  else {
    res.status(404);
    throw new Error("Category not found");
  }
})
);

export default route;
