// models/Lesson.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  course_id: {
    type: String,
    required: true,
  },
  lesson_title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  video_url: {
    type: String,
    required: true,
  },
});

lessonSchema.statics.addCourse = async function (
  course_id,
  lesson_title,
  video_url
) {
  //validation
  if (!course_id || !lesson_title || !video_url) {
    throw Error("All fields must be filled");
  }

  const lesson = await this.create({
    course_id,
    lesson_title,
    video_url,
  });

  return lesson;
};

module.exports = mongoose.model("Lesson", lessonSchema);
