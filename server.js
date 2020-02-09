'use strict';

const express = require('express');

const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(3000);
console.log('Running on http://localhost:3000');
