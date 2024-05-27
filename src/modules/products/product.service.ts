import { TOrder } from '../orders/order.interface';
import { TInventory, TProduct } from './product.interface';
import { Product } from './product.model';

// API function to add new product to the database
const createProduct = async (data: TProduct) => {
  const result = await Product.create(data);
  return result;
};

// API function to get all the products from the database
const getAllProducts = async () => {
    const result = await Product.find();
    return result;
};

// API function to search products by a term
const searchProductsByTerms = async (term: string) => {
    const result = await Product.find({ $text: { $search: term } });
    return result;
};

// API function to get all the products from the database
const getAProduct = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

// API function to update a product
const updateAProduct = async (id: string, data: TProduct) => {
  const result = await Product.replaceOne({ _id: id }, data);

  return result;
};

// API function to delete a product
const deleteAProduct = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

// API function to update a product
const updateProductInventory = async (order: TOrder, inventoryData: TInventory) => {
  const newProductQuantity = inventoryData.quantity - order.quantity;
  const updatedInventory = {quantity: newProductQuantity, inStock: (newProductQuantity === 0) ? false : true};
  const result = await Product.findOneAndUpdate({ _id: order.productId }, {inventory:updatedInventory});
  return result;
};


export const ProductServices = {
  createProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
  searchProductsByTerms,
  updateProductInventory
};
