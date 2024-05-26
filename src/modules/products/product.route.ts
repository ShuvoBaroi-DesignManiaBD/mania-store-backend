import express from "express";
import { ProductControllers } from "./product.controller";
const router = express.Router();

router.post("/", ProductControllers.createProduct); // API for adding new products
router.get("/", ProductControllers.getAllProducts); // API for getting all products

export const ProductRoutes = router;