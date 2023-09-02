"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.get('/:id', book_controller_1.BookController.getSingleBook);
router.get('/:categoryId/category', book_controller_1.BookController.getBookByCategoryId);
router.get('/', book_controller_1.BookController.getAllBooks);
router.post('/create-book', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
book_controller_1.BookController.createBook);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
book_controller_1.BookController.updateSingleBook);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
book_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
