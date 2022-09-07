const mongoose = require("mongoose");

const diaryModel = mongoose.Schema(
  {
    Title: {
      type: String,
    },
    Story: {
      type: String,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("diarys", diaryModel);
