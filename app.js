//Importing packages
const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//Importing routes
const booksRoute = require('./routes/books.route');

//Middlewares: Functions that are executed when routes are hit by clients.
app.use(bodyParser.json());
app.use('/books', booksRoute);

//Routes: User can navigate to project with routes
app.get('/', (req, res) => {
    res.send('This books api is under development...');
});

//Database connection
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mj7pj.mongodb.net/Books-API?retryWrites=true&w=majority`;
//const uri = mongodb+srv://sanjayy:@Hack404@cluster0.mj7pj.mongodb.net/Books-API?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser : true });

//Server: Listening on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000.');
});