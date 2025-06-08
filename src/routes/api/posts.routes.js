const router = require('express').Router();

// GET /api/posts
router.get('/', (req, res) => {
    res.status(200).json({ message: 'GET todos los posts (ruta base)' });
  });
  
  // POST /api/posts
  router.post('/', (req, res) => {
    res.status(200).json({ message: 'POST crear nuevo post (ruta base)' });
  });

module.exports = router