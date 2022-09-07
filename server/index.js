require("./config/db");
const router = require("./Router/route");
const express = require("express");
const app = express();
const port = 2340;
const diaryRoute = require("./Router/DiaryRoute")

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Testing My Server");
});

app.use("/api", router);
app.use("/api", diaryRoute);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
