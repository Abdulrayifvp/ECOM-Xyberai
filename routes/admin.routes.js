var express = require('express');
var router = express.Router();
let supabase = require('../config/supabase');
const adminController = require('../controllers/admin.controller');
const roleVerifier = require('../middleware/roleVerifier');
const checkAuth = require('../middleware/Autherization');


router.get('/dashboard',checkAuth,roleVerifier, adminController.getDashboard);
router.get('/add-product', checkAuth, roleVerifier, adminController.getAddProduct);
router.post('/add-product', checkAuth, roleVerifier, adminController.postAddProduct);



module.exports = router;