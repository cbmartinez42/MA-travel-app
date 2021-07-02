const router = require("express").Router();
const tourController = require("../../controllers/tourController");

// Matches with "/api/tours"
router.route("/")
  .get(tourController.findAll)
  .post(tourController.create);

// Matches with "/api/tours/:id"
router
  .route("/:id")
  .get(tourController.findById)
  .put(tourController.update)
  .delete(tourController.remove);

module.exports = router;
