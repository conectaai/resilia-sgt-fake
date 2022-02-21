const courses = require('../data/courses');

exports.index = (req, res, next) => {
  res.status(200).send(courses);
};

exports.show = (req, res, next) => {
  const { id } = req.params;
  
  res.status(200).send(courses[Number(id)-1]);
};