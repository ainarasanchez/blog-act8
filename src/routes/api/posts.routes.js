const router = require('express').Router();

const { getAll, create } = require('../../controllers/posts.controller');

// GET /api/posts
router.get('/', getAll);
// POST /api/posts
router.post('/', create);

module.exports = router;