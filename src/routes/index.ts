import express from 'express';
import productRouter from '../app/modules/Product/product.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRouter,
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
