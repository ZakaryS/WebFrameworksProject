var express = require('express');
var router = express.Router();
const ctrlLocations = require('../controllers/pages');

/* GET home page. */
router.get('/', ctrlLocations.login);
router.get('/', ctrlLocations.register);
router.get('/', ctrlLocations.home);
router.get('/', ctrlLocations.product);

module.exports = router;
