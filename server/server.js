const express = require('express');
// const db = require('../src/firebase-config.js');

const app = express();

app.get('/api/dogs', (req, res) => {
  res.send('it works!');
});

app.post("/users", (req, res) => {

});

const port = 8080;

app.listen(port, () => {
  console.log('connected to port: ', port);
});

