import { z } from 'zod';

const createProduct = z.object({
  body: z.object({
    name: z.string({
        required_error: "Name is required"
    }),
    description: z.string({
        required_error: "Description is required"
    }),
    price: z.number({
        required_error:"Price is required"
    }),
    discount: z.number().optional(),
    features: z.string().optional(),
    characteristic: z.string().optional()
  }),
});

export const ProductValidation = {
    createProduct,
};
