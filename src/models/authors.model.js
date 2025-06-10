const db = require('../config/db');

const selectAll = async () => {
  const [result] = await db.query('SELECT * FROM authors');
  return result;
};

const insert = async ({ name, email, image }) => {
  const [result] = await db.query(`INSERT INTO authors (name, email, image) VALUES (?, ?, ?)`, [name, email, image]);
  return result;
};

module.exports = {
  selectAll, insert
};
