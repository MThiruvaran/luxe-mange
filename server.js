const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 8080;
const connectionString =
  "mongodb+srv://luxe-mange:LuxeMange@luxe-mange.rqnyf.mongodb.net/test";

const chefRouter = require("./routes/chefRoutes");
const hotelRouter = require("./routes/hotelRoutes");

app.use("api/v1/chef", chefRouter);
app.use("api/v1/hotel", hotelRouter);

mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DataBase connected")
);

app.listen(port, () => console.log("server listening to port :", port));
