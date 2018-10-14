const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let post_schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    draft: Boolean,
    meta: {
        author: {type: String, required: true},
        authorID:  {type: String, required: true},
        date: { type: Number, default: Date.now() },
        social: {
            facebook: String,
            twitter: String
        },
        category: [] ,
        tags: [],
    },
    content: {type: String, required: true},
}, {autoIndex: false});

module.exports = mongoose.model('posts', post_schema);