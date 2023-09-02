import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.get('/:id', OrderController.getSingleOrder);

router.get('/', OrderController.getAllOrder);

router.post('/create-order', OrderController.createOrder);

export const OrderRoutes = router;
