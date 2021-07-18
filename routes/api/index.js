const router = require("express").Router();
const bookingRoutes = require("./booking");
const operatorRoutes = require('./operators')
const tourRoutes = require('./tours')
const userRoutes = require('./user')
const eventRoutes = require('./events')

//  routes
router.use("/booking", bookingRoutes);
router.use("/operator", operatorRoutes);
router.use("/tour", tourRoutes);
router.use("/user", userRoutes);
router.use('/events', eventRoutes)

module.exports = router;
