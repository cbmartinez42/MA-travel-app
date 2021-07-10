const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OperatorSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    // match: [/^[a-zA-Z0-9]$/, "is invalid"],
    index: true,
  },

  address: {
    street: String,
    street2: String,
    city: String,
    state: {
      type: String,
      uppercase: true,
      required: true,
      // enum: statesArray,
    },
    zip: Number,
  },

  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    // match: [/\S@\S\.\S/, "is invalid"],
    index: true,
  },

  phone: {
    type: String
  },

  license: {
    type: String
  },

  tours:
    //populate all info needed from the User
    {
      type: Array
    },

  logo: {
    // TODO: check correct setup for an image file
    type: String
  },

  profilePicture: {
        // TODO: check correct setup for an image file
    type: String
  }
  
});

const Operator = mongoose.model("Operator", OperatorSchema);

module.exports = Operator;
