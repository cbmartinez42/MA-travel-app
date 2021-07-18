const router = require("express").Router();
const eventsController = ('../../controllers/eventsController')

router
  .route('/')
  .post(eventsController.create)

module.exports = router;
