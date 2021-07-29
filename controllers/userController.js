const db = require("../models");
const bcrypt = require('bcrypt')
const secret = "ZaphodBeeblebrox"
const jwt = require('jsonwebtoken')

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.User
      .findByEmail(req.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function (req, res) {
    let currentUser; 
    db.User.findOne({email: req.body.email})
      .then(async dbModel => {
        currentUser = dbModel
        const isAuthed = await bcrypt.compare(req.body.password, dbModel.password)
        
        if (isAuthed) {
          return currentUser
        } else {
          return false
        }
      }) 
      .then(results => {
        if (results ) {

          var today = new Date();
          var exp = new Date(today);
          exp.setDate(today.getDate() + 60);
          const jwtParams = {
            id: results._id,
            email: results.email,
            exp: 10800000,
          }
          const token = jwt.sign(jwtParams, secret);

          res.json({user: results, token})
          return;
        }
        res.json({message: 'Bummer'})
      })
      .catch(err => res.status(422).json(err.message))
  },

  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("hi from userController ",req.body)
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
