/*
    Author: Winfrey Nainggolan
*/ 

const {
    addNewPost,
    getPost,
    getFeaturedPost,
    getPostById,
    getPostByCategoryId,
    getTrendingPost,
    getFreshPost,
    searchPost
} = require('../handlers/post');

const PostRoutes = [
    {
        method: 'GET',
        path: '/posts',
        handler: getPost,
    },
    {
        method: 'GET',
        path: '/featured-posts',
        handler: getFeaturedPost,
    },
    {
        method: 'GET',
        path: '/posts/{id}',
        handler: getPostById,
    },
    {
        method: 'GET',
        path: '/posts/category/{catId}',
        handler: getPostByCategoryId,
    },
    {
        method: 'GET',
        path: '/trending-posts',
        handler: getTrendingPost,
    },
    {
        method: 'GET',
        path: '/fresh-stories',
        handler: getFreshPost,
    },
    {
        method: 'POST',
        path: '/new-post',
        handler: addNewPost,
    },
    {
        method: 'GET',
        path: '/search/{query}',
        handler: searchPost,
    }
];

module.exports = PostRoutes;

