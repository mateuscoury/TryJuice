const express = require('express');
const { getAllSales, addNewSale, getSaleById } = require('../controllers/sales');
const validateJWT = require('../middlewares/validateJWT');
const Sales = express.Router();

Sales.get('/', validateJWT, getAllSales);
Sales.get('/:id', validateJWT, getSaleById);
Sales.post('/', validateJWT, addNewSale);

module.exports = Sales;