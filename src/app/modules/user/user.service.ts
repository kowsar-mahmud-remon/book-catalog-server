import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const getAllUsers = async () => {
  const result = await prisma.user.findMany({});

  if (!result) {
    throw new ApiError(400, 'Failed to get users');
  }

  return result;
};

const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to get user');
  }

  return result;
};

const updateSingleUser = async (id: string, data: any) => {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data,
  });

  if (!result) {
    throw new ApiError(400, 'Failed to update user');
  }

  return result;
};

export const UserService = {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
};
