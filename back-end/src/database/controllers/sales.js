const SalesServices = require('../services/sales');

const getAllSales = async (req, res) => {
  const { role } = req.query;
  const { id } = req.user;
  const response = await SalesServices.getAllSales(id, role);
  return res.status(200).json({ response });
};

const addNewSale = async (req, res) => {
  const { body, user } = req;
  const response = await SalesServices.addNewSale(body, user);
  if (response.error) {
    return res.status(201).json({ message: response.error });
  }
  return res.status(201).json({ response });
};

const getSaleById = async (req, res) => {
  const response = await SalesServices.getSaleById(req.params.id);
  return res.status(200).json({ response });
};

module.exports = {
  getAllSales,
  addNewSale,
  getSaleById,
};
