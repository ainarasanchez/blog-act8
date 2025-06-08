const router = require('express').Router();

// GET /api/authors
router.get('/', (req, res) => {
    res.status(200).json({ message: 'GET todos los autores (ruta base)' });
  });
  
  // POST /api/authors
  router.post('/', (req, res) => {
    res.status(200).json({ message: 'POST crear nuevo autor (ruta base)' });
  });

module.exports = router