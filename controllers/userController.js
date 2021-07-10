const db = require("../models");
const bcrypt = require('bcrypt')

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
      .then(dbModel => {
        currentUser = dbModel
        return bcrypt.compare(req.body.password, dbModel.password) 
        // return dbModel.checkPassword(req.body.password)
      }) 
      .then(results => {
        if (results ) {

        // trying this manually rather than in model
          var today = new Date();
          var exp = new Date(today);
          exp.setDate(today.getDate() + 60);


          const token = jwt.sign({
            id: this._id,
            username: this.username,
            exp: parseInt(exp.getTime() / 1000),
          }, secret);
        // end trying

          // const token = currentUser.generateJWT()
          res.json({user: currentUser, token})
          return;
        }
        res.json({message: 'Bummer'})
      })
      .catch(err => res.status(422).json(err))
  },

  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
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
