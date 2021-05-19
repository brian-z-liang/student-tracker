// main server page
const express = require('express');
const fs = require('fs');
const path = require('path');



const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res, next) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server listening on PORT', PORT);
});
