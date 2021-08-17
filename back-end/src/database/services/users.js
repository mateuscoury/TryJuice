const md5 = require('md5');
const { Op } = require('sequelize');
const { user } = require('../models');
const getToken = require('../middlewares/auth');

const hashTransformation = (password) => {
  return md5(password);
};

const login = async (email, password) => {
  const newPass = hashTransformation(password);
  const result = await user.findOne({ where: { email, password: newPass } });
  if (!result) return { error: 404, message: 'Usuário não encontrado' };
  const token = getToken(result.toJSON());
  return { token, name: result.name, email: result.email, role: result.role };
};

const register = async (name, email, password) => {
  const [validUser] = await user.findAll({
    where: {
      [Op.or]: [{ email }, { name }],
    },
  });
  if (validUser) return { error: 409, message: 'Usuário existente' };
  const newPass = hashTransformation(password);
  const result = await user.create({
    name,
    email,
    password: newPass,
    role: 'customer',
  });
  const token = getToken(result.toJSON());
  return { token, name: result.name, email: result.email, role: result.role };
};

const adminRegister = async (name, email, password, role) => {
  const [validUser] = await user.findAll({
    where: {
      [Op.or]: [{ email }, { name }],
    },
  });
  if (validUser) return { error: 409, message: 'Usuário existente' };
  const newPass = hashTransformation(password);
  const result = await user.create({
    name,
    email,
    password: newPass,
    role,
  });
  console.log(result.id)
  return {
    id: result.id,
    name: result.name,
    email: result.email,
    role: result.role,
  };
};

const getAllUsers = async () => {
  const response = await user.findAll({
    where: { role: ['seller', 'customer'] },
  });
  return response;
};

const getAllSellers = async () => {
  const response = await user.findAll({ where: { role: 'seller' } });
  return response;
};

const getUserById = async (id) => {
  const response = await user.findByPk(id);
  return response;
};

const deleteUser = async (id) => {
  const userId = await user.findOne({ where: { id } });
  if (!userId) throw new Error('Product does not exist');
  const response = await user.destroy({ where: { id } });
  return response;
};

module.exports = {
  login,
  register,
  adminRegister,
  getAllUsers,
  getAllSellers,
  getUserById,
  deleteUser,
};
