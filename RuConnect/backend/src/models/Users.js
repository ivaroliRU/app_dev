const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

//set the user schema, the password is a combnation of the hash and salt
const UsersSchema = new Schema({
    email: String,
    hash: String,
    salt: String,
});

//use the given password and pre defined salt to generate a hash
UsersSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

//hash the given password and check if the hash matches the hash in the db
UsersSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};
  
// export userschema 
module.exports = UsersSchema;