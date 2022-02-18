const modulus = require('../data/modulus');

exports.index = (req, res, next) => {
  res.status(200).send(modulus);
};

exports.show = (req, res, next) => {
  res.status(200).send(modulus[0]);
};