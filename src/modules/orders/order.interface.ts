import { Model } from 'mongoose';

// TypeScript type for the order data
export type TOrder = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}


export type TOrderModel = Model<TOrder, Record<string, number>>;
