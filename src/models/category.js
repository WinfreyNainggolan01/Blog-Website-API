/*
    Author: Winfrey Nainggolan
*/ 

const mongoose = require('mongoose');

const category = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Category', category);