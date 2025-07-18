import {
  getAll,
  getById,
  create,
  remove
} from '../models/product.model.js';

export const getProductsService = () => getAll();
export const getProductByIdService = (id) => getById(id);
export const createProductService = (data) => create(data);
export const deleteProductService = (id) => remove(id);
