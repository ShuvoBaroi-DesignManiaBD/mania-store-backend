import { Request, Response } from 'express';
import { ProductServices } from './product.service';

// API Controller for adding new products to the database
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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


// API Controller for getting all products from the database
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    console.log(result);
    

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch products!',
      error: err,
    });
  }
};

// API Controller for getting all products from the database
const getAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    console.log(productId);
    
    const result = await ProductServices.getAProduct(productId);
    console.log(result);
    

    res.status(200).json({
      success: true,
      message: "The product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch the product!',
      error: err,
    });
  }
};

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getAProduct
  };