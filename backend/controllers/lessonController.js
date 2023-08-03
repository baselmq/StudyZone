const Lesson = require("../models/lessonModel");

// getAllLessons
exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json({
      status: "success",
      results: lessons.length,
      data: {
        lessons,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

//createLessons
exports.createLessons = async (req, res) => {
  const { course_id, lesson_title, video_url } = req.body;

  try {
    const lesson = await Lesson.addCourse(course_id, lesson_title, video_url);
    res.status(200).json({
      status: "success",
      data: {
        lesson,
      },
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getLesson
exports.getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        lesson,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// updateLesson
exports.updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        lesson,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
// deleteLesson
exports.deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
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
