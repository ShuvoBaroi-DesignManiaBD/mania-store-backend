import { z } from 'zod';

// Variant validation schema
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Inventory validation schema
const inventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Product validation schema
const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});


export default productSchema;