const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  source: String,
  status: {
    type: String,
    enum: ["new", "contacted", "converted"],
    default: "new",
  },
  notes: [
    {
      text: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Lead", LeadSchema);