const db = require('../config/db');
const selectAll = async () => {
    const [result] = await db.query('SELECT posts.*, authors.name AS autor_nombre, authors.email AS autor_email, authors.image AS autor_imagen FROM posts JOIN authors ON posts.author_id = authors.id');
    return result;
}

module.exports = {
    selectAll
}