const router = require("express").Router();
const bookingRoutes = require("./booking");
const operatorRoutes = require('./operators')
const tourRoutes = require('./tours')
const userRoutes = require('./user')
const orderRoutes = require('./orders')

//  routes
router.use("/booking", bookingRoutes);
router.use("/operator", operatorRoutes);
router.use("/tour", tourRoutes);
router.use("/user", userRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
