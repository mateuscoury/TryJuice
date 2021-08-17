module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'product',
    {
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING(200),
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  return Product;
};
