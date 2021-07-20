const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToursSchema = new Schema(
  {
    tourName: {
      type: String,
      trim: true,
      required: "String is Required",
    },

    tourOperator: {
      type: Schema.Types.ObjectId,
      ref: "TourOperator",
    },

    departureLocation: {
      departureName: String,
      street: String,
      street2: String,
      city: String,
      state: {
        type: String,
      },
      zip: Number,
    },

    email: {
      type: String,
      // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    description: {
      type: String,
    },

    descriptionShort: {
      type: String,
    },

    tourLocation: {
      type: String,
    },

    cancellationPolicy: {
      type: String,
    },

    startTimes: {
      type: Array,
    },

    duration: {
      type: String,
    },

    cost: {
      type: Number,
    },
    additionalFees: {
      type: Number,
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

    image: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Tours = mongoose.model("Tours", ToursSchema);

module.exports = Tours;
