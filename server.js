'use strict';

const express = require('express');

const PORT = 4000;

const app = express();
app.get('/', function (req, res) {
  res.send('Hello Test');
});

app.listen(PORT);

