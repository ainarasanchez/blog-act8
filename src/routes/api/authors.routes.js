const router = require('express').Router();
const { getAll, create } = require('../../controllers/authors.controller');
const { getByAuthor } = require('../../controllers/posts.controller');

router.get('/', getAll);
router.get('/:authorId/posts', getByAuthor);
router.post('/', create);


module.exports = router;
