import { Schema, model } from "mongoose";
import { IProduct, IProductModel } from "./product.interface";

const ProductSchema = new Schema<IProduct, IProductModel>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0,
    },
    features:{
        type: String,
        required:false,
    },
    characteristics:{
        type:String,
        required:false
    },
});

const Product = model<IProduct, IProductModel>("Product", ProductSchema);
export default Product;
