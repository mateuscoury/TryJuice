const express = require('express');
const rescue = require('express-rescue');
const productsControllers = require('../controllers/products');
//const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post('/', rescue(productsControllers.createProduct));
router.get('/', rescue(productsControllers.getAllProducts));
router.get('/:id', rescue(productsControllers.getProductById));
router.delete('/:id', rescue(productsControllers.deleteProduct));

module.exports = router;
