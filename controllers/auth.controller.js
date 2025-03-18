const bcrypt = require('bcrypt');
const saltRounds = 10;
const supabase = require('../config/supabase');

module.exports = {
    getLogin: (req, res) => {
        res.render('auth/login');
    },
    register: (req, res) => {
        res.render('auth/signup');
    },
    postRegister: async (req, res) => {
        const { email, password, firstname, lastname } = req.body;
        

        let { data: existedUser, existedUserError } = await supabase
            .from('User')
            .select('*')
            .eq('email', email)

        if (existedUser.length > 0) {
            return res.status(400).send('User already exists');
        }

        const { data, error } = await supabase
            .from('User')
            .insert([
                {   
                    email :email,
                    password:await bcrypt.hash(password, saltRounds),
                    first_name: firstname,
                    last_name: lastname,
                    role: 'user'
                 },
            ])
            .select()

        if (error) {
            return res.status(400).send(error.message);
        }
        return res.status(200).redirect('auth/login');
    },

    postLogin: async (req, res) => {    
        const { email, password } = req.body;
        const { data, error } = await supabase
            .from('User')
            .select('*')
            .eq('email', email);
        if (error) {
            return res.status(400).send(error.message);
        }
        if(data) {
            bcrypt.compare(password, data[0].password, (err, result) => {
                if (result) {
                    req.session.user = { id: data[0].id, email: data[0].email, role: data[0].role, isLogged: true };
                    return res.status(200).redirect('/');
                } else {
                    return res.status(400).json({error_message:'Invalid email or password'});
                }
            });
        }
        
    },

    logout: async (req, res) => {
        req.session.destroy();
        return res.status(200).redirect('/auth/login');
    }
}