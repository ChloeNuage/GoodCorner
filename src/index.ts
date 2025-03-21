import express from "express";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("good_corner.sqlite");

const app = express();
const port = 3000;

app.use(express.json());


app.get("/ads", (_req, res) => {
  db.all("SELECT * FROM AD", (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});


app.post("/ads", (req, res) => {
  const stmt = db.prepare("INSERT INTO AD (title, description, owner, price, createdAt, image, city) VALUES (?, ?, ?, ?, ?, ?, ?)");
  stmt.run([
    req.body.title,
    req.body.description,
    req.body.owner,
    req.body.price,
    req.body.createdAt,
    req.body.image,
    req.body.city
  ], (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send("Ad created");
    }
  });
});

app.delete("/ads/:id" , (req, res) => {
  const stmt = db.prepare("DELETE FROM AD WHERE id = ?");
  stmt.run([req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("Ad has been  deleted");
    }
  });
});

app.put("/ads/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const stmt = db.prepare('UPDATE AD SET title = ?, description = ?, owner = ?, price = ?, createdAt = ?, image = ?, city = ? WHERE id = ?');
  stmt.run([
    req.body.title,
    req.body.description,
    req.body.owner,
    req.body.price,
    req.body.createdAt,
    req.body.image,
    req.body.city,
    req.params.id
  ]);
  res.send("Ad updated! Good job sis!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  await dataSource.initialize();
});


/*
app.put("/ads/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  ads = ads.map((ad) => {
    if (Number.parseInt(req.params.id) === ad.id) {
      return req.body;
    } else {
      return ad;
    }
  });
  res.send("App updated! Good job sis!");
}); */

/* app.delete("/ads/:id", (req, res)=> {
  db.run("DELETE FROM AD WHERE id = ?", [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send("Ad deleted");
    }
  });
}); */
