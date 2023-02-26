const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "123",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@gmail.com",
      password: "happy",
      logins: [],
      joined: new Date(),
    },
    {
      id: "321",
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      password: "sad",
      logins: [],
      joined: new Date(),
    },
  ],
};

app.post("/signin", (req, res) => {
  console.log(req.body.email, req.body.password);
  console.log(database.users[0].email, database.users[0].password);
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("Error logging in");
  }
});

app.post("/register", (req, res) => {
  console.log("Registration details", req.body);
  res.json("register");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
