import express from "express";
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.post("/", OrderControllers.createOrder); // API for adding new order


export const OrderRoutes = router;