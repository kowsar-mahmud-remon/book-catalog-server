import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  UserController.getSingleUser
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  UserController.getAllUsers
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  UserController.updateSingleUser
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  UserController.deleteUser
);

export const UserRoutes = router;
