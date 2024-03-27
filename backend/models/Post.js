const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    jobDesignation: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    CostToCompany: {
      type: String,
      required: true,
    },
    bond: {
      type: String,
      required: true,
    },
    PlaceOfPosting: {
      type: String,
      required: true,
    },
    openingsFor: {
      type: Array,
    },
    noofRounds: {
      type: Array,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
