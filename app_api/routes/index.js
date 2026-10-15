const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/products');
const ctrlPages = require('../controllers/pages');

// Products
router.route('/products').get(ctrlProducts.productsByType).post(ctrlProducts.productsCreate);
router.route('/products/:productid').get(ctrlProducts.productsReadOne).put(ctrlProducts.productsUpdateOne).delete(ctrlProducts.productsDeleteOne);

router.route("/users").post(ctrlUsers.userCreate);

module.exports = router;