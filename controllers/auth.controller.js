module.exports = {
    getLogin: (req, res) => {
        res.render('auth/login');
    },
    register: (req, res) => {
        res.render('auth/signup');
    },
}