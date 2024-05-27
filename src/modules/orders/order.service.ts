import { TOrder } from './order.interface';
import { Order } from './order.model';

// API function to add new order to the database
const createOrder = async (data: TOrder) => {
  const result = await Order.create(data);
  return result;
};

// API function to get all the orders from the database
const getAllOrders = async () => {
  const orders = await Order.find();
  return orders;
};

// API function to search orders by a email
const searchOrdersByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  searchOrdersByEmail
};
