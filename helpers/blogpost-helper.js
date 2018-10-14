/*
 *      ABDUS -> 13/10/2018
 */

const postSchema = require('../database/models/postSchema');

const blog = {};
module.exports = blog;

// GET all blog post
blog.getAllPost = async () => {
    let all_posts = await postSchema.find();
    return all_posts
}

// GET a post by ID 
blog.getPostById = async post_id => {
    let post = await postSchema.findById(post_id);
    return post;
}

// ADD a new blog entry 
blog.addNewPost = blog_content => {
    let content_to_save = new postSchema(blog_content);
    return content_to_save.save();
}

// UPDATE a blog post
blog.updatePost = (post_id, data_to_be_updated) => {
    return postSchema.findByIdAndUpdate(post_id, data_to_be_updated, {
        runValidators: true
    });
}

// DELETE a blog post
blog.deletePost = user_id => {
    return postSchema.findByIdAndRemove(user_id);
}