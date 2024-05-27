import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './modules/products/product.route';
import { OrderRoutes } from './modules/orders/order.route';
const app:Application = express();

//parsers
app.use(express.json());

// Routes
app.use("/api/products", ProductRoutes); // Product route
app.use("/api/orders", OrderRoutes); // Order route

// Not Found Routes (404)
app.use((req, res, next) => {
  res.status(404).json({
      success: false,
      message: "Route not found"
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Server is responding');
});

export default app;
