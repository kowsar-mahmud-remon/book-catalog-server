import { Book } from '@prisma/client';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to create book');
  }

  return result;
};

const getAllBooks = async () => {
  const result = await prisma.book.findMany({});

  const total = await prisma.book.count();

  if (!result) {
    throw new ApiError(400, 'Failed to get books');
  }

  return {
    meta: {
      total,
      page: 1,
      limit: 10,
    },
    data: result,
  };
};

const getSingleBook = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to get book');
  }

  return result;
};

const getBookByCategoryId = async (categoryId: string) => {
  const result = await prisma.book.findMany({
    where: {
      categoryId,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to get books');
  }

  return result;
};

const updateSingleBook = async (id: string, data: any) => {
  const result = await prisma.book.update({
    where: {
      id: id,
    },
    data,
  });

  if (!result) {
    throw new ApiError(400, 'Failed to update book');
  }

  return result;
};

const deleteBook = async (id: string) => {
  const result = await prisma.book.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(400, 'Failed to delete book');
  }

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getBookByCategoryId,
  getSingleBook,
  updateSingleBook,
  deleteBook,
};
