import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  AuthController.createUser
);

router.post(
  '/signin',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  AuthController.loginUser
);

export const AuthRoutes = router;
