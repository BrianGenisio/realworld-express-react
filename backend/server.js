const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
require("colors");
const { errorHandler } = require("./middlewares/errorHandler");
require("./models/relationships");

dotenv.config({ path: "config.env" });

const app = express();

// Body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Route files
const users = require("./routes/users");
const profiles = require("./routes/profiles");
const articles = require("./routes/articles");
const comments = require("./routes/comments");
const tags = require("./routes/tags");

// Mount routers
app.use(users);
app.use(profiles);
app.use(articles);
app.use(comments);
app.use(tags);

const PORT = process.env.PORT || 3001;

app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
