module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    'salesProduct',
    {
      quantity: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

  SalesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SalesProduct;
};
