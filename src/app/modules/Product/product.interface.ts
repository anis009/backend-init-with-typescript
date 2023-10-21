import { Model } from "mongoose";


export type IProduct = {
	name: string;
	description: string;
    features: string;
    characteristics:string;
    price:number;
    discount:number;
};

export type IProductModel = Model<IProduct, Record<string, unknown>>;
