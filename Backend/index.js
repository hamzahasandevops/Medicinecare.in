const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

db.connect();

// app.post("/test", (req, res) => {});

app.post("/users", (req, res) => {
  const sql = "INSERT INTO login (name,email,password) Values (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/", (req, res) => {
  return res.json("From backend side sun raha hoon");
});

app.listen(8090, () => {
  console.log("LIstening");
});
