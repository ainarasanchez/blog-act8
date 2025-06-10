const Post = require('../models/posts.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    res.json(posts);
}

module.exports = { getAll };