import express from 'express';
import { ProfileController } from './profile.controller';

const router = express.Router();

router.get(
  '/',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  ProfileController.getProfile
);

export const ProfileRoutes = router;
