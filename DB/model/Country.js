const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    countryName: {
      type: String,
      required: true,
      unique: true,
    },

    universityID: { type: [mongoose.Schema.Types.ObjectId], ref: "University" },

    stateProvince: {
      type: String,
      default: null,
    },
    alphaTwoCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const countryModel = mongoose.model("Country", messageSchema);
module.exports = countryModel;
