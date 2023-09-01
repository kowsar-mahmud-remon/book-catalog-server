import { User } from '@prisma/client';
import ApiError from '../../../errors/ApiError';
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

export const UserService = {
  createUser,
};
