const projects = require('../data/projects');

exports.index = (req, res, next) => {
  res.status(200).send(projects);
};

exports.show = (req, res, next) => {
  res.status(200).send(projects[0]);
};