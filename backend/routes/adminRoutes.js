const express = require("express");
const courseController = require("../controllers/courseController");
const lessonController = require("../controllers/lessonController");
const adminController = require("../controllers/adminController");

const router = express.Router();

// ----------------- login route -----------------
router.post("/login", adminController.loginAdmin);

// ----------------- user route -----------------
router
  .route("/users")
  .get(adminController.getAllUsers)
  .post(adminController.createUser);

router
  .route("/users/:id")
  .get(adminController.getUser)
  .patch(adminController.updateUser)
  .delete(adminController.deleteUser);

// ----------------- courses route -----------------
router
  .route("/courses")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);

router
  .route("/courses/:id")
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

// ----------------- lessons route -----------------
router
  .route("/lessons")
  .get(lessonController.getAllLessons)
  .post(lessonController.createLessons);

router
  .route("/lessons/:id")
  .get(lessonController.getLesson)
  .patch(lessonController.updateLesson)
  .delete(lessonController.deleteLesson);
module.exports = router;
