const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect("mongodb+srv://fares:mongodb01@cluster0.efiez.mongodb.net/task")
    .then((result) => {
      console.log(`DB connected`);
    })
    .catch((err) => console.log("fail to connect DB", err));
};

module.exports = connectDB;
