const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TJ', (err) => {
  if(!err)
  console.log('Connected...');
  else
    consoloe.log('Error'  +JSON.stringfy(err, undefined, 2));

});

module.exports = mongoose;
