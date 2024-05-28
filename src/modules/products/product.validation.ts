import { z } from 'zod';

// Variant validation schema
const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Inventory validation schema
const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Product validation schema
const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
