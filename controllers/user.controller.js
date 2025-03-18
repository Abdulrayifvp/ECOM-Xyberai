let supabase = require('../config/supabase')
const db = require('../db/products');
const products = require('../db/products');


module.exports = {
    getLandingpage: (req, res) => {
        res.render('user/landing-page', { title: 'Home', products: products, user : req.session.user});
    },

    getProductDetails: (req, res) => {
        product = products.find(product => product.id == req.query.id);
        res.render('user/product-details', { title: 'Product Details', product: product, user: req.session.user });
    }
}