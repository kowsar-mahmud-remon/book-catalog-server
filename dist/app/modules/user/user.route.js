"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.getSingleUser);
router.get('/', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.getAllUsers);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.updateSingleUser);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
