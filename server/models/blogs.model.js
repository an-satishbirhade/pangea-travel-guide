const mongoose = require('mongoose');

const Blogs = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  post_date: {
    type: Date,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  imageURL: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("blogs", Blogs);