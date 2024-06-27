import mongoose from "mongoose";


const orderItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  orderItems: [orderItemSchema],
  totalPrice: { type: Number, requred: true, default: 0.0 },
  isDelivered: { type: Boolean, required: true, default: false }
}, { timestamps: true });


const Order = mongoose.model('Order', orderSchema);

export default Order;