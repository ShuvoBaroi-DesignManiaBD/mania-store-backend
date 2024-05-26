import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async (data: TProduct) => {
    console.log(data);
    
    const result = await Product.create(data);
    return result
}


export const ProductServices = {
    createProduct,
}