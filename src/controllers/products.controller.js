import {
  getProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  const products = await getProductsService();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await getProductByIdService(req.params.id);
  product
    ? res.json(product)
    : res.status(404).json({ message: 'Producto no encontrado' });
};

export const createProduct = async (req, res) => {
  const product = await createProductService(req.body);
  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  const result = await deleteProductService(req.params.id);
  res.json(result);
};
