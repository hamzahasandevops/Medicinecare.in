const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

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

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

database.connect(function (err) {
  if (err) {
    console.log("Error in connection");
  } else {
    console.log("connected");
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/create", upload.single("file"), (req, res) => {
  const sql =
    "INSERT INTO products (pro_name,pro_name1,pro_mrp,images) VALUES (?)";
  const values = [
    req.body.pro_name,
    req.body.pro_name1,
    req.body.pro_mrp,
    req.file.filename,
  ];

  database.query(sql, [values], (err, result) => {
    if (err) return res.json({ Error: "Error sign up query" });
    return res.json({ Status: "Success" });
  });
});

const conndb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

conndb.connect(function (err) {
  if (err) {
    console.log("Error in connection");
  } else {
    console.log("connected");
  }
});

app.get("/", (req, res) => {
  return res.json("From backend side sun raha hoon");
});

app.listen(8090, () => {
  console.log("LIstening");
});
