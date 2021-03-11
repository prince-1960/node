'use strict';

const express = require('express');

const PORT = 4000;

const app = express();
app.get('/', function (req, res) {
  res.send('Hello Im a CI CD Pipeline');
});

app.listen(PORT);

