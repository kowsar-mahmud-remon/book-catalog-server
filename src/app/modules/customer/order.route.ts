import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.get('/:id', OrderController.getSingleOrder);

router.get('/', OrderController.getAllOrder);

router.post(
  '/create-order',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  OrderController.createOrder
);

export const OrderRoutes = router;
