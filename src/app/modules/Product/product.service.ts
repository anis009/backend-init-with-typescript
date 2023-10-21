import { IProduct } from "./product.interface";
import Product from "./product.model";


export const createProduct = async (product: IProduct):Promise<IProduct> => {
	const saveProduct = await Product.create(product);
	return saveProduct;
};
export const getProductById = async (productId: string): Promise<IProduct | null> => {
	const product = await Product.findById(productId);
	return product;
  };
export const getProducts = async (): Promise<IProduct[]> => {
	const products = await Product.find();
	return products;
  };

export const updateProduct = async (
	productId: string,
	updatedProduct: Partial<IProduct>
  ): Promise<IProduct | null> => {
	const product = await Product.findByIdAndUpdate(productId, updatedProduct, {
	  new: true,
	});
	return product;
  };

export const deleteProduct = async (productId: string): Promise<void> => {
	await Product.findByIdAndDelete(productId);
  };


export const ProductServices = {
    createProduct,
	getProducts,
	updateProduct,
	deleteProduct,
	getProductById
}