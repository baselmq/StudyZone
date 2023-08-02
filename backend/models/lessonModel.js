// models/Lesson.js
const mongoose = require('mongoose');
const lessonSchema = new mongoose.Schema({
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
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
