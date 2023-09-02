import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/:id', CategoryController.getSingleCategory);

router.get('/', CategoryController.getAllCategory);

router.post(
  '/',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  CategoryController.createCategory
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  CategoryController.updateSingleCategory
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  CategoryController.deleteCategory
);

export const CategoryRoutes = router;
