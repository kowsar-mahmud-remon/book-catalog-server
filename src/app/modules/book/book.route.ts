import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/:id', BookController.getSingleBook);

// router.get('/:categoryId/category', BookController.getSingleBook);

router.get('/', BookController.getAllBooks);

router.post(
  '/',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  BookController.createBook
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  BookController.updateSingleBook
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.create),
  BookController.deleteBook
);

export const BookRoutes = router;
