import express from 'express';
import { UserController } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  UserController.createUser
);

router.post(
  '/signin',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  UserController.loginUser
);

export const UserRoutes = router;
