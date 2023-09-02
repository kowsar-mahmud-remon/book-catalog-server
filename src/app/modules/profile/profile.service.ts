import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const getProfile = async () => {
  const result = await prisma.user.findMany({});

  if (!result) {
    throw new ApiError(400, 'Failed to get Profile');
  }

  return result;
};

export const ProfileService = {
  getProfile,
};
