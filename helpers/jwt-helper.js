const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const userSchema = require('../database/models/userSchema');
const {jwt_secret} = require('../config');
 
// GENERATE a new token(only approved user can generate tokens)
exports.generateToken = (user_email, user_password) => {
    return userSchema.find({email: user_email})
    .then(data => {
        if (data === null) return {msg: 'User Not Found', code: 404}

        if (bcrypt.compareSync(user_password, data.hashedPassword) && data.isApproved) return jwt.sign({_id: data._id}, jwt_secret, {algorithm: 'HS256'});

        return {msg: 'Wrong Password', code: 300}
    })
}

// VERIFY a token 
exports.verifyToken = () => {
    let decoded_token = jwt.verify(jwt_token, jwt_secret);
    return userSchema.findById(decoded_token._id)
    .then(data => {
        if (data === null) return {msg: 'User Not Found', code: 404}

        return {msg: 'Authenticated Token', code: 200}
    })
}