//Importing packages
const mongoose = require('mongoose');

//Creating a schema for books which indicates the fields that books will have i.e name, Author name, price etc
const booksSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Books', booksSchema);