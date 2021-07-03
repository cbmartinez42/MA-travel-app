const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const upload = require("../utils/multer-s3-util");
// API Routes
router.use("/api", apiRoutes);
router.get("/test", function(req, res){
  console.log("Test")
})
router.post('/photos/upload', upload.single("image_file"), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log('Image sent to S3', req.body)
})
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
