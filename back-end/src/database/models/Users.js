module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      name: DataTypes.STRING(100),
      email: DataTypes.STRING(100),
      password: DataTypes.STRING(32),
      role: DataTypes.STRING(20),
    },
    {
      timestamps: false,
    },
  );
  User.associate = (models) => {
    User.hasMany(models.sale, {
      foreignKey: 'user_id',
      as: 'user',
    });
    User.hasMany(models.sale, {
      foreignKey: 'seller_id',
      as: 'seller',
    });
  };

  return User;
};
