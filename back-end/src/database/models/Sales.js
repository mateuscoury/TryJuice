module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "sale",
    {
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL(9, 2),
      delivery_address: DataTypes.STRING(100),
      delivery_number: DataTypes.STRING(50),
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING(50),
    },
    {
      timestamps: false,
    }
  );
  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "userId",
    });
    Sale.belongsTo(models.user, {
      foreignKey: "seller_id",
      as: "sellerId",
    });
  };

  return Sale;
};
