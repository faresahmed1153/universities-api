const mongoose = require("mongoose");
const bycrpt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// to hash user password
userSchema.pre("save", async function (next) {
  this.password = await bycrpt.hash(this.password, parseInt(process.env.saltRound));
  next();
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
