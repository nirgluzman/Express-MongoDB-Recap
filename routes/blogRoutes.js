import { Router } from "express";

import {
  getAllBlogs,
  createBlog,
  getBlogsByAuthor,
  updateRatingById,
} from "../controllers/blogControllers.js";

const app = Router();

app.route("/").get(getAllBlogs).post(createBlog);
app.get("/:author", getBlogsByAuthor);
app.patch("/:id", updateRatingById);

export default app;
