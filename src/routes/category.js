/*
    Author: Winfrey Nainggolan
*/ 

const {
    addNewCategory,
    getCategories,
    getCategoryCount,
    deleteCategory,
    updateCategory
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
    },
    {
        method: 'DELETE',
        path: '/delete-category/{id}',
        handler: deleteCategory,
    },
    {
        method: 'PUT',
        path: '/update-category/{id}',
        handler: updateCategory,
    }
]

module.exports = CategoryRoutes;

