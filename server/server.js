const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");
const bcrypt = require("bcrypt-nodejs");

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

app.post("/signin", (req, res) => {
  db.transaction((trx) => {
    trx
      .select("email", "hash")
      .where("email", "=", req.body.email)
      .from("login")
      .then((data) => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (isValid) {
          db.select("logins")
            .from("users")
            .where("email", "=", req.body.email)
            .update({
              logins: db.raw("array_append(logins, ?)", [new Date()]),
            })
            .returning("*")
            .then((user) => res.json(user[0]))
            .catch((err) => res.status(400).json("Unable to log in"));
        }
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("Unable to log in"));
});

app.post("/register", (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const hash = bcrypt.hashSync(password);

  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .then(() =>
        db("users")
          .returning("*")
          .insert({
            email: email,
            firstname: firstName,
            lastname: lastName,
            logins: [new Date()],
            joined: new Date(),
          })
      )
      .then((user) => res.json(user[0]))
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("Unable to register"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
