const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    id_courses: {
      type: String,
      required: true,
    },
    id_user: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// static signup method
courseSchema.statics.addCart = async function (
  id_courses,
  id_user,
  courseName,
  price,
  image
) {
  //validation
  if (!id_courses || !courseName || !id_user || !price || !image) {
    throw Error("All fields must be filled");
  }

  const cart = await this.create({
    id_courses,
    id_user,
    courseName,
    price,
    image,
  });

  return cart;
};

module.exports = mongoose.model("Cart", courseSchema);
