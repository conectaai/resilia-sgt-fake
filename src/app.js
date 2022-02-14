const express = require('express');

const app = express();
const router = express.Router();

const index = require('./routes/index');
const courses_route = require('./routes/courses_route');

app.use('/', index);
app.use('/persons', courses_route);

module.exports = app;