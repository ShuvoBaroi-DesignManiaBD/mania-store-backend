import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { ProductServices } from '../products/product.service';
import { TProduct } from '../products/product.interface';
import orderValidationSchema from './order.validation';

// API Controller for adding new orders to the database
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData = orderValidationSchema.parse(orderData); //Validating the given data by ZOD
    const pullProduct = (await ProductServices.getAProduct(zodParsedData.productId)) as TProduct;
    if (pullProduct?.inventory?.quantity < zodParsedData?.quantity){
      return res.status(409).json({
        success: false,
        message: 'Insufficient quantity available in inventory'
      });
    }; 
    const result = await OrderServices.createOrder(zodParsedData);
    ProductServices.updateProductInventory(zodParsedData, pullProduct.inventory);
    
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
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
      const result = await OrderServices.searchOrdersByEmail(email as string);

      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Orders fetched successfully for user email!`,
          data: result,
        });
      }
    } catch (err: unknown) {
      res.status(500).json({
        success: false,
        message: `Something went wrong!`,
        error: err,
      });
    }
  } else {
    try {
      const result = await OrderServices.getAllOrders();

      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Orders fetched successfully!!',
          data: result,
        });
      }
    } catch (err: unknown) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err,
      });
    }
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
