// routes/lessonRoutes.js
const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// Create a new lesson
router.post('/lessons', lessonController.createLesson);

// Get all lessons
router.get('/lessons', lessonController.getAllLessons);

// Get a single lesson by ID
router.get('/lessons/:id', lessonController.getLessonById);

// Update a lesson by ID
router.patch('/lessons/:id', lessonController.updateLesson);

// Delete a lesson by ID
router.delete('/lessons/:id', lessonController.deleteLesson);

module.exports = router;
