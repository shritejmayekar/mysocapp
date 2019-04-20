const express = require('express');
const app = express();
const memberRoutes = express.Router();
let Member = require('../models/Members');

memberRoutes.route('/add').post(function(req,res){
    let member = new Member(req.body);
    member.save()
    .then(member =>{
        res.status(200).json({'Member':'member added successfully'});
    })
    .catch(err =>{
        res.status(400).send('unable to create database')
    })
})
memberRoutes.route('/').get(function (req, res) {
    Member.find(function (err, members){
    if(err){
      console.log(err);
    }
    else {
      res.json(members);
    }
  });
});

module.exports = memberRoutes;
