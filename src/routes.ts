import app from "./app";
import { ProductRoutes } from "./modules/products/product.route";

app.use("/api/products", ProductRoutes);