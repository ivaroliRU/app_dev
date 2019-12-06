const mongoose = require('mongoose');
const usersSchema = require('../models/Users');

const connection = mongoose.createConnection('mongodb+srv://vefthonustur:vefthonustur@vefthonustur-kmczd.mongodb.net/ruconnect', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    Users: connection.model('Users', usersSchema),
};