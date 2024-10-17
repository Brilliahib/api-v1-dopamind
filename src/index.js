const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");

// Load variables from .env file
require("dotenv").config({ path: ".env.local" });

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

app.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    status: "success",
    message: "Welcome to API Dopamind",
  });
});
