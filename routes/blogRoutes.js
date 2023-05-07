import { Router } from "express";

import { createBlog } from "../controllers/blogControllers.js";

const app = Router();

app.route("/").post(createBlog);

export default app;
