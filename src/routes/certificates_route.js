const express = require('express');

const router = express.Router();

const controller = require('../controllers/certificates_controller');

router.get('/certificates', controller.index);

module.exports = router;