import Blogs from '../models/Blog.js';

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();

    res.status(200).json({ message: blogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { author, email, topic, text, rating } = req.body;

    const newBlog = await Blogs.create({
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
    const blogs = await Blogs.find({ author });

    if (!blogs.length) {
      return res.status(404).json({ error: 'No entries found' });
    }

    return res.status(200).json({ message: blogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRatingById = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    const blog = await Blogs.findByIdAndUpdate(
      id,
      { rating },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!blog) {
      return res.status(422).json({ error: 'No entry found' });
    }

    return res.status(200).json({ message: blog });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blogs.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ error: 'No entry found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
