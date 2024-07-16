/*
    Author: Winfrey Nainggolan
*/ 

const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Category = mongoose.model('Category');

// path: '/new-post'
const addNewPost = async (req, h) => {
    const {
        title,
        description,
        numOfLike,
        imgUrl,
        isFeatured,
        category
    } = req.payload;

    if(!title || !description || !imgUrl || !category || !numOfLike || !isFeatured) {
        return h.response({error: 'All fields are required'}).code(400);
    }

    try {
        const categoryExists = await Category.findOne({_id: category._id});
        if (!categoryExists) {
            return h.response({ error: 'Category not found' }).code(404);
        }

        const newPost = new Post({
            title,
            description,
            imgUrl,
            numOfLike,
            isFeatured,
            category
        });

        const post = await newPost.save();
        return h.response({ message: 'Post created', post }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error creating post' }).code(500);
    }
}

// path: '/posts'
const getPost = async (req, h) => {
    try {
        const posts = await Post.find().populate("category", "_id name");
        return h.response({posts}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching posts'}).code(500);
    }            
}

//  path: '/featured-posts'
const getFeaturedPost = async (req, h) => {
    try {
        const posts = await Post.find({isFeatured: true}).populate("category", "_id name");
        return h.response({posts}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching posts'}).code(500);
    }            
}


// path: '/posts/{id}'
const getPostById = async (req, h) => {
    try {
        const posts = await Post.find({_id: req.params.id})
        .populate("category", "_id name");
        return h.response({posts}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching posts'}).code(500);
    }            
}

// path: '/posts/category/{catId}'
const getPostByCategoryId = async (req, h) => {
    try {
        const posts = await Post.find({category:{ _id: req.params.catId}})
        .populate("category", "_id name");
        return h.response({posts}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching posts'}).code(500);
    }            
}

const getTrendingPost = async (req, h) => {
    try {
        const posts = await Post.find()
        .sort({numOfLike: -1})
        .populate("category", "_id name");
        return h.response({posts}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching posts'}).code(500);
    }            
}

// path: '/fresh-stories'
const getFreshPost = async (req, h) => {
    try {
        const posts = await Post.find()
        .sort({createdAt: -1})
        .populate("category", "_id name");
        return h.response({posts}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching posts'}).code(500);
    }            
}

// path: '/search/{query}'
const searchPost = async (req, h) => async (req, h) => {
    const {
        query
    } = req.params;

    if(!query) {
        return h.response({error: 'Nothing is searched !!!'}).code(400);
    }

    try {
        const posts = await Post.find({$text: {$search: query}});

        if(posts.length === 0) {
            return h.response({msg: 'No post found'}).code(404);
        }
        
        return h.response({ msg: 'Found', posts }).code(200);

    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error searching post' }).code(500);
    }
}

// path: '/delete-post/{id}'
const deletePost = async (req, h) => {
    try {
        const post = await Post.findOneAndDelete({_id: req.params.id});
        if(!post) {
            return h.response({error: 'Post not found'}).code(404);
        }
        return h.response({msg: 'Post deleted'}).code(200);
    } catch (error) {
        console.error(error);
        return h.response({error: 'Error deleting post'}).code(500);
    }
}

// path: '/update-post/{id}'
const updatePost = async (req, h) => {
    try {
        const post = await Post.findOneAndUpdate({_id: req.params.id}, req.payload, {new: true});
        if(!post) {
            return h.response({error: 'Post not found'}).code(404);
        }
        return h.response({msg: 'Post updated', post}).code(200);
    }
    catch (error) {
        console.error(error);
        return h.response({error: 'Error updating post'}).code(500);
    }
}

module.exports = {
    addNewPost,
    getPost,
    getFeaturedPost,
    getPostById,
    getPostByCategoryId,
    getTrendingPost,
    getFreshPost,
    searchPost,
    deletePost,
    updatePost
}