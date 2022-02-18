const certificates = require('../data/certificates');

exports.index = (req, res, next) => {
  res.status(200).send(certificates);
};