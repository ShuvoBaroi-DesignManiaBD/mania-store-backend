import express from "express";
import { ProductControllers } from "./product.controller";
const router = express.Router();

router.post("/", ProductControllers.createProduct); // API for adding new products
router.get("/", ProductControllers.getAllProducts); // API for getting all products
router.get("/:productId", ProductControllers.getAProduct); // API for getting a product
router.put("/:productId", ProductControllers.updateAProduct); // API for updating a specific product
router.delete("/:productId", ProductControllers.deleteAProduct); // API for deleting a specific product

export const ProductRoutes = router;