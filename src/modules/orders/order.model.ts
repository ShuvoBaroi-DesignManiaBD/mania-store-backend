import { Schema, model } from 'mongoose';
import { TOrder, TOrderModel } from './order.interface';

// Order schema for Mongoose
const orderSchema = new Schema({
  email: {
      type: String,
      required: true
  },
  productId: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  quantity: {
      type: Number,
      required: true
  }
});


export const Order = model<TOrder, TOrderModel>('Order', orderSchema);
