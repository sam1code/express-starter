const express = require("express");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send(process.env.PORT);
});
