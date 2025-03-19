let supabase = require('../config/supabase')

module.exports = {
    getLandingpage: async (req, res) => {
        let { data: Products, error } = await supabase
            .from('Products')
            .select('*')
        res.render('user/landing-page', { title: 'Home', products: Products, user : req.session.user});
    },

    getProductDetails: async (req, res) => {
        let { data: Products, Pro_error } = await supabase
            .from('Products')
            .select('*').eq('id', req.query.id)

        let { data: Reviews, Rev_error } = await supabase
            .from('Reviews')
            .select("*").eq('pro_id', req.query.id)
        console.log(Reviews);
        
        res.render('user/product-details', { title: 'Product Details', product: Products[0], user: req.session.user, reviews : Reviews});
    },

    postReview: async (req, res) => {
        const { reviewText, rating, pro_id } = req.body;
        const { data, error } = await supabase
            .from('Reviews')
            .insert([
                { review: reviewText, rating: rating, user_id: req.session.user.id, pro_id }
            ])
            .select()
        if (error) {
            console.log(error);
            
            return res.status(400).send(error.message);
        }
        return res.status(200).redirect('/auth/login');

    }
    
}