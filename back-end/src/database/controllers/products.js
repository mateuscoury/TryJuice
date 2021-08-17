const productsServices = require('../services/products');
const { code } = require('../helpers/messages');

const createProduct = async (req, res) => {
  try {
    const { name, price, urlImage } = req.body;
    const product = await productsServices.createProduct(name, price, urlImage);
    return res.status(200).json({ response: product });
  } catch (error) {
    if (error.message === 'Required fields.') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productsServices.getAllProducts();
    return res.status(code.OK).json({ response: allProducts });
  } catch (error) {
    res.status(code.SERVER_ERROR).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const productById = await productsServices.getProductById(id);
    return res.status(code.OK).json(productById);
  } catch (error) {
    res.status(code.NOT_FOUND).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productsServices.deleteProduct(id);
    return res.status(code.NO_CONTENT).json({});
    } catch (error) {
    return res.status(code.SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
};
