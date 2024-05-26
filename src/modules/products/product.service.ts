import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async (data: TProduct) => {
    console.log(data);
    
    const result = await Product.create(data);
    return result
}

const getAllProducts = async () => {
    const result = await Product.find();
    return result
}


export const ProductServices = {
    createProduct,
    getAllProducts
}