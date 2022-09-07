const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
   
    diary:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"diarys"
    }]
  },
 
  { timeStamps: true }
);

module.exports = mongoose.model("users", userModel);
