const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const router = express.Router();
const USER = require('../helpers/user-helper');
const JWT = require('../helpers/jwt-helper');

/* POST login */
router.post('/login', (req, res, next) => {
    USER.findAll({email: req.body.email})
        .then(data => JWT.generateToken(req.body.email, req.body.password))
        .then(data => res.json(data))
        .catch(err => res.json({msg: err.message || 'some message', code: err.code || 500}))
})

module.exports = router;