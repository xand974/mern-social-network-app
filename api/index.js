require("dotenv").config();
require("./config/db");
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/Users");
const postRoutes = require("./routes/Posts");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("common"));
app.use(helmet());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
