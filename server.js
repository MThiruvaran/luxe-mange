const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;
const connectionString = process.env.MONGODB_CONNECTION_STRING;

const chefRouter = require("./routes/chefRoutes");
const hotelRouter = require("./routes/hotelRoutes");
const hotelInfoRouter = require("./routes/hotelInfoRoutes");

app.use("/api/v1/chef", chefRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/hotelinfo", hotelInfoRouter);

mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DataBase connected")
);

app.listen(port, () => console.log("server listening to port :", port));
