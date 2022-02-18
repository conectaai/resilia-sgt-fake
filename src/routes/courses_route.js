const express = require('express');

const router = express.Router();

const controller = require('../controllers/courses_controller');

router.get('/courses', controller.index);
router.get('/courses/:id', controller.show);

module.exports = router;