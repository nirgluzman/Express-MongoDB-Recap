import "dotenv/config";
import "colors";

import express from "express";

import blogRoutes from "./routes/blogRoutes.js";

import { connectDB } from "./db/dbinit.js";
connectDB();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.use("/blog", blogRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.red);
});
