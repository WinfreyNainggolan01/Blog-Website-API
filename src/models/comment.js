/*
    Author: Winfrey Nainggolan
*/ 

const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref : 'Post',
    },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
