const { product } = require('../models');

const createProduct = async (name, price, urlImage) => {
  if(!name || !price || !urlImage) throw new Error('Required fields.');
  const newProduct = await product.create(name, price, urlImage);
  return newProduct;
}

const getAllProducts = async () => {
  const allProducts = await product.findAll();
  return allProducts;
};

const getProductById = async (id) => {
  const getProduct = await product.findOne({ where: { id } });
  if (!getProduct) throw new Error('Product does not exist');
  const ProductById = await product.findByPk(id);
  return ProductById;
};

const deleteProduct = async (id) => {
  const product = await product.findOne({ where: { id } });
  if (!product) throw new Error('Product does not exist');
  await products.destroy({ where: { id } });
  return {};
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
};
