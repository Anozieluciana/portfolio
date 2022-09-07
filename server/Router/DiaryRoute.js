const express = require("express")
const router = express.Router()
const {upload} = require("../config/multer")

const { createDiary } = require("../Controller/diary")


router
    .route("/:id/diary")
    .post(upload,createDiary)


module.exports=router