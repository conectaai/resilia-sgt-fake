const questions = require('../data/questions');

exports.index = (req, res, next) => {
  res.status(200).send(questions);
};

exports.show = (req, res, next) => {
  res.status(200).send(questions[0]);
};