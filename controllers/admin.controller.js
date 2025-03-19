const supabase = require("../config/supabase");
const products = require("../db/products");

supabase

module.exports = {
    getDashboard: async (req, res) => {

        let { data: Products, error } = await supabase
            .from('Products')
            .select('*')
        if (error) {
            return res.status(400).send(error.message);
        }
        res.render('admin/dashboard', { title: 'Admin Dashboard', user: req.session.user, products: Products });
    },
    getAddProduct: (req, res) => {
        res.render('admin/add-product', { title: 'Add Product', user: req.session.user });
    },
    postAddProduct: async (req, res) => {
        const { product_name, price, description, imageUrl } = req.body;
        const { data, error } = await supabase
            .from('Products')
            .insert([
                {
                    product_name: product_name,
                    price: price,
                    description: description,
                    imageUrl: imageUrl
                },
            ])
            .select()
        if (error) {
            return res.status(400).send(error.message);
        }
        return res.status(200).redirect('/admin/dashboard');
    }
}