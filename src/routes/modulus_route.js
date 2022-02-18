const express = require('express');

const router = express.Router();

const controller = require('../controllers/modulus_controller');

router.get('/modulus', controller.index);
router.get('/modulus/:id', controller.show);

module.exports = router;