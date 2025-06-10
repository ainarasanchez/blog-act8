const db = require('../config/db');
const selectAll = async () => {
    const [result] = await db.query('select * from posts');
    return result;
}

module.exports = {
    selectAll
}