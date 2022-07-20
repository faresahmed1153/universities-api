const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    universityName: {
      type: String,
      required: true,
    },
    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    webPage: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const universityModel = mongoose.model("University", messageSchema);
module.exports = universityModel;
