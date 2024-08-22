const usuariosService = require('../services/usuariosService');

module.exports = {
    async login(req, res) {
        const { email, password } = req.body; 
        const user = await usuariosService.loginUser(email, password);
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    },

    async register(req, res) {
        const userData = req.body;
        const newUser = await usuariosService.registerUser(userData);
        res.json(newUser);
    }
};
