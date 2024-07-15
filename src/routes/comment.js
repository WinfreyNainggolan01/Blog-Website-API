/*
    Author: Winfrey Nainggolan
*/ 

const {
    addNewComment,
    getComments,
    getCommentsByPost,
    getCommentsCount
} = require('../handlers/comment');

const commentRoutes = [
    {
        method: 'GET',
        path: '/comments',
        handler: getComments,
    },
    {
        method: 'POST',
        path: '/new-comment',
        handler: addNewComment,
    },
    {
        method: 'GET',
        path: '/comments/post/{postId}',
        handler: getCommentsByPost,
    },
    {
        method: 'GET',
        path: '/comment-num',
        handler: getCommentsCount,
    }
    
];


module.exports = commentRoutes;

