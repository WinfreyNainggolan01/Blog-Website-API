/*
    Author: Winfrey Nainggolan
*/ 

const {
    addNewComment,
    getComments,
    getCommentsByPost,
    getCommentsCount,
    deleteComment,
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
    },
    {
        method: 'DELETE',
        path: '/delete-comment/{id}',
        handler: deleteComment,
    }
    
];


module.exports = commentRoutes;

