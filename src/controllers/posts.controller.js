const Post = require('../models/posts.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    res.json(posts);
}

const create = async (req, res) => {
    const result = await Post.insert(req.body);
    res.json(result);
}

module.exports = { getAll, create };