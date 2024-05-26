import { TOrder} from './order.interface';
import { Order} from './order.model';

// API function to add new order to the database
const createOrder = async (data: TOrder) => {
  const result = await Order.create(data);
  return result;
};


export const OrderServices = {
  createOrder
};
