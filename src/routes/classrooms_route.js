const express = require('express');

const router = express.Router();

const controller = require('../controllers/classrooms_controller');

router.get('/classrooms/:id', controller.show);

module.exports = router;