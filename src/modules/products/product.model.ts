import { Schema, model } from 'mongoose';
import { TProduct, TProductModel } from './product.interface';

// Varient Schema
const variantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Inventory Schema
const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Product Schema
const productSchema = new Schema<TProduct, TProductModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

const Product = model<TProduct, TProductModel>('Product', productSchema);
