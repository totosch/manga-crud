const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

//db
const sqlite3 = require("sqlite3").verbose();
let sql;
const db = new sqlite3.Database(
  "./databaseManga.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
    console.log("connection successful");
  }
);

app.get("/", (req, res) => {
  showDatabase(db)
    .then((rows) => res.send(rows))
    .catch((err) =>
      res.send({
        error: err.message,
      })
    );
});

app.post("/", function (req, res) {
  res.send("post made");
  const manga = req.body.manga;
  addToDatabase(manga);
  console.log(req.body.manga);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//create table
/*sql = "CREATE TABLE manga(manga)";
  db.run(sql);
  */

function addToDatabase(manga) {
  sql = "INSERT INTO manga (manga) VALUES (?)";
  db.run(sql, [manga], (err) => {
    if (err) return console.error(err.message);
    console.log("connection successful");
  });
}

function showDatabase() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM manga", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}
