// app/routes/courseRoutes.js

const express = require('express');
const courseController = require('../controllers/cartController');

const router = express.Router();

router.post('/', courseController.createCourse);
router.delete('/:userId', courseController.deleteByUserId);
router.delete('/cart/:cartID', courseController.deleteByCartId);
router.get('/:userId', courseController.getByUserId);

module.exports = router;
