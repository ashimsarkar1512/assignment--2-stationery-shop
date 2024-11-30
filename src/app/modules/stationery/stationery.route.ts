import express from 'express';
import { ProductController } from './stationery.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);

router.get('/', ProductController.getAllProducts);
router.get('/:productId', ProductController.getSingleProducts);
export const ProductRoutes = router;
