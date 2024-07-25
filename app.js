const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const CategoriesRouter = require("./routes/categories");
const AuthRouter = require("./routes/AuthRouter");
const morgan = require("morgan");

// ENV
dotenv.config();

// MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// ROUTING
app.use(`/api/v1/categories`, CategoriesRouter);
app.use(`/api/v1/auth`, AuthRouter);

// SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
