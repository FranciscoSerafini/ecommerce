import mongoose from "mongoose";


const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, default: 0 },
  category: { type: String, required: true, enum: ["Zapatillas", "Gorra", "Mochila"] },
})


const Product = mongoose.model('Product', productSchema);
export default Product;