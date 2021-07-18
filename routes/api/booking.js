const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

// Matches with "/api/booking"
router.route("/")
  .get(bookingController.findAll)
  .post(bookingController.create);

  router
  .route("/email/:id")
  .get(bookingController.findOne)
  .put(bookingController.update)
  .delete(bookingController.remove);

// Matches with "/api/booking/:id"
router
  .route("/:id")
  .get(bookingController.findById)
  .put(bookingController.update)
  .delete(bookingController.remove);


module.exports = router;
