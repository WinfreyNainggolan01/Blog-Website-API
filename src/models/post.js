/*
    Author: Winfrey Nainggolan
*/ 

const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    numOfLike: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
}, { timestamps: true });

postSchema.index({ title: 'text', description: 'text' });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
