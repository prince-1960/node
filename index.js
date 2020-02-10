const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');

var userController = require('./controllers/usersController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started'));


app.use('/user', userController);
