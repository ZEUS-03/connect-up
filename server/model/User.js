const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    interests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "interests",
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
      },
    ],
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    province: {
      type: String,
    },
    Country: {
      type: String,
    },
  },

  {
    timestamp: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
