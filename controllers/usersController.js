const express = require('express');
var router = express.Router();

var { Users } = require('../models/users.js');

router.get('/', (req,res) => {
  Users.find((err, docs) => {
    if(!err) {
      res.send(docs); }
      else {  console.log('Error in fetching:' + Json.stringfy(err,undefined, 2));}
    });
  });

  router.post('/add', (req,res) => {
      var User = new Users ({
        name: req.body.name,
        emp_id: req.body.id,
        company: req.body.company,
        designation: req.body.designation
      });
      User.save((err,doc) => {  if(!err) {
          res.send(doc); }
          else {  console.log('Error in Saving:' + Json.stringfy(err,undefined, 2));}
        })
    });

module.exports = router;
