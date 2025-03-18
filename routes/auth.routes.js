const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase')
const authController = require('../controllers/auth.controller');

router.get('/login', authController.getLogin);
router.get('/signup', authController.register);
router.post('/signup', authController.postRegister);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout)


module.exports = router;