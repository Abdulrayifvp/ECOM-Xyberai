module.exports = {
    getDashboard: (req, res) => {
        res.render('admin/dashboard', { title: 'Admin Dashboard', user: req.session.user });
    },
    getAddProduct: (req, res) => {
        res.render('admin/add-product', { title: 'Add Product', user: req.session.user });
    },
    postAddProduct: async (req, res) => {
        const { name, price, description, imageUrl } = req.body;
        const { data, error } = await supabase
            .from('Products')
            .insert([
                {
                    name: name,
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