var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
const checkAuth = require('../middleware/Autherization');

router.get('/', userController.getLandingpage);
router.get('/product-details/', userController.getProductDetails);


module.exports = router;