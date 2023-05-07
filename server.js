import express from "express";
import "colors";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.red);
});
