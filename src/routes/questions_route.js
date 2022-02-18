const express = require('express');

const router = express.Router();

const controller = require('../controllers/questions_controller');

router.get('/questions', controller.index);
router.get('/questions/:id', controller.show);

module.exports = router;