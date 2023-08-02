// routes/lessonRoutes.js
const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// Create a new lesson
router.post('/', lessonController.createLesson);

// Get all lessons
router.get('/', lessonController.getAllLessons);

// Get a single lesson by ID
router.get('/:id', lessonController.getLessonById);

// Update a lesson by ID
router.patch('/:id', lessonController.updateLesson);

// Delete a lesson by ID
router.delete('/:id', lessonController.deleteLesson);

module.exports = router;
