const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8080;
const connectionString = process.env.MONGODB_CONNECTION_STRING;

const chefRouter = require("./routes/chefRoutes");
const chefInfoRouter = require("./routes/chefInfoRoutes");
const hotelRouter = require("./routes/hotelRoutes");
const hotelInfoRouter = require("./routes/hotelInfoRoutes");
const jobsRouter = require("./routes/jobsRoutes");

app.use("/api/v1/chef", chefRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/hotelinfo", hotelInfoRouter);
app.use("/api/v1/chefinfo", chefInfoRouter);
app.use("/api/v1/jobs", jobsRouter);

mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DataBase connected")
);

app.listen(port, () => console.log("server listening to port :", port));
