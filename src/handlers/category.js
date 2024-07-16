/*
    Author: Winfrey Nainggolan
*/ 

const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

// path: '/new-category'
const addNewCategory = async (req, h) => {
        const {
            name
        } = req.payload;

        if(!name) return h.response({error: 'All fields are required'}).code(400);
        
        const newCategory = new Category
        ({
            name
        });

        try {
            const category = await newCategory.save();
            return h.response({message: 'Category created', category}).code(201);
        } catch (error) {
            return h.response({error: 'Error creating category'}).code(500);
        }
    }

// path: '/categories'
const getCategories = async (req, h) => {
    try {
        const categories = await Category.find()
        return h.response({categories}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching categories'}).code(500);
    }
}

// path: '/category-num'
const getCategoryCount = async (req, h) => {
    try {
        const categories = await Category.countDocuments()
        return h.response({categories}).code(200);
    } catch (error) {
        return h.response({error: 'Error fetching categories'}).code(500);
    }
}

// path: '/delete-category/{id}'
const deleteCategory = async (req, h) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        return h.response({message: 'Category deleted', category}).code(200);
    } catch (error) {
        return h.response({error: 'Error deleting category'}).code(500);
    }
}

// path: '/update-category/{id}'
const updateCategory = async (req, h) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.payload, {new: true});
        return h.response({message: 'Category updated', category}).code(200);
    } catch (error) {
        return h.response({error: 'Error updating category'}).code(500);
    }
}


module.exports = {
    addNewCategory,
    getCategories,
    getCategoryCount,
    deleteCategory,
    updateCategory
}

