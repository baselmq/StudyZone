// app/controllers/courseController.js

const Course = require('../models/carModel');

const courseController = {
  createCourse: async (req, res) => {
    try {
      const course = await Course.create(req.body);
      res.status(201).json(course);
    } catch (err) {
      res.status(500).json({ error: 'Could not create course' });
    }
  },

  deleteByUserId: async (req, res) => {
    try {
      const result = await Course.deleteMany({ user_id: req.params.userId });
      res.json({ deletedCount: result.deletedCount });
    } catch (err) {
      res.status(500).json({ error: 'Could not delete courses' });
    }
  },

  deleteByCartId: async (req, res) => {
    try {
      const result = await Course.deleteOne({ _id: req.params.cartID });
      res.json({ deletedCount: result.deletedCount });
    } catch (err) {
      res.status(500).json({ error: 'Could not delete course' });
    }
  },

  getByUserId: async (req, res) => {
    try {
      const courses = await Course.find({ user_id: req.params.userId });
      res.json(courses);
    } catch (err) {
      res.status(500).json({ error: 'Could not fetch courses' });
    }
  },
};

module.exports = courseController;
