const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/check-db', (req, res) => {
  db.query('SELECT NOW() AS now', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Conexión correcta', time: result[0].now });
  });
});

module.exports = router;
