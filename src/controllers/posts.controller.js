const Post = require('../models/posts.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    res.json(posts);
}

const create = async (req, res) => {
    const result = await Post.insert(req.body);
    res.json(result);
}

const getByAuthor = async (req, res) => {
    const authorId = req.params.authorId;
    const posts = await Post.getByAuthor(authorId);
    res.json(posts);
  };

module.exports = { getAll, create, getByAuthor };