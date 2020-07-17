const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const hotelInfoSchema = mongoose.Schema({
  contactNumber: {
    type: Number,
    required: true,
  },
  yourPosition: {
    type: String,
    required: true,
  },
  siteName: {
    type: String,
    required: true,
  },
  siteContactNumber: {
    type: String,
    required: true,
  },
  accomodation: {
    type: Boolean,
  },
  numberOfStaff: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  specialities: {
    type: Array,
    default: [],
  },
  siteLink: {
    type: String,
  },
  fbLink: {
    type: String,
  },
  twitterLink: {
    type: String,
  },
  tripAdvisorLink: {
    type: String,
  },
  greatAbout: {
    type: String,
    required: true,
  },
  referal: {
    type: String,
    required: true,
  },
  comapnyNname: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  vat: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  accountPosition: {
    type: String,
    required: true,
  },
  accountEmail: {
    type: String,
    required: true,
  },
  terms: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("hotelInfo", hotelInfoSchema);
