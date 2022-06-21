const BlogSchema = require('../models/blogs.model');
class Blogs {

  getAllBlogs = async (req, res) => {
    try {
      const blogs = await BlogSchema.find();
      res.send(blogs);
    } catch (error) {
      console.log("Error", error);
    }
  }
  getBlogById = async () => {

  }
}
module.exports = new Blogs();