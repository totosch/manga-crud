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

/*sql = "CREATE TABLE manga(id INTEGER PRIMARY KEY, manga TEXT NOT NULL);";
  db.run(sql);
*/  

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

/*
app.put("/", function (req, res) {
  const manga_update = req.body.manga;
  const id_update = req.body.id;
  updateDatabase(id, manga);
  console.log(req.body.id, req.body.manga);
});

app.delete("/", function (req, res) {
  const id_delete = req.body.id;
  deleteFromDatabase(id_delete);
})

*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


function addToDatabase(manga) {
  sql = "INSERT INTO manga (manga) VALUES (?)";
  db.run(sql, [manga], (err) => {
    if (err) return console.error(err.message);
    console.log("added to db successfuly");
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

/*
function updateDatabase(id, manga){
  sql = "UPDATE manga SET manga = ? WHERE id = ?";
  db.run(sql, [id, manga], (err) => {
    if (err) return console.error(err.message);
    console.log("updating was successful");
  })
}

function deleteFromDatabase(id){
  sql = "DELETE FROM manga WHERE id = ?"
  db.run(sql, [id], (err) => {
    if (err) return console.error(err.message);
    console.log("deleting was successful");
  })
}

*/
