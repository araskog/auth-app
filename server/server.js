const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.post("/signin", (req, res) => {
  console.log(req);
});

app.post("/register", (req, res) => {
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
