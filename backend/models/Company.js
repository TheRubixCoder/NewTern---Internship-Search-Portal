const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyId: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Company", CompanySchema);
