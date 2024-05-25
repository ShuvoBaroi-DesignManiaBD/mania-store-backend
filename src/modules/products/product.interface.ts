import { Model } from "mongoose";

// Variant type
export type Variant = {
  type: string;
  value: string;
}

// Inventory type
export type Inventory = {
  quantity: number;
  inStock: boolean;
}

// Product type
export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
}

export type ProductModel = Model<Product, Record<string, unknown>>;



