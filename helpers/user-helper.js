/*
 *      ABDUS -> 14/10/2018
 */

const userSchema = require('../database/models/userSchema');

let user = {}
module.exports = user;


// FIND all user 
user.findAll = () => {
    return userSchema.find({}, {hashedPassword: 0, email: 0})
}

// FIND a single user
user.find = user_id => {
    return userSchema.findById(user_id, {hashedPassword: 0, email: 0});
}

// REGISTER a new user 
user.register = user_data => {
    let data_to_save = new userSchema(user_data);
    return userSchema.findOne({email: user_data.email})
    .then(data => data !== null ? {msg: 'Email already exist', code: 300} : data_to_save.save())
}

// UPDATE an existing user 
user.update = (user_id, data_to_be_updated) => {
    return userSchema.findByIdAndUpdate(user_id, data_to_be_updated, {
        runValidators: true
    });
}

// DELETE a user 
user.delete = user_id => {
    return userSchema.findByIdAndRemove(user_id);
}