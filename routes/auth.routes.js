const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase')
const authController = require('../controllers/auth.controller');

router.get('/login', authController.getLogin);
router.get('/signup', authController.register);


module.exports = router;