const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const userSchema = require('../database/models/userSchema');
const {jwt_secret} = require('../config');
 
// GENERATE a new token(only approved user can generate tokens)
exports.generateToken = (user_email, user_password) => {
    return userSchema.find({email: user_email})
    .then(data => {
        
        if (data === null) return {msg: 'User Not Found', code: 404} 

        if (bcrypt.compareSync(user_password, data[0].hashedPassword) && data[0].isApproved && data[0].admin) return jwt.sign({_id: data[0]._id}, jwt_secret, {algorithm: 'HS256'});

        return {msg: 'Wrong Password or Acc Not approved yet', code: 300}
    })
}

// VERIFY a token 
exports.verifyToken = jwt_token => {
    let decoded_token = jwt.verify(jwt_token, jwt_secret);
    return userSchema.findById(decoded_token._id)
    .then(data => data !== null)
}