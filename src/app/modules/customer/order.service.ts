import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createOrder = async (data: any) => {
  const result = await prisma.order.create({
    data,
  });

  if (!result) {
    throw new ApiError(400, 'Failed to create Order');
  }

  return result;
};

const getAllOrder = async () => {
  const result = await prisma.order.findMany({});

  if (!result) {
    throw new ApiError(400, 'Failed to get Orders');
  }

  return result;
};

const getSingleOrder = async (id: string) => {
  const result = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to get order');
  }

  return result;
};

export const OrderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
};
