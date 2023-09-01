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
    throw new ApiError(400, 'Failed to get users');
  }

  return result;
};

export const UserService = {
  getAllUsers,
  getSingleUser,
};
