const express = require('express');

const app = express();

const certificates_route = require('./routes/certificates_route');
const classrooms_route = require('./routes/classrooms_route');
const courses_route = require('./routes/courses_route');
const modulus_route = require('./routes/modulus_route');
const projects_route = require('./routes/projects_route');
const questions_route = require('./routes/questions_route');
const students_route = require('./routes/students_route');

app.use(certificates_route);
app.use(classrooms_route);
app.use(courses_route);
app.use(modulus_route);
app.use(projects_route);
app.use(questions_route);
app.use(students_route);

module.exports = app;