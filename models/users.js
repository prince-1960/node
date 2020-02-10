const mongoose = require('mongoose');

var Users = mongoose.model('Users' , {
emp_id : {type: Number},
  name :{type: String},
  company : {type: String},
  designation : {type: String},

});

module.exports = { Users };
