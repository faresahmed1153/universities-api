const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(process.env.DBLink)
    .then((result) => {
      console.log(`DB connected`);
    })
    .catch((err) => console.log("fail to connect DB", err));
};

module.exports = connectDB;
