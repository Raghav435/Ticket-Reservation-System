const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new mongoose.Schema(
  {
    price: {
      type: String,
    },
    passengers: {
      type: Number,
      default: 1,
    },
    seatNumber: {
      type: String,
      required: true,
    },
    boardingPoints: {
      type: String,
      required: false,
    },

    user: { type: Schema.Types.ObjectId, ref: "User" },
    bus: { type: Schema.Types.ObjectId, ref: "Bus" },

    verification: {
      type: String,
      enum: ["verified", "notverified", "payed"],
      default: "notverified",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
