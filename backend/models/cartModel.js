const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  user_id: String,
  course_id: String,
  course_name: String,
  course_price: Number,
  enrollment_date: Date,
});

const Course = mongoose.model("Cart", courseSchema);

module.exports = Course;
