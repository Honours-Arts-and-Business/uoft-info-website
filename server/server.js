require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courses");

const app = express();

//middle ware

//idk what this is
app.use(express.json());

//logs all requests path and method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/courses", courseRoutes);

//connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("server started");
    });
  })
  .catch((e) => {
    console.log(e);
  });
