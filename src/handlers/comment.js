/*
    Author: Winfrey Nainggolan
*/ 

const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');

// path: '/new-comment'
const addNewComment = async (req, h) => {
    const {
        body,
        post,
    } = req.payload;

    if(!body || !post) return h.response({error: 'All fields are required'}).code(400);
    
    try {
        const commentExists = await Post.findOne({_id: post.id});
        if (!commentExists) {
            return h.response({ error: 'Comment not found' }).code(404);
        }

        const newComment = new Comment({
            body,
            post: commentExists
        });

        const comment = await newComment.save();
        return h.response({ message: 'Comment created', comment }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error creating comment' }).code(500);
    }
}

// path: '/comments'
const getComments = async (req, h) => {
    try {
        const comments = await Comment.find()
        .populate("post", "_id title");
        return h.response({comments}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching comments'}).code(500);
    }            
}

// path: '/comments/post/{postId}'
const getCommentsByPost = async (req, h) => {
    try {
        const posts = await Comment.find(
            {post:{ _id: req.params.postId}}
        ).populate("post", "_id title");
        return h.response({posts}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching comments'}).code(500);
    }            
}

// path: '/comment-num'
const getCommentsCount = async (req, h) => {
    try {
        const comments = await Comment.countDocuments()
        return h.response({comments}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching comments'}).code(500);
    }
    
}

// path: '/delete-comment/{id}'
const deleteComment = async (req, h) => {
    try {
        const comment = await Comment.findOneAndDelete({_id: req.params.id});
        return h.response({message: 'Comment deleted', comment}).code(200);
    } catch (error) {
        return h.response({error: 'Error deleting comment'}).code(500);
    }
}

module.exports = {
    addNewComment,
    getComments,
    getCommentsByPost,
    getCommentsCount,
    deleteComment
}
