const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToursSchema = new Schema({
  tourName: {
    type: String,
    trim: true,
    required: "String is Required"
  },

    //how to use a reference ID in mongoose
    tourOperator: {
      type: Schema.Types.ObjectId,
      ref: "TourOperator"
    },

      departureLocation: {
        departureName: String,
        street: String,
        street2: String,
        city: String,
        state: {
            type: String,
            // uppercase: true,
            // required: true,
            // enum: statesArray
        },
        zip: Number
    },

  email: {
    type: String,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

//   Other possible "types"
//   boolean: Boolean,
//   array: Array,
  description: {
    type: String,
    // validate: [({ length }) => length >= 6, "Description string should be more than 6 characters."]
  },

  tourLocation: {
    type: String,
  },

  cancellationPolicy: {
      type: String,
      // validate: [({ length }) => length >= 6, "Description string should be more than 6 characters."]
  },

  startTimes: {
    type: Array,
  },

  duration: {
  type: String,
  },

  cost: {
    type: Number,
    // TODO: check all validations
    // required: "A price is Required",
    },
  additionalFees: {
    type: Number
    },

    maxCapacity: Number,
    minCapacity: Number,

    keywords: {
      type: Array,
    },

    category: {
      type: Array,
    },

    calendar: {
      type: String,
    },
  
    // TODO: correctly setup for an image file
    image: {
      type: Array
    }

},
{timestamps: true});

const Tours = mongoose.model("Tours", ToursSchema);

module.exports = Tours;