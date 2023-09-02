"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.create({
        data,
        include: {
            orders: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(400, 'Failed to create user');
    }
    return result;
});
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield prisma_1.default.user.findFirst({
        where: {
            email: data.email,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(400, 'User does not exist');
    }
    if (data.password !== isUserExist.password) {
        throw new ApiError_1.default(400, 'Password incorrect');
    }
    const { role, id } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ role, userId: id }, process.env.JWT_EXPIRES, process.env.JWT_EXPIRES);
    return accessToken;
});
exports.AuthService = {
    createUser,
    loginUser,
};
