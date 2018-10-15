const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const router = express.Router();
const USER = require('../helpers/user-helper');

/* GET all users */
router.get('/all', (req, res, next) => {
  
  USER.findAll(req.query)
    .then(data => res.json(data))
    .catch(err => res.json({msg: err.message, code: err.code || 500}))
});

/* GET a single user */
router.get('/find/:id', (req, res, next) => {
  USER.find(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json({msg: err.message, code: err.code || 500}));
})

/* REGISTER a new user */
router.post('/register', (req, res, next) => {
  req.body.hashedPassword = bcrypt.hashSync(req.body.password);
  
  USER.register(req.body)
    .then(data => res.json(data))
    .catch(err => res.json({msg: err.message, code: err.code || 500}))
})

// UPDATE an user 
router.put('/update/:id', (req, res, next) => {
  USER.update(req.params.id, req.body)
    .then(() => res.json({msg: 'success', code: 200}))
    .catch(err => res.json({msg: err.message, code: err.code || 500}))
})

// REMOVE an existing user
router.delete('/delete/:id', (req, res, next) => {
  USER.delete(req.params.id)
    .then(() => res.json({msg: 'Success', code: 200}))
    .catch(err => res.json({msg: err.message, code: err.code || 500}))
})

module.exports = router;
