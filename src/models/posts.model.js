const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('SELECT posts.*, authors.name AS autor_nombre, authors.email AS autor_email, authors.image AS autor_imagen FROM posts JOIN authors ON posts.author_id = authors.id');
    return result;
}

const insert = async ({ title, description, category, author_id }) => {
    const [result] = await db.query(`insert into posts (title, description, category, created_at, author_id) values (?, ?, ?, ?, ?)`, [title, description, category, new Date(), author_id]);
    return result;
  };


module.exports = {
    selectAll, insert
}