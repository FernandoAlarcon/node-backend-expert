const User = require('../models/user');

module.exports = {
    async registerUser(userData) {
        const user = new User(userData);
        return await user.save();
    },

    async loginUser(username, password) {
        return await User.findOne({ username, password });
    }
};
