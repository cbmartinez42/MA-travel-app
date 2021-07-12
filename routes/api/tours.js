const router = require("express").Router();
const tourController = require("../../controllers/tourController");
const upload = require("../../utils/multer-s3-util");
// Matches with "/api/tours"
router.route("/")
  .get(tourController.findAll)
  .post(tourController.create,upload.array("file"));

// Matches with "/api/tour/:id"
router
  .route("/:id")
  .get(tourController.findById)
  .put(tourController.update)
  .delete(tourController.remove);

router
  .route("/:category")
  .get(tourController.findByCategory)

module.exports = router;
