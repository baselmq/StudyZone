const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
    },
    language: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    whatYouWillLearn: {
      type: Array,
    },
  },
  { timestamps: true }
);

// static signup method
courseSchema.statics.addCourse = async function (
  courseName,
  price,
  author,
  category,
  language,
  hours,
  description,
  image
) {
  //validation
  if (
    !courseName ||
    !price ||
    !category ||
    !author ||
    !language ||
    !hours ||
    !description ||
    !image
  ) {
    throw Error('All fields must be filled');
  }

  const exist = await this.findOne({ courseName });

  if (exist) {
    throw Error('Course Name Already in use');
  }

  const course = await this.create({
    courseName,
    price,
    author,
    category,
    language,
    hours,
    description,
    image,
  });

  return course;
};

module.exports = mongoose.model('Course', courseSchema);
