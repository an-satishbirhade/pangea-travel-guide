const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogs.controller');
router.get('/blogs', blogsController.getAllBlogs)
module.exports = router;