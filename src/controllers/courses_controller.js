const courses = require('../data/courses');

exports.index = (req, res, next) => {
  res.status(200).send(courses);
};

exports.show = (req, res, next) => {
  res.status(200).send(courses[0]);
};