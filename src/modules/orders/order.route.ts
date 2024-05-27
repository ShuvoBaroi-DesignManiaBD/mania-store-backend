import express from "express";
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.post("/", OrderControllers.createOrder); // API for adding new order
router.get("/", OrderControllers.getAllOrders); // API for getting all orders


export const OrderRoutes = router;