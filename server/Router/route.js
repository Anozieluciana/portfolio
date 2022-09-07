const express = require("express");
const router = express.Router();
const {
    createStory,
    findAllStories,
    findStory,
    deleteStory,
    updateStory,
  
} = require("../Controller/userController");

router
      .route("/")
      .post(createStory)
      .get(findAllStories);

router.route("/:id")
      .get(findStory)
      .delete(deleteStory)
      .patch(updateStory);


module.exports = router;