const express = require('express');

const router = express.Router();

const controller = require('../controllers/projects_controller');

router.get('/projects', controller.index);
router.get('/projects/:id', controller.show);

module.exports = router;