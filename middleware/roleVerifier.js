module.exports=(req, res, next)=>{
    if(req.session.user.role != 'admin'){
        return res.status(403).send('You are not authorized to access this page')
    }
    next();
}