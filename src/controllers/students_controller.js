const students = require('../data/students');

exports.show = (req, res, next) => {
  res.status(200).send(students[0]);
};

exports.update = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};