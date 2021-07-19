const db = require("../models");
const upload = require("../utils/multer-s3-util");

// Defining methods for the tourController
module.exports = {
  findAll: function(req, res) {
    db.Tours
      .find()
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Tours
      .findById(req.params.id)
      .then(dbModel => {
       
        db.TourOperator.findById(dbModel.tourOperator).then((operatorRes)=> {

          return res.json({...dbModel._doc, operatorName: operatorRes.name})
        }).catch((err) => console.log(err))
        
      })
      .catch(err => console.log(err));
  },
  findByCategory: function(req, res) {
    db.Tours
      .find(req.params.category)  // hmmmm
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let newTour = {};
    newTour.departmentLocation = {}

 
    Object.keys(req.body).map((e) =>{
      console.log(e)
      if (e === "image"){
        newTour[e] = "TEST"
      }
      else if(e === "state" || e === "street" ||e === "street2" || e === "zip" || e === "city"){
        newTour.departmentLocation[e] = req.body[e]
      }
      else{
        newTour[e] = req.body[e]
      }
    })

    db.Tours
    // need spread operator to req.body.location
      .create(newTour)
      .then(dbModel => {
        console.log(dbModel)
        res.status(200).json(dbModel)})
      .catch(err => {console.log(err)
        res.status(422).json(err)});
  },
  update: function(req, res) {
    db.Tours
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Tours
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
