var express = require('express');
var router = express.Router();
const ctrlPages = require('../controllers/pages');

/* GET home page. */
router.get('/login', ctrlPages.login);
router.get('/register', ctrlPages.register);
router.get('/', ctrlPages.home);
//router.get('/', ctrlPages.product);

module.exports = router;
