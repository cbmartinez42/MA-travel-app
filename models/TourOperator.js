const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OperatorSchema = new Schema({

})

const Operator = mongoose.model("Operator", OperatorSchema);

module.exports = Operator;