const express = require("express");
const connectDB = require("./DB/connection");
const { userRouter, countryRouter, universityRouter } = require("./modules/index.router");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

port = process.env.PORT;

app.use(userRouter, countryRouter, universityRouter);

connectDB();
app.listen(port, () => {
  console.log(`Server up`);
});
