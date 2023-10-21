import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductServices } from "./product.service";
import sendResponse from "../../../shared/sendResponse";
import { IProduct } from "./product.interface";
import httpStatus from "http-status";



export const createProduct = catchAsync(async (req: Request, res: Response) => {
	const result = await ProductServices.createProduct(req.body);
	sendResponse<IProduct>(res,{
        message: "Product created successfully",
        statusCode: httpStatus.OK,
        success: true,
        data: result
    });
});



export const getProductById = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await ProductServices.getProductById(productId);

  if (!product) {
    return sendResponse(res, {
      message: "Product not found",
      statusCode: httpStatus.NOT_FOUND,
      success: false,
    });
  }

  sendResponse<IProduct>(res, {
    message: "Product retrieved successfully",
    statusCode: httpStatus.OK,
    success: true,
    data: product,
  });
});

export const getProducts = catchAsync(async (req: Request, res: Response) => {
    const products = await ProductServices.getProducts();
    sendResponse<IProduct[]>(res, {
      message: "Products retrieved successfully",
      statusCode: httpStatus.OK,
      success: true,
      data: products,
    });
});

export const updateProduct = catchAsync(async (req: Request, res: Response) => {
    const { productId } = req.params;
    const updatedProduct = req.body;
    const product = await ProductServices.updateProduct(productId, updatedProduct);
  
    if (!product) {
      return sendResponse(res, {
        message: "Product not found",
        statusCode: httpStatus.NOT_FOUND,
        success: false,
      });
    }
  
    sendResponse<IProduct>(res, {
      message: "Product updated successfully",
      statusCode: httpStatus.OK,
      success: true,
      data: product,
    });
});
export const deleteProduct = catchAsync(async (req: Request, res: Response) => {
    const { productId } = req.params;
    await ProductServices.deleteProduct(productId);
  
    sendResponse(res, {
      message: "Product deleted successfully",
      statusCode: httpStatus.OK,
      success: true,
    });
});
  


export const ProductControllers = {
    createProduct,
    updateProduct,
    getProducts,
    getProductById,
    deleteProduct
}