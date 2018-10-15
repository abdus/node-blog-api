const express = require('express');
const router = express.Router();
const BLOG = require('../helpers/blogpost-helper')

/* GET all posts*/
router.get('/posts', (req, res, next) => {
  BLOG.getAllPost()
    .then(data => res.json(data))
    .catch(err => res.json({code: err.code || 500, msg: err.message}))
})

/* GET a post by ID */
router.get('/find/:id', (req, res, next) => {
  BLOG.getPostById(req.params.id)
    .then(data => res.json(data))
})

/* ADD a new blog post */
router.post('/new', (req, res, next) => {
  BLOG.addNewPost(req.body)
    .then(() => res.json({msg: 'Success', code: 200}))
    .catch(err => res.json({msg: err.message, code: err.code || 500}))
})

/* UPDATE a blog post */
router.put('/update/:id', (req, res, next) => {
  BLOG.updatePost(req.params.id,req.body)
    .then(() => res.json({msg: 'Success', code: 200}))
    .catch(err => res.json({msg: err.message, code: err.code || 500})) 
})

module.exports = router;