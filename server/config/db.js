const mongoose = require("mongoose");
const url = "mongodb://localhost/diary";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database connect");
  })
  .catch(() => {
    console.log("connection failed");
  });
