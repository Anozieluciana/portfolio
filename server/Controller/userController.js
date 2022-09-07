const userModel = require("../Model/userModel");

const createStory = async (req, res) => {
  try {
    const newStory = await userModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: newStory,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: "failed",
    });
  }
};

const findAllStories = async (req, res) => {
  try {
    const findStories = await userModel.find(req.params.id);

    res.status(201).json({
      status: "success",
      data: findStories,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: "failed",
    });
  }
};

const findStory = async (req, res) => {
  try {
    const story = await userModel.findById(req.params.id);

    res.status(201).json({
      message: "Story compilled",
      status: "success",
      data: story,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: "failed",
    });
  }
};

const updateStory = async (req, res) => {
  try {
    const update = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      message: "update done",
      status: "success",
      data: update,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: "failed",
    });
  }
};

const deleteStory = async (req, res) => {
  try {
    const deleted = await userModel.findByIdAndDelete(req.params.id);

    res.status(201).json({
      message: "deleted successfully",
      status: "success",
      data: deleted,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: "failed",
    });
  }
};

module.exports = {
  createStory,
  findAllStories,
  findStory,
  deleteStory,
  updateStory,
};
