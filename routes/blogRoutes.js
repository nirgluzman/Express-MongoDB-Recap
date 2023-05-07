import { Router } from "express";

import {
  getAllBlogs,
  createBlog,
  getBlogsByAuthor,
} from "../controllers/blogControllers.js";

const app = Router();

app.route("/").get(getAllBlogs).post(createBlog);
app.route("/:author").get(getBlogsByAuthor);

export default app;
