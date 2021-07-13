const router = require("express").Router();
const tourController = require("../../controllers/tourController");
const upload = require("../../utils/multer-s3-util");
// Matches with "/api/tours"
router.get("/", tourController.findAll)
router.post("/",tourController.create);

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
