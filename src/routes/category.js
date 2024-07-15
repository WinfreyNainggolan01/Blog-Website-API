/*
    Author: Winfrey Nainggolan
*/ 

const {
    addNewCategory,
    getCategories,
    getCategoryCount
} = require('../handlers/category');

const CategoryRoutes = [
    {
        method: 'GET',
        path: '/categories',
        handler: getCategories,
    },
    {
        method: 'GET',
        path: '/category-num',
        handler: getCategoryCount,
    },
    {
        method: 'POST',
        path: '/new-category',
        handler: addNewCategory,
    }
]

module.exports = CategoryRoutes;

