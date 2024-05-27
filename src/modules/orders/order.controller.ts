import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// API Controller for adding new orders to the database
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

// API Controller for getting all orders from the database
const getAllOrders = async (req: Request, res: Response) => {
  const email = req.query.email;

  if (email) {
    try {
      const result = await OrderServices.searchOrdersByEmail(
        email as string,
      );
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user email!`,
        data: result,
      });
    } catch (err: unknown) {
      res.status(500).json({
        success: false,
        message: `No orders found contaning your search term!`,
        error: err,
      });
    }
  } else {
    try {
      const result = await OrderServices.getAllOrders();

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!!',
        data: result,
      });
    } catch (err: unknown) {
      res.status(500).json({
        success: false,
        message: 'Could not fetch orders!',
        error: err,
      });
    }
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders
};
