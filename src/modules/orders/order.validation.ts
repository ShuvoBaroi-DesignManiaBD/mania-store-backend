import { z } from "zod";


// Order validation schema
const orderValidationSchema = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number(),
  });

  export default orderValidationSchema;