const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

router.post('/login', usuariosController.login);
router.post('/register', usuariosController.register);

module.exports = router;
