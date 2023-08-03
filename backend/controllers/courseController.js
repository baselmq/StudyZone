const Course = require("../models/courseModel");

// getAllUsers
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      status: "success",
      results: courses.length,
      data: {
        courses,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

//createUser
exports.createCourse = async (req, res) => {
  const {
    courseName,
    price,
    author,
    category,
    language,
    hours,
    description,
    image,
  } = req.body;

  try {
    const course = await Course.addCourse(
      courseName,
      price,
      author,
      category,
      language,
      hours,
      description,
      image
    );
    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getUser
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// updateUser
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
// deleteUser
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
