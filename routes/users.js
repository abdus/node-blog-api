const express = require('express');
const router = express.Router();
const USER = require('../helpers/user-helper');

/* GET all users */
router.get('/all', (req, res, next) => {
  USER.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({msg: err.message, code: err.code || 500}))
});

/* GET a single user */
router.get('/:id', (req, res, next) => {
  USER.find(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json({msg: err.message, code: err.code || 500}));
})

/* REGISTER a new user */
router.post('/register', (req, res, next) => {
  USER.register(req.body)
    .then(data => res.json(data))
    .catch(err => res.json({msg: err.message, code: err.code || 500}))
})

// UPDATE an user 
router.put('/:id', (req, res, next) => {
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
