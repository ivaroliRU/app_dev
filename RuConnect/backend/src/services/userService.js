const Users = require('../data/db').Users;

module.exports.findUser = (email, password, cb) => {
    Users.findOne({ email })
    .then((user) => {
        if(!user || !user.validatePassword(password)) {
            cb(false);
        }
      
        cb(user);
    });
};

module.exports.getAllUsers = (cb) => {
    User.find({}, function(err, users) {
        var usersList = [];
    
        users.forEach(function(user) {
            usersList.push(user.email);
        });
    
        cb(usersList);  
    });
};

module.exports.createUser = (email, password) => {
    const finalUser = new Users({email:email, password:password});

    finalUser.setPassword(password);
    
    return finalUser.save();
};