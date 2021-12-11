const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/users', (req, res) => {
  db.query(`select * from users`, (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  });
});

app.get('/api/places', (req, res) => {
  db.query(`select * from places`, (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  });
});

app.get('/api/enrolls', (req, res) => {
  db.query(`select * from enrolls`, (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  });
});
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
