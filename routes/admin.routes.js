var express = require('express');
var router = express.Router();
let supabase = require('../config/supabase');
const adminController = require('../controllers/admin.controller');
const roleVerifier = require('../middleware/roleVerifier');
const Autherization = require('../middleware/Autherization');


router.get('/dashboard',Autherization, roleVerifier, adminController.getDashboard);
router.get('/add-product',Autherization, roleVerifier, adminController.getAddProduct);
router.post('/add-product',Autherization, roleVerifier, adminController.postAddProduct);



module.exports = router;