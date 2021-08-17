const Sequelize = require('sequelize');
const config = require('../config/config');
const { sale, salesProduct, product } = require('../models');

const sequelize = new Sequelize(config.development);

const getAllSales = async (id, userRole) => {
  const role = userRole === 'customer' ? 'user_id' : 'seller_id';
  const response = await sale.findAll({ where: { [role]: id } });
  return response;
};

const addNewSale = async (body, user) => {
  const t = await sequelize.transaction();

  const saleData = {
    seller_id: body.sellerId,
    total_price: body.totalPrice,
    delivery_address: body.deliveryAddress,
    delivery_number: body.deliveryNumber,
    status: body.status,
    user_id: user.id,
    sale_date: new Date(),
  };

  try {
    const response = await sale.create(saleData, { transaction: t });
    const salesProducts = body.products.map((product) => ({
      product_id: product.id,
      quantity: product.quantity,
      sale_id: response.toJSON().id,
    }));
    await salesProduct.bulkCreate(salesProducts, { transaction: t });
    await t.commit();
    return response;
  } catch (err) {
    await t.rollback();
    return { error: 'Internal error' };
  }
};

const getSaleById = async (id) => {
  const response = await sale.findOne({
    where: { id },
    include: [
      { model: product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  return response;
};

module.exports = {
  getAllSales,
  addNewSale,
  getSaleById,
};
