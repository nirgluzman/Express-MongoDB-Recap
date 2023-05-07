import { Router } from "express";

import {
  getAllBlogs,
  createBlog,
  getBlogsByAuthor,
  updateRatingById,
  deleteBlogById,
} from "../controllers/blogControllers.js";

const app = Router();

app.route("/").get(getAllBlogs).post(createBlog);
app.get("/:author", getBlogsByAuthor);
app.route("/:id").patch(updateRatingById).delete(deleteBlogById);

export default app;
