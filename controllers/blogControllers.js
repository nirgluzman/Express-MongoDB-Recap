import Blog from "../models/Blog.js";

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
