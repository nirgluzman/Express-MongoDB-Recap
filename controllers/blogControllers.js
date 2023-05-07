import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({ message: blogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { author, email, topic, text, rating } = req.body;
    const newBlog = await Blog.create({
      date: new Date(),
      author,
      email,
      topic,
      text,
      rating,
    });

    res.status(201).json({ message: newBlog });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogsByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const blogs = await Blog.find({ author });

    if (!blogs.length) {
      return res.status(404).json({ message: "No entries found" });
    }

    return res.status(200).json({ message: blogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
