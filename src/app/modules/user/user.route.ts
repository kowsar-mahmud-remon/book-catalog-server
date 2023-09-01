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

export const UserRoutes = router;
