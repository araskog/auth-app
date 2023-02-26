const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "users",
  },
});

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
  const { email, firstName, lastName, password } = req.body;
  db("users")
    .insert({
      email: email,
      firstname: firstName,
      lastname: lastName,
      joined: new Date(),
    })
    .then((data) => console.log(data));
  res.json(database.users[database.users.length - 1]);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
