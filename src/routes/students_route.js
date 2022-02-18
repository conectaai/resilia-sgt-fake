const express = require('express');
const router = express.Router();
const controller = require('../controllers/students_controller.js');

router.get('/students/:id', controller.show);
router.put('/students/:id', controller.update);

module.exports = router;