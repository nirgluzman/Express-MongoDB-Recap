import { Router } from "express";

import { getAllBlogs, createBlog } from "../controllers/blogControllers.js";

const app = Router();

app.route("/").get(getAllBlogs).post(createBlog);

export default app;
