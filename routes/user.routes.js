var express = require('express');
var router = express.Router();
let supabase = require('../config/supabase')
const db = require('../db/products');
const products = require('../db/products');

router.get('/', (req, res) => {
    res.render('user/landing-page', { title: 'Home', products : products });
});
router.get('/product-details/', (req, res) => {
    product = products.find(product => product.id == req.query.id);    
    res.render('user/product-details', { title: 'Product Details', product: product });
});


module.exports = router;