const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
  
  travellerName: {
    type: String,
    trim: true,
    required: "Please try again, a string is Required"
  },

    //how to use a reference ID in mongoose
    userID: [
        //populate all info needed from the User
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ],

    address: {
      street: String,
      street2: String,
      city: String,
      state: {
          type: String,
          uppercase: true,
          // enum: statesArray
      },
      zip: String
    },

      activity: [{
        //populate all info needed from the Tour for the activity chosen
        type: Schema.Types.ObjectId,
        ref: "Tours",
      }],

      phone: {
        type: String,
        // validate: [(string) => string.length >= 6, "Description string should be more than 6 characters."],
        required: [true, 'User phone number required'],
        minlength: 6
      },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  specialRequirements: String,

  participants: String,

  initialCost: {
    type: String,
    },

    otherFees: String,
    totalCost: String

    //   Other possible "types"
//   boolean: Boolean,
//   array: Array,

},
{timestamps: true});

const Bookings = mongoose.model("Bookings", BookingsSchema);

module.exports = Bookings;