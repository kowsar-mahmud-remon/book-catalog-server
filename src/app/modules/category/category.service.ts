import { Category } from '@prisma/client';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });

  if (!result) {
    throw new ApiError(400, 'Failed to create category');
  }

  return result;
};

const getAllCategory = async () => {
  const result = await prisma.category.findMany({});

  if (!result) {
    throw new ApiError(400, 'Failed to get categorys');
  }

  return result;
};

const getSingleCategory = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to get category');
  }

  return result;
};

const updateSingleCategory = async (id: string, data: any) => {
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data,
  });

  if (!result) {
    throw new ApiError(400, 'Failed to update category');
  }

  return result;
};

const deleteCategory = async (id: string) => {
  const result = await prisma.category.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to delete category');
  }

  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateSingleCategory,
  deleteCategory,
};
