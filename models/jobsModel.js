const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const jobsSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  yourPosition: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  transport: {
    type: Boolean,
  },
  specialities: {
    type: Array,
    default: [],
  },
  experience: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("jobs", jobsSchema);
