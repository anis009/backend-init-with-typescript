import express, { Application } from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductControllers } from "./product.controller";

const productRouter = express.Router();

productRouter.route("/").post(validateRequest(ProductValidation.createProduct),ProductControllers.createProduct).get(ProductControllers.getProducts);

productRouter.route("/:productId").get(ProductControllers.getProductById).patch(ProductControllers.updateProduct)
export default productRouter; 