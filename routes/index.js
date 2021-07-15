const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const upload = require("../utils/multer-s3-util");
const db = require("../models");
// API Routes
router.use("/api", apiRoutes);
router.get("/test", function(req, res){
  console.log("Test")
})
router.put('/image/:id', upload.single("image_file"), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log(req.body)
  console.log('Image sent to S3', req.file)
    db.Tours
  .findOneAndUpdate({ _id: req.params.id }, {$push: {image: req.file.location}})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));

  // the address to the url stored on amazon s3 
  // res.json({imageUrl: req.file.location})
})
// router.get('/image/', function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
//   db.Tours.aggregate([
//     {$unwind: "$image"},
//     {$unwind: "$departmentLocation"}
//   ]).then((dbTour) =>{
//       console.log(dbTour)
//       res.json(dbTour)
//   })

//   // the address to the url stored on amazon s3 
//   // res.json({imageUrl: req.file.location})
// })




// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
