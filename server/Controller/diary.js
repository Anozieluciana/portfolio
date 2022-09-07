const userModel = require("../Model/userModel")
const diaryModel = require("../Model/diary")
const {Mongoose} = require("mongoose")
const cloudinary = require("../config/cloudinary")



const createDiary = async(req, res)=>{
    try{
       const {title, story} = req.body
       const diaryImage = cloudinary.uploads.upload(req.file.path)
       const getUser = await userModel.findById(req.params.id)
       const myDiary = new diaryModel({
        title,
        story,
        Image:diaryImage.secure_url,
        imageID:diaryImage.private_id
       })
      myDiary.user = getUser
      myDiary.save()

      getUser.diary.push(Mongoose.Types.ObjectId(myDiary._id))
      getUser.save()

        res.status(200).json({
            status:"success",
            data: myDiary
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports={
    createDiary
}