const classrooms = require('../data/classrooms');

exports.show = (req, res, next) => {
  const { id } = req.params;
  
  res.status(200).send(classrooms[id+1]);
};