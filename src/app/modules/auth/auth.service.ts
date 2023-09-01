import { User } from '@prisma/client';
import { Secret } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
    include: {
      orders: true,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to create user');
  }

  return result;
};

const loginUser = async (data: any) => {
  const isUserExist = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(400, 'User does not exist');
  }

  if (data.password !== isUserExist.password) {
    throw new ApiError(400, 'Password incorrect');
  }

  const { role, id } = isUserExist;

  const accessToken = jwtHelpers.createToken(
    { role, userId: id },
    process.env.JWT_EXPIRES as Secret,
    process.env.JWT_EXPIRES as string
  );

  return accessToken;
};

export const AuthService = {
  createUser,
  loginUser,
};
