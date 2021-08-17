import axios from 'axios';

const BASEURL = 'http://localhost:3001/';
const LOGIN = 'users/login';
const REGISTER = 'users/create';
const ADMIN = 'users/admin';
const SALES = 'sales';
const USERS = 'users';
const SELLERS = 'users/sellers';
const PRODUCTS = 'products';

const HEADERS_TOKEN = (token) => ({
  'Content-Type': 'application/json',
  Authorization: token,
});

export default {
  loginFetch: async (email, password) => {
    const loginObj = { email, password };
    const res = await axios.post(`${BASEURL}${LOGIN}`, loginObj);
    return res;
  },

  registerFetch: async (name, email, password) => {
    const registerObj = { name, email, password };
    const res = await axios.post(`${BASEURL}${REGISTER}`, registerObj);
    return res;
  },

  registerUser: async (registerObj, token) => {
    const headers = HEADERS_TOKEN(token);
    const res = await axios.post(`${BASEURL}${ADMIN}`, registerObj, {
      headers,
    });
    return res;
  },

  deleteUser: async (id, token) => {
    const headers = HEADERS_TOKEN(token);
    const res = await axios.delete(`${BASEURL}${ADMIN}/${id}`, { headers });
    return res;
  },

  getAllSales: async (token, role) => {
    const headers = HEADERS_TOKEN(token);
    return axios
      .get(`${BASEURL}${SALES}/?role=${role}`, { headers })
      .then((result) => result.data.response);
  },

  getAllUsers: async () => {
    const res = axios
      .get(`${BASEURL}${USERS}`)
      .then((result) => result.data.response);
    return res;
  },

  getAllSellers: async () => {
    const res = axios
      .get(`${BASEURL}${SELLERS}`)
      .then((result) => result.data.response);
    return res;
  },

  productsFetch: async () => {
    const res = await axios.get(`${BASEURL}${PRODUCTS}`);
    return res;
  },

  registerSale: async (sale, token) => {
    const headers = HEADERS_TOKEN(token);
    const res = await axios.post(`${BASEURL}${SALES}`, sale, { headers });
    return res;
  },

  getSaleById: async (id, token) => {
    const headers = HEADERS_TOKEN(token);
    const res = await axios.get(`${BASEURL}${SALES}/${id}`, { headers });
    return res;
  },

  getUserById: async (id, token) => {
    const headers = HEADERS_TOKEN(token);
    const res = await axios.get(`${BASEURL}${USERS}/${id}`, { headers });
    return res;
  },
};
