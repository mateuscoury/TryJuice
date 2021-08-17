const SERVICES = require('../services/users');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const results = await SERVICES.login(email, password);
    if (results.error)
      return res.status(results.error).json({ message: results.message });
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await SERVICES.register(name, email, password);
    if (result.error)
      return res.status(result.error).json({ message: result.message });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const adminRegister = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const result = await SERVICES.adminRegister(name, email, password, role);
    if (result.error)
      return res.status(result.error).json({ message: result.message });
    return res.status(201).json({ response: result});
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  const response = await SERVICES.getAllUsers();
  res.status(200).json({ response });
};

const getAllSellers = async (req, res) => {
  const response = await SERVICES.getAllSellers();
  res.status(200).json({ response });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const response = await SERVICES.getUserById(id);
  res.status(200).json({ response });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await SERVICES.deleteUser(id);
    return res.status(200).json({ deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
