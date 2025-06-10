const Author = require('../models/authors.model');

const getAll = async (req, res) => {
  const authors = await Author.selectAll();
  res.json(authors);
};

const create = async (req, res) => {
  const result = await Author.insert(req.body);
  res.json(result);
};

module.exports = { getAll, create };