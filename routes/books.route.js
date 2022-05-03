//Importing packages
const express = require('express');
const Books = require('../models/books.models');

const routes = express.Router();

//Generating routes
routes.get('/', async(req,res) => {
    try{
        const books = await Books.find();
        res.json(books)
    }catch(err){
        res.send(err);
    }
});

routes.get('/:id', async(req, res) => {
    try{
        const books = await Books.findById(req.params.id);
        res.json(books);
    }catch(err){
        res.send(err);
    }
})

routes.post('/', async(req,res) => {
    const book = new Books({
        name: req.body.name,
        authorName: req.body.authorName,
        description: req.body.description,
        price: req.body.price
    });
    try{
        const result = await book.save();
        res.json(result);
    }catch(err){
        res.send(err);
    }
});

routes.patch('/:id', async(req, res) => {
    try{
        const book = await Books.updateOne({ _id: req.params.id }, { $set: { 
            name: req.body.name,
            authorName: req.body.authorName,
            description: req.body.description,
            price: req.body.price
        } });
        res.json(book);
    }catch(err){
        res.send(err);
    }
})

routes.delete('/:id', async(req, res) => {
    try{
        const book = await Books.remove({ _id: req.params.id });
        res.json(book);
    }catch(err){
        res.send(err);
    }
})

module.exports = routes;