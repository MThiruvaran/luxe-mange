const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const chefInfoSchema = mongoose.Schema({
  email: {
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
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
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
  referal: {
    type: String,
    required: true,
  },
  terms: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("chefInfo", chefInfoSchema);
