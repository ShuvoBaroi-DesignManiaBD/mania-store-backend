import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// API function to add new product to the database
const createProduct = async (data: TProduct) => {
    console.log(data);
    
    const result = await Product.create(data);
    return result
}

// API function to get all the products from the database
const getAllProducts = async () => {
    const result = await Product.find();
    return result
}

// API function to get all the products from the database
const getAProduct = async (id: string) => {
    const result = await Product.findOne({_id: id});
    return result
}


export const ProductServices = {
    createProduct,
    getAllProducts,
    getAProduct
}