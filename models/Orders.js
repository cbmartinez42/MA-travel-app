const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({

    payPalId: String,    
    dateOfPurchase: String,
    purchaser: String,
    tourName: String,
    participants: Number,

    user: [
    //populate all info needed from the User
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],

});

const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = Orders;
