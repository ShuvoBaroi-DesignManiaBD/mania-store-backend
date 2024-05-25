import { Model } from 'mongoose';

// Variant type
export type TVariant = {
  type: string;
  value: string;
};

// Inventory type
export type TInventory = {
  quantity: number;
  inStock: boolean;
};

// Product type
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
};

export type TProductModel = Model<TProduct, Record<string, unknown>>;
