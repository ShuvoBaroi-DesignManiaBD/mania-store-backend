import { Schema, model } from 'mongoose';
import { TProduct, TProductModel } from './product.interface';

// Varient Schema
const variantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
}, { _id: false });

// Inventory Schema
const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
}, { _id: false });

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

// Search index for searching to all the strings by query term
productSchema.index({'$**': 'text'});
export const Product = model<TProduct, TProductModel>('Product', productSchema);
