/*
 *      ABDUS -> 14/10/2018
 */

const userSchema = require('../database/models/userSchema');

let user = {}
module.exports = user;


// REGISTER a new user 
user.register = user_data => {
    let data_to_save = new userSchema(user_data);
    return data_to_save.save();
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